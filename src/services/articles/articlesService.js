import API_BASE_URL from '../config';


export const getArticles = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/articles/`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const articlesData = await response.json();

        return articlesData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};

export const getArticle = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/articles/${id}`);

        if (!response.ok) {
            throw new Error('Error retrieving team information');
        }

        const articleData = await response.json();

        return articleData;

    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};