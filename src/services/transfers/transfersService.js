import API_BASE_URL from '../apiConfig';

export const getTransfers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/transfers/`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const transfersData = await response.json();

        return transfersData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};