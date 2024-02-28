import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity } from './api';
import { useEffect, useState } from 'react';

const useLeagues = () => {
	const { data: leagues, error, mutate } = useSWR('leagues', fetchEntity);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 300);

		return () => clearTimeout(timeoutId);
	}, []);

	const updateLeague = async (leagueID, updatedLeagueData) => {
		try {
			const result = await editEntity('leagues', leagueID, updatedLeagueData);
			mutate(updatedData => updatedData.map(league => (league.id === leagueID ? result : league)), false);
		} catch (error) {
			console.error('Error updating league:', error);
		}
	};

	const deleteLeague = async (leagueID) => {
		try {
			await deleteEntity('leagues', leagueID);
			mutate(updatedData => updatedData.filter(league => league.id !== leagueID), false);
		} catch (error) {
			console.error('Error deleting league:', error);
		}
	};

	return { leagues, error, isLoading, updateLeague, deleteLeague };
};

export default useLeagues;