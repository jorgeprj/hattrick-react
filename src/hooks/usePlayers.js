import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity } from './api';
import { useEffect, useState } from 'react';

const usePlayers = () => {
	const { data: players, error, mutate } = useSWR('players', fetchEntity);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 300);

		return () => clearTimeout(timeoutId);
	}, []);

	const updatePlayer = async (playerId, updatedPlayerData) => {
		try {
			const result = await editEntity('players', playerId, updatedPlayerData);
			mutate(updatedData => updatedData.map(player => (player.id === playerId ? result : player)), false);
		} catch (error) {
			console.error('Error updating player:', error);
		}
	};

	const deletePlayer = async (playerId) => {
		try {
			await deleteEntity('players', playerId);
			mutate(updatedData => updatedData.filter(player => player.id !== playerId), false);
		} catch (error) {
			console.error('Error deleting player:', error);
		}
	};

	return { players, error, isLoading, updatePlayer, deletePlayer };
};

export default usePlayers;