import React, { createContext, useState, useEffect, useContext } from 'react';
import PersonModel from '../models/PersonModel';

const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initialData = PersonModel.getInitialData();
        const savedData = localStorage.getItem('said_web_data');
        
        if (savedData) {
            let data = JSON.parse(savedData);
            
            // Critical Cache Fix: 
            // If the code version (initialData.version) is higher or different than stored,
            // we force initialData for everything to ENSURE the user sees the latest hardcoded sync,
            // but we can try to keep user-specific settings if there were any.
            if (!data.version || data.version !== initialData.version) {
                console.log("Forcing update to version:", initialData.version);
                const forcedSync = { ...initialData };
                setPerson(forcedSync);
                localStorage.setItem('said_web_data', JSON.stringify(forcedSync));
            } else {
                setPerson(data);
            }
        } else {
            initialData.settings = { candidacyEnabled: true };
            setPerson(initialData);
            localStorage.setItem('said_web_data', JSON.stringify(initialData));
        }
        setLoading(false);
    }, []);

    const updatePerson = (newData) => {
        setPerson({...newData});
        localStorage.setItem('said_web_data', JSON.stringify(newData));
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
