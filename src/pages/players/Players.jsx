import React, { useState } from 'react'

import usePlayers from '../../hooks/usePlayers';

import Loading from '../../components/feedback/Loading';
import NotFound from '../notFound/NotFound';
import PlayerCard from './PlayerCard';
import { getHatScore } from '../../utils/hatScore';
import Search from '../../components/input/Search';

const Players = ({ year }) => {
    const { players, error: playersError, isLoading: playersLoading } = usePlayers();
    const [search, setSearch] = useState("");
    
    if (playersLoading) {
        return <Loading />;
    }

    if (playersError) {
        return <NotFound />;
    }

    return (
        <div className='flex flex-col items-center py-4'>
            <Search className={"w-[250px] lg:w-[450px]"} search={search} setSearch={setSearch} />
            <div className='flex flex-col gap-8 w-full items-center mt-8 px-8 min-h-[80vh]'>
                {players
                    .filter(player => player.isScouted === true)
                    .filter((player) =>
                        player.bio.toLowerCase().includes(search.toLowerCase()) ||
                        player.nationality.toLowerCase().includes(search.toLowerCase()) ||
                        player.teamHistory.some(teamEntry =>
                            teamEntry.team.name.toLowerCase().includes(search.toLowerCase())
                        )
                    )
                    .sort((playerA, playerB) => {
                        const scoreA = getHatScore(playerA, year);
                        const scoreB = getHatScore(playerB, year);

                        return scoreB - scoreA;
                    })
                    .map(player => (
                        <PlayerCard player={player} year={year} key={player.id} />
                    ))}
            </div>
        </div>
    )
}

export default Players