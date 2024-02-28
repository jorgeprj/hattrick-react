import React from 'react'

import { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaRegPenToSquare } from "react-icons/fa6"
import Avatar from '../../../components/dataDisplay/Avatar';

const NationalHistory = ({ player }) => {
    const [showAllNational, setShowAllNational] = useState(false);
    const nationalToDisplay = showAllNational ? player.nationalTeam : player.nationalTeam.slice(0, 2);

    return (
        <section className='national-history'>
            <h3 className='flex items-center font-semibold text-lg mb-4'>
                National Team
                <a href={`/hattrickdata/editplayer/${player.id}`} className='ml-2 text-xs text-gray-400 hover:text-black'>
                    <FaRegPenToSquare />
                </a>
            </h3>
            <div className='flex flex-col gap-2'>
                {nationalToDisplay.map((team, index) => (
                    <div key={index} className='flex gap-2 items-center text-sm'>
                        <Avatar src={`../../src/assets/nationalTeams/${player.nationality}.png`} className={"h-9 w-9 p-1"} />
                        <div>
                            <h5 className='text-neutral-700 font-medium text-nowrap'>{team.name}</h5>
                            <h6 className='text-neutral-400'>{team.season}</h6>
                        </div>
                    </div>
                ))}
                {player.nationalTeam.length > 2 && !showAllNational && (
                    <div>
                        <button className="flex items-center text-sm gap-2 font-medium" onClick={() => setShowAllNational(true)}>
                            <FaAngleDown />
                            Show Older
                        </button>
                    </div>
                )}
                {showAllNational && (
                    <div>
                        <button className="text-sm" onClick={() => setShowAllNational(false)}>
                            <FaAngleUp />
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default NationalHistory