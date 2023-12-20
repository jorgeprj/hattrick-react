import React from 'react'
import './TransferInfo.css'
import { formatCurrency } from '../../../utils/formatCurrency'

const TransferInfo = ({ player, year }) => {
    return (
        <section className='transfer-info'>
            <h4>Transfer Info</h4>
            <div className='infos'>
                <div className='column-1'>
                    <p>Value</p>
                    <p>Wage</p>
                    {player.buyClause ? (<p>Buy clause</p>) : (<p>Release clause</p>)}
                    <p>Contract until</p>
                </div>
                <div className='column-2'>
                    <p>{formatCurrency(player.value)}</p>
                    <p>{formatCurrency(player.wage)}</p>
                    {player.buyClause ? (<p>{formatCurrency(player.buyClause)}</p>) : (<p>{formatCurrency(player.releaseClause)}</p>)}
                    {player.contract === (year + 1) ? (
                        <p className='available'>{player.contract}</p>
                    ) : (
                        <p>{player.contract}</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default TransferInfo