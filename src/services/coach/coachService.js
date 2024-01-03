import API_BASE_URL from '../config';


export const getCoaches = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/coaches/`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const coachData = await response.json();

        return coachData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};

export const getCoach = async (coachId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/coaches/${coachId}`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const coachData = await response.json();

        return coachData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};