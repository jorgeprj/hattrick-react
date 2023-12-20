import API_BASE_URL from '../config';

export const getPlayers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/players/`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const playersData = await response.json();

        return playersData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};

export const getPlayer = async (playerId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/players/${playerId}`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const playerData = await response.json();

        return playerData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
}