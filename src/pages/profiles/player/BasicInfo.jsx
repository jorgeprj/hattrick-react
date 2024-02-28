import React from 'react'
import StarRating from '../../../components/feedback/ratings/StarRating'
import { formatCurrency } from '../../../utils/formatCurrency'
import { FaRegPenToSquare } from 'react-icons/fa6'

const BasicInfo = ({ player, year }) => {
    return (
        <section>
            <h4 className='flex items-center font-semibold text-lg mb-4'>
                Basic Info 
                <a href={`/hattrickdata/editplayer/${player.id}`} className='ml-2 text-xs text-gray-400 hover:text-black'>
                    <FaRegPenToSquare/> 
                </a>
            </h4>
            <div className='flex justify-between gap-8'>
                <div className='flex flex-col gap-4 text-sm items-start text-neutral-500 whitespace-nowrap'>
                    <p>Contract until</p>
                    <p>Age</p>
                    <p>Value</p>
                    <p>Wage</p>
                    {player.buyClause ? (<p>Buy clause</p>) : (<p>Release clause</p>)}
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Foot</p>
                    <p>Skill moves</p>
                    <p>Weak foot</p>
                    <p>Work rate</p>
                    <p>Real Face</p>
                </div>

                <div className='flex flex-col gap-4 text-sm items-start font-semibold whitespace-nowrap'>
                    {player.contract <= (year + 1) ? (
                        <p className='cursor-pointer hover:after:content-["Avaliable"] hover:after:ml-2 hover:after:bg-black hover:after:text-white hover:after:px-2 hover:after:py-1 hover:after:rounded hover:after:text-xs '>
                            {player.contract}
                            
                        </p>
                    ) : (
                        <p>{player.contract}</p>
                    )}
                    <p>{year - Number(player.age)} years</p>
                    <p>{formatCurrency(player.value)}</p>
                    <p>{formatCurrency(player.wage)}</p>
                    {player.buyClause ? (<p>{formatCurrency(player.buyClause)}</p>) : (<p>{formatCurrency(player.releaseClause)}</p>)}
                    <p>{player.height / 100} m</p>
                    <p>{player.weight} kg</p>
                    <p>{player.foot}</p>
                    <p><StarRating stars={player.skills} /></p>
                    <p><StarRating stars={player.weakFoot} /></p>
                    <p>{player.workRate}</p>
                    <p className="no-margin-bottom">{player.realFace ? "Yes" : "No"}</p>
                </div>
            </div>
        </section>
    )
}

export default BasicInfo