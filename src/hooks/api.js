const API_BASE_URL = 'http://localhost:5000';

export const handleResponse = async (response, errorMessage) => {
    if (!response.ok) {
        throw new Error(errorMessage);
    }
    return response.json();
};

export const handleRequestError = (error) => {
    console.error('Error during API request:', error);
    throw error;
};

export const fetchEntity = async (entityType, entityId = '') => {
    try {
        const response = await fetch(`${API_BASE_URL}/${entityType}/${entityId}`);
        return handleResponse(response, `Error retrieving ${entityType} information`);
    } catch (error) {
        handleRequestError(error);
    }
};

export const editEntity = async (entityType, entityId, updatedEntityData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${entityType}/${entityId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEntityData),
        });
        return handleResponse(response, `Error editing ${entityType} information`);
    } catch (error) {
        handleRequestError(error);
    }
};

export const deleteEntity = async (entityType, entityId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${entityType}/${entityId}`, {
            method: 'DELETE',
        });
        return handleResponse(response, `Error deleting ${entityType}`);
    } catch (error) {
        handleRequestError(error);
    }
};