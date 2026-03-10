import { useState, useEffect } from 'react';
import PersonModel from '../models/PersonModel';

/**
 * PersonController hook
 * Manages the state of the person data and any business logic.
 */
export const usePersonController = () => {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate data fetching or processing
        try {
            const data = PersonModel.getInitialData();
            setPerson(data);
        } catch (err) {
            setError("Failed to load person data.");
        } finally {
            setLoading(false);
        }
    }, []);

    const handleContactClick = () => {
        alert(`Contacting ${person.name}... (Feature in progress)`);
    };

    return {
        person,
        loading,
        error,
        handleContactClick
    };
};
