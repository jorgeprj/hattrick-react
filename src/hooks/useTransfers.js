import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity } from './api';
import { useEffect, useState } from 'react';

const useTransfers = () => {
    const { data: transfers, error, mutate } = useSWR('transfers', fetchEntity);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, []);

    const updateTransfer = async (transferId, updatedTransferData) => {
        try {
            const result = await editEntity('transfers', transferId, updatedTransferData);
            mutate(updatedData => updatedData.map(transfer => (transfer.id === transferId ? result : transfer)), false);
        } catch (error) {
            console.error('Error updating transfer:', error);
        }
    };

    const deleteTransfer = async (transferId) => {
        try {
            await deleteEntity('transfers', transferId);
            mutate(updatedData => updatedData.filter(transfer => transfer.id !== transferId), false);
        } catch (error) {
            console.error('Error deleting transfer:', error);
        }
    };

    return { transfers, error, isLoading, updateTransfer, deleteTransfer };
};

export default useTransfers;