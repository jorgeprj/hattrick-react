import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity } from './api';
import { useEffect, useState } from 'react';

const useManagers = () => {
    const { data: managers, error, mutate } = useSWR('managers', fetchEntity);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, []);

    const updateManager = async (managerId, updatedManagerData) => {
        try {
            const result = await editEntity('managers', managerId, updatedManagerData);
            mutate(updatedData => updatedData.map(manager => (manager.id === managerId ? result : manager)), false);
        } catch (error) {
            console.error('Error updating manager:', error);
        }
    };

    const deleteManager = async (managerId) => {
        try {
            await deleteEntity('managers', managerId);
            mutate(updatedData => updatedData.filter(manager => manager.id !== managerId), false);
        } catch (error) {
            console.error('Error deleting manager:', error);
        }
    };

    return { managers, error, isLoading, updateManager, deleteManager };
};

export default useManagers;