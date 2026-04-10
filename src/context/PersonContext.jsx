import React, { createContext, useState, useEffect, useContext } from 'react';
import PersonModel from '../models/PersonModel';
import { db } from '../firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dbStatus, setDbStatus] = useState('connecting'); // 'connecting', 'online', 'error', 'offline'

    useEffect(() => {
        const initialData = PersonModel.getInitialData();
        const docRef = doc(db, 'web_data', 'said_web');

        console.log("Iniciando conexión con Firestore...");

        const unsubscribe = onSnapshot(docRef, 
            async (docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    console.log("Datos recibidos de Firestore:", data.version);
                    
                    // If versions differ, we keep the Firestore data (user edits) 
                    // and just update the version locally if needed, but we don't overwrite the cloud data.
                    setPerson(data);

                    setDbStatus('online');
                } else {
                    console.log("Documento no existe. Creando inicial...");
                    try {
                        const dataToSave = { ...initialData, settings: { candidacyEnabled: true } };
                        await setDoc(docRef, dataToSave);
                        setPerson(dataToSave);
                        setDbStatus('online');
                    } catch (e) {
                        console.error("Error creando documento inicial:", e);
                        setDbStatus('error');
                        setPerson(initialData);
                    }
                }
                setLoading(false);
            }, 
            (error) => {
                console.error("Fallo crítico de Firestore:", error.code, error.message);
                setDbStatus('error');
                // Si falla la nube, usamos datos locales/hardcoded para que la web no muera
                setPerson(initialData);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    const updatePerson = async (newData) => {
        try {
            const docRef = doc(db, 'web_data', 'said_web');
            await setDoc(docRef, { ...newData, lastUpdate: new Date().toISOString() });
            // No hacemos setPerson aquí, dejamos que onSnapshot lo haga para confirmar el sync real
        } catch (error) {
            console.error("Error al guardar en la nube:", error);
            alert("⚠️ Error al guardar: Revisa si activaste el 'Modo de Prueba' en las reglas de Firebase.");
            throw error;
        }
    };

    return (
        <PersonContext.Provider value={{ person, loading, updatePerson, dbStatus }}>
            {children}
        </PersonContext.Provider>
    );
};

export const usePerson = () => {
    const context = useContext(PersonContext);
    if (!context) throw new Error("usePerson must be used within a PersonProvider");
    return context;
};
