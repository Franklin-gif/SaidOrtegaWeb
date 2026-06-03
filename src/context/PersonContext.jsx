import React, { createContext, useState, useEffect, useContext } from 'react';
import PersonModel from '../models/PersonModel';
import { db } from '../firebase';
import { doc, onSnapshot, setDoc, collection, query, orderBy, addDoc, deleteDoc } from 'firebase/firestore';

const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
    const [person, setPerson] = useState(null);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dbStatus, setDbStatus] = useState('connecting'); // 'connecting', 'online', 'error', 'offline'

    useEffect(() => {
        const initialData = PersonModel.getInitialData();
        const docRef = doc(db, 'web_data', 'said_web');

        console.log("Iniciando conexión con Firestore...");

        const unsubscribeMain = onSnapshot(docRef, 
            async (docSnap) => {
                const data = docSnap.exists() ? docSnap.data() : null;
                
                if (docSnap.exists() && data && data.sections) {
                    console.log("Datos recibidos de Firestore:", data.version);
                    setPerson(data);
                    setDbStatus('online');
                } else {
                    console.log("Documento vacío o no existe. Restaurando estructura inicial...");
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

        // Escuchar testimonios en tiempo real
        const testimonialsRef = collection(db, 'testimonials');
        const testimonialsQuery = query(testimonialsRef, orderBy('createdAt', 'desc'));
        const unsubscribeTestimonials = onSnapshot(testimonialsQuery, 
            (querySnap) => {
                const list = [];
                querySnap.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setTestimonials(list);
            },
            (error) => {
                console.error("Error al cargar testimonios en tiempo real:", error.code, error.message);
            }
        );

        return () => {
            unsubscribeMain();
            unsubscribeTestimonials();
        };
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

    const addTestimonial = async (testimonial) => {
        try {
            const testimonialsRef = collection(db, 'testimonials');
            await addDoc(testimonialsRef, {
                ...testimonial,
                createdAt: new Date().toISOString()
            });
        } catch (error) {
            console.error("Error al guardar testimonio:", error);
            throw error;
        }
    };

    const deleteTestimonial = async (id) => {
        try {
            const testimonialDocRef = doc(db, 'testimonials', id);
            await deleteDoc(testimonialDocRef);
        } catch (error) {
            console.error("Error al borrar testimonio:", error);
            throw error;
        }
    };

    return (
        <PersonContext.Provider value={{ person, testimonials, loading, updatePerson, addTestimonial, deleteTestimonial, dbStatus }}>
            {children}
        </PersonContext.Provider>
    );
};

export const usePerson = () => {
    const context = useContext(PersonContext);
    if (!context) throw new Error("usePerson must be used within a PersonProvider");
    return context;
};
