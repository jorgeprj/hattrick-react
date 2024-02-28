import React, { useState } from 'react'
import Avatar from '../../../components/dataDisplay/Avatar';
import TeamLink from '../../../components/navigation/TeamLink';
import { FaAngleDown, FaAngleUp, FaRegPenToSquare } from 'react-icons/fa6';

const ClubHistory = ({ player }) => {
    const [showAllTeams, setShowAllTeams] = useState(false);
    const teamsToDisplay = showAllTeams ? player.teamHistory : player.teamHistory.slice(0, 2);

    return (
        <section>
            <h3 className='flex items-center font-semibold text-lg mb-4'>
                Club History
                <a href={`/hattrickdata/editplayer/${player.id}`} className='ml-2 text-xs text-gray-400 hover:text-black'>
                    <FaRegPenToSquare />
                </a>
            </h3>
            <div className='flex flex-col gap-2'>
                {teamsToDisplay.map((team, index) => (
                    <div key={index} className='flex gap-2 items-center text-sm'>
                        <Avatar src={`../../src/assets/teams/${team.team.id}.png`} className={"h-9 w-9 p-1"} />
                        <div>
                            <a href={`/team/${team.team.id}`} className='hover:underline'>
                                <h5 className='text-neutral-700 font-medium text-nowrap'>{team.team.name}</h5>
                            </a>
                            <h6 className='text-neutral-400'>{team.season}</h6>
                        </div>
                    </div>
                ))}
                {player.teamHistory.length > 2 && !showAllTeams && (
                    <div>
                        <button className="flex items-center text-sm gap-2 font-medium" onClick={() => setShowAllTeams(true)}>
                            <FaAngleDown />
                            Show Older
                        </button>
                    </div>
                )}
                {showAllTeams && (
                    <div>
                        <button className="text-sm" onClick={() => setShowAllTeams(false)}>
                            <FaAngleUp />
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ClubHistory