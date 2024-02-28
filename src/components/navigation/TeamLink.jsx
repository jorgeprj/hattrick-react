import React from 'react'

const TeamLink = ({teamId, teamName}) => {
    return (
        <div className='flex text-sm gap-2'>
            <div className='flex items-center font-semibold gap-1 hover:underline'>
                <img className='h-4' src={`../../src/assets/teams/${teamId}.png`} alt={`${teamName} image`} />
                <a href={`/team/${teamId}`} className='text-nowrap'>
                    {teamName}
                </a>
            </div>
        </div>
    )
}

export default TeamLink