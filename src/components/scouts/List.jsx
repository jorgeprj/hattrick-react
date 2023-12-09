import { useEffect, useState } from 'react';

import Header from './header/Header';
import Player from './player/Player';

import './List.css';
import { calculateFutzScore } from '../../utils/futzScore';

const List = ({ scoutedPlayers, setScoutedPlayers, teams, year }) => {
    const [sortColumn, setSortColumn] = useState('');
    const [sortOrder, setSortOrder] = useState('');


    const handleSort = (column) => {
        const newOrder = sortColumn === column && sortOrder === 'desc' ? 'asc' : 'desc';

        setSortColumn(column);
        setSortOrder(newOrder);

        const sortedPlayers = [...scoutedPlayers].sort((a, b) => {
            let aValue, bValue;

            if (column === 'Overall') {
                aValue = a.overall;
                bValue = b.overall;
            } else if (column === 'Age') {
                aValue = b.age;
                bValue = a.age;
            } else if (column === 'Contract') {
                aValue = a.contract;
                bValue = b.contract;
            } else if (column === 'FutzScore') {
                aValue = calculateFutzScore(a, year);
                bValue = calculateFutzScore(b, year);
            }
            else {
                return 0;
            }
            return newOrder === 'asc' ? aValue - bValue : bValue - aValue;
        });

        setScoutedPlayers(sortedPlayers);
    };

    useEffect(() => {
        handleSort('FutzScore');
    }, []); 


    return (
        <table className='scout-list'>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <Header column='Age' sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
                    <Header column='Contract' sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
                    <Header column='Overall' sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
                    <Header column='FutzScore' sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
                </tr>
            </thead>
            <tbody>
                {scoutedPlayers.map(player => (<Player player={player} teams={teams} year={year} key={player.id} />))}
            </tbody>
        </table>
    )
}

export default List