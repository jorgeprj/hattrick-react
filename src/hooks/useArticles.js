import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity } from './api';
import { useEffect, useState } from 'react';

const useArticles = () => {
    const { data: articles, error, mutate } = useSWR('articles', fetchEntity);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, []);

    const updateArticle = async (articleId, updatedArticleData) => {
        try {
            const result = await editEntity('articles', articleId, updatedArticleData);
            mutate(updatedData => updatedData.map(article => (article.id === articleId ? result : article)), false);
        } catch (error) {
            console.error('Error updating article:', error);
        }
    };

    const deleteArticle = async (articleId) => {
        try {
            await deleteEntity('articles', articleId);
            mutate(updatedData => updatedData.filter(article => article.id !== articleId), false);
        } catch (error) {
            console.error('Error deleting article:', error);
        }
    };

    return { articles, error, isLoading, updateArticle, deleteArticle };
};

export default useArticles;