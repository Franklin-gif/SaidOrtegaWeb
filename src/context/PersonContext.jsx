import React, { createContext, useState, useEffect, useContext } from 'react';
import PersonModel from '../models/PersonModel';

const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedData = localStorage.getItem('said_web_data');
        if (savedData) {
            let data = JSON.parse(savedData);
            
            // Migration for Bio: paragraphs -> paragraph
            if (data.sections.bio && !data.sections.bio.paragraph) {
                data.sections.bio.paragraph = data.sections.bio.paragraphs?.length > 0 
                    ? data.sections.bio.paragraphs[0] 
                    : { es: '', en: '', pt: '', ar: '' };
            }

            // Ensure candidacy structure matches new model
            if (data.sections.candidacy && !data.sections.candidacy.videoUrl) {
                const initial = PersonModel.getInitialData();
                data.sections.candidacy.videoUrl = initial.sections.candidacy.videoUrl;
                data.sections.candidacy.proposalPdfUrl = initial.sections.candidacy.proposalPdfUrl;
            }

            setPerson(data);
        } else {
            const initialData = PersonModel.getInitialData();
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
