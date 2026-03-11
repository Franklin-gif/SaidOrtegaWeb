import React, { createContext, useState, useEffect, useContext } from 'react';
import PersonModel from '../models/PersonModel';
import { db } from '../firebase';
import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore';

const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initialData = PersonModel.getInitialData();
        const docRef = doc(db, 'web_data', 'said_web');

        // Escuchar cambios en tiempo real desde Firestore
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                
                // Si la versión del código es distinta a la de la DB, sincronizamos
                if (data.version !== initialData.version) {
                    console.log("Detectada nueva versión en código, actualizando DB...");
                    const syncedData = { ...initialData };
                    setDoc(docRef, syncedData);
                    setPerson(syncedData);
                } else {
                    setPerson(data);
                }
            } else {
                // Si no existe el documento en Firestore, lo creamos con initialData
                console.log("Inicializando Firestore con datos por defecto...");
                const dataToSave = { ...initialData, settings: { candidacyEnabled: true } };
                setDoc(docRef, dataToSave);
                setPerson(dataToSave);
            }
            setLoading(false);
        }, (error) => {
            console.error("Error en Firestore Listener:", error);
            // Fallback si falla Firestore por reglas de seguridad aún no activadas
            setPerson(initialData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const updatePerson = async (newData) => {
        try {
            const docRef = doc(db, 'web_data', 'said_web');
            await setDoc(docRef, newData);
            setPerson({...newData});
        } catch (error) {
            console.error("Error guardando en Firestore:", error);
        }
    };

    return (
        <PersonContext.Provider value={{ person, loading, updatePerson }}>
            {children}
        </PersonContext.Provider>
    );
};

export const usePerson = () => {
    const context = useContext(PersonContext);
    if (!context) throw new Error("usePerson must be used within a PersonProvider");
    return context;
};
