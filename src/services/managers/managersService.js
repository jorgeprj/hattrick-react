import API_BASE_URL from '../config';


export const getManagers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/managers/`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const managersData = await response.json();

        return managersData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};

export const getManager = async (managerId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/managers/${managerId}`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const managerData = await response.json();

        return managerData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};