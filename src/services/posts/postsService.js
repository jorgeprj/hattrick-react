import API_BASE_URL from '../apiConfig';

export const getPosts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const postsData = await response.json();

        return postsData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};