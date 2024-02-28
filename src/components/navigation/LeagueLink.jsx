import React from 'react'

const LeagueLink = ({leagueId, leagueName, className}) => {
    return (
        <div className={`flex text-sm gap-2 ${className}`}>
            <div className='flex items-center font-semibold gap-1 hover:underline'>
                <img className='h-4' src={`../../src/assets/leagues/${leagueId}.png`} alt={`${leagueName} image`} />
                <a href={`/league/${leagueId}`}>
                    {leagueName}
                </a>
            </div>
        </div>
    )
}

export default LeagueLink