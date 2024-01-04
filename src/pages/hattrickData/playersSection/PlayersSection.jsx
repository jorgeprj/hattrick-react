import React, { useEffect, useState } from 'react'
import './PlayersSection.css'
import Search from '../../../components/layout/search/Search'
import { Link } from 'react-router-dom'
import { isPlayerCompleted } from '../../../utils/isPlayerCompleted'
import { FaPen, FaX } from 'react-icons/fa6'
import { deletePlayer, getPlayers } from '../../../services/players/playersService'
import Loading from '../../../components/layout/loading/Loading'
import DeleteModal from '../../../components/modals/deleteModal/DeleteModal'

const PlayersSection = () => {
	const [search, setSearch] = useState("");
	const [status, setStatus] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
	const [player, setPlayer] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const playersData = await getPlayers();
                setPlayers(playersData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchData();
    }, [status]);

    if (isLoading) {
        return <Loading />;
    }

	const toggleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    }

	const handleDelete = (playerId) => {
        setPlayer(playerId);
        setDeleteModal(!deleteModal);
    }

    const removePlayer = async () => {
        try {
            const deletedPlayerData = await deletePlayer(player);
            setStatus('yes');
        } catch (error) {
            console.error('Error deleting player:', error);
            setStatus('no');
        } finally {
            setDeleteModal(false);
            setTimeout(() => {
                setStatus('');
            }, 1000);
        }

    }
	return (
		<>
			{status === 'yes' && <p className="success-message">Player deleted successfully!</p>}
			{status === 'no' && <p className="error-message">Error deleting player. Please try again.</p>}
			{deleteModal && (
				<DeleteModal handleClose={toggleDeleteModal} handleDelete={removePlayer} />
			)}
			<div className='header'>
				<h4>Total Players: {players.length}</h4>
				<Search search={search} setSearch={setSearch} />
				<Link to={`/hattrickdata/addplayer`}>
					<button>+ Add player</button>
				</Link>
			</div>
			<table className='players-table'>
				<thead>
					<tr>
						<th>Status</th>
						<th>ID</th>
						<th>Name</th>
						<th>Age</th>
						<th>Nationality</th>
						<th>Position</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{players
						.filter((player) =>
							player.name.toLowerCase().includes(search.toLowerCase()) ||
							player.nationality.toLowerCase().includes(search.toLowerCase()) ||
							player.teamHistory.some(teamEntry =>
								teamEntry.team.name.toLowerCase().includes(search.toLowerCase())
							)
						)
						.map((player) => (
							<tr key={player.id}>
								<td className={`status ${isPlayerCompleted(player) ? 'green' : 'red'}`}>
									{isPlayerCompleted(player) ? 'Completed' : 'Incomplete'}
								</td>
								<td>{player.id}</td>
								<td>{player.name} </td>
								<td>{player.age}</td>
								<td>{player.nationality}</td>
								<td>{player.position}</td>
								<td className='action'>
									<Link to={`/hattrickdata/editplayer/${player.id}`}>
										<FaPen />
									</Link>
									<FaX onClick={() => handleDelete(player.id)} />
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</>

	)
}

export default PlayersSection