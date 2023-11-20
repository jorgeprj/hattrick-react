import { useState } from 'react';
import { calculateFutzScore } from '../../utils/calculateFutzScoreUtils';

import HeaderList from './headerList/HeaderList';
import ScoutPlayer from './scoutPlayer/ScoutPlayer';

import './ScoutList.css';

const ScoutList = ({ players, setPlayers, year }) => {

    const [sortColumn, setSortColumn] = useState('FutzScore');
    const [sortOrder, setSortOrder] = useState('desc');


    const handleSort = (column) => {
        const newOrder = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';

        setSortColumn(column);
        setSortOrder(newOrder);

        const sortedPlayers = [...players].sort((a, b) => {
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

        setPlayers(sortedPlayers);
    };

    return (
        <table className='scout-list'>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <HeaderList column='Age' sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
                    <HeaderList column='Contract' sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
                    <HeaderList column='Overall' sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
                    <HeaderList column='FutzScore' sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
                </tr>
            </thead>
            <tbody>
                {players.map(player => (<ScoutPlayer player={player} year={year} key={player.id} />))}
            </tbody>
        </table>
    )
}

export default ScoutList