import React from 'react'
import Avatar from '../../components/dataDisplay/Avatar'
import { formatCurrency } from '../../utils/formatCurrency'
import { getHatScore } from '../../utils/hatScore'
import TeamLink from '../../components/navigation/TeamLink'
import PotentialRating from '../../components/feedback/ratings/PotentialRating'

const PlayerImage = ({ player }) => {
    return (
        <div className='relative'>
            <img className='absolute h-6 w-auto bottom-0 right-0' src={`../../src/assets/teams/${player.teamHistory[0].team.id}.png`} alt="Team Logo" />
            <Avatar className='h-16 sm:h-20' src={`../../src/assets/players/${player.id}.png`} />
        </div>
    )
}

const Name = ({ player }) => {
    return (
        <div className='flex items-center gap-2'>
            <img className='h-3' src={`../../src/assets/flags/${player.nationality}.png`} alt="Player Nationality" />
            <h2 className='text-sm sm:text-base hover:underline'>
                {player.name.split(' ').slice(0, -1)}
                <span className='font-bold ml-1'>{player.name.split(' ').slice(1).join(' ')}</span>
            </h2>
        </div>
    )
}

const Team = ({ player }) => {
    return (
        <div className='flex text-sm gap-2'>
            {player.isLoan ? (
                <>
                    <p className='text-neutral-500 whitespace-nowrap hidden sm:flex'>On Loan from</p>
                    <div className='flex items-center gap-1 hover:underline'>
                        <TeamLink teamName={player.teamHistory[1].team.name} teamId={player.teamHistory[1].team.id} />
                    </div>
                </>
            ) : (
                <>
                    <p className='text-neutral-500 whitespace-nowrap hidden sm:flex'>Contracted to</p>
                    <div className='flex items-center gap-1 hover:underline'>
                        <TeamLink teamName={player.teamHistory[0].team.name} teamId={player.teamHistory[0].team.id} />
                    </div>
                </>
            )}
        </div>

    )
}

const Position = ({ position }) => {
    return (
        <div className='flex flex-col items-center'>
            <h4 className='flex items-center font-bold'>
                {position}
            </h4>
        </div>
    )
}

const Age = ({ age, year }) => {
    return (
        <div className='flex flex-col items-center'>
            <h4 className='flex items-center'>
                {year - age} years
            </h4>
        </div>
    )
}

const Value = ({ value }) => {
    return (
        <div className='flex flex-col items-center'>
            <h4 className='flex items-center'>
                {formatCurrency(value)}
            </h4>
        </div>
    )
}

const BasicAttrs = ({ player, year }) => {
    return (
        <div className='flex gap-3 mt-1 text-sm sm:text-base'>
            <Position position={player.position} />
            <Age age={player.age} year={year} />
            <Value value={player.value} />
        </div>
    )
}

const PlayerInfo = ({ player, year }) => {
    return (
        <div className='flex flex-col'>
            <Name player={player} />
            <Team player={player} />
            <BasicAttrs player={player} year={year} />
        </div>
    )
}

const PlayerCard = ({ player, year }) => {
    return (
        <a href={`/player/${player.id}`} className='flex justify-between items-center pb-2 border-b-2 border-solid border-gray-300 w-full sm:max-w-screen-sm lg:max-w-screen-lg'>
            <div className='flex gap-4'>
                <PlayerImage player={player} />
                <PlayerInfo player={player} year={year} />
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col items-center'>
                    <div className="flex items-center h-min font-bold p-1.5 rounded ">
                        {player.overall}
                        <span>
                            <PotentialRating overall={player.overall} potential={player.potential} className={"text-xs"} />
                        </span>
                    </div>
                    <p className='text-xs text-neutral-400'>Overall</p>
                </div>
                <div className='items-center hidden sm:flex sm:flex-col'>
                    <div className="flex items-center h-min font-bold p-1.5 rounded">{getHatScore(player, year)}</div>
                    <p className='text-xs text-neutral-400'>HatScore</p>
                </div>
            </div>
        </a>
    )
}

export default PlayerCard