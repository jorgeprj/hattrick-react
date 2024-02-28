import useSWR from 'swr';
import { fetchEntity, editEntity, deleteEntity } from './api';
import { useEffect, useState } from 'react';

const useTeams = () => {
	const { data: teams, error, mutate } = useSWR('teams', fetchEntity);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 300);

		return () => clearTimeout(timeoutId);
	}, []);

	const updateTeam = async (teamId, updatedTeamData) => {
		try {
			const result = await editEntity('teams', teamId, updatedTeamData);
			mutate(updatedData => updatedData.map(team => (team.id === teamId ? result : team)), false);
		} catch (error) {
			console.error('Error updating team:', error);
		}
	};

	const deleteTeam = async (teamId) => {
		try {
			await deleteEntity('teams', teamId);
			mutate(updatedData => updatedData.filter(team => team.id !== teamId), false);
		} catch (error) {
			console.error('Error deleting team:', error);
		}
	};

	return { teams, error, isLoading, updateTeam, deleteTeam };
};

export default useTeams;