import API_BASE_URL from '../apiConfig';

export const getTeams = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/teams/`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const teamsData = await response.json();

        return teamsData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};

export const getTeam = async (teamId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/teams/${teamId}`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const teamData = await response.json();

        return teamData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};