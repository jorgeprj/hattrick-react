import React from 'react'
import { FaRegPenToSquare } from 'react-icons/fa6'
import LeagueLink from '../../../components/navigation/LeagueLink'

const BasicInfo = ({ team }) => {
    return (
        <section>
            <h4 className='flex items-center font-semibold text-lg mb-4'>
                Basic Info
                <a href={`/hattrickdata/editteam/${team.id}`} className='ml-2 text-xs text-gray-400 hover:text-black'>
                    <FaRegPenToSquare />
                </a>
            </h4>
            <div className='flex justify-between gap-8'>
                <div className='flex flex-col gap-4 text-xs items-start text-neutral-500 whitespace-nowrap'>
                    <p>Name</p>
                    <p>League</p>
                    <p>Location</p>
                    <p>Nickname</p>
                    <p>Founded</p>
                    <p>Ground</p>
                    <p>Capacity</p>
                    <p>Owner</p>
                </div>

                <div className='flex flex-col gap-4 text-xs items-start font-semibold whitespace-nowrap'>
                    <p>{team.clubInfo.completedName}</p>
                    <span>
                        <LeagueLink leagueId={team.league.id} leagueName={team.league.name} className={"text-xs"} />
                    </span>
                    <p>{team.clubInfo.location}</p>
                    <p>{team.clubInfo.nickname}</p>
                    <p>{team.clubInfo.founded}</p>
                    <p>{team.clubInfo.ground}</p>
                    <p>{team.clubInfo.capacity}</p>
                    <p>{team.clubInfo.owner}</p>
                </div>
            </div>
        </section>
    )
}

export default BasicInfo