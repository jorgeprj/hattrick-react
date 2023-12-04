import './TransferCard.css';

import { abbreviateName } from '../../../utils/abbreviateName';
import { formatCurrency } from '../../../utils/formatCurrency';
import { FaAnglesRight } from 'react-icons/fa6'

const TransferCard = ( {transfer} ) => {
    return (
        <div className='transfer-card'>
            <div className='transfer-player'>
                <div className='player-data'>
                    <img className='team-image' src={`./src/assets/teams/${transfer.player.team.id}.png`} alt={`Team ${transfer.player.team.id} Image`} />
                    <img className='player-photo' src={`./src/assets/players/${transfer.player.id}.png`} alt={`Player ${transfer.player.id} Image`} />
                </div>
                <h4>{abbreviateName(transfer.player.name)}</h4>
            </div>
            <div className='value'>
                <h2>{formatCurrency(transfer.value)}</h2>
                <div className='arrows'>
                    <FaAnglesRight/>
                    <FaAnglesRight/>
                </div>
            </div>
            <div className='transfer-team'>
                <div className='team-data'>
                    <img className='team-logo' src={`./src/assets/teams/${transfer.team.id}.png`} alt={`Team ${transfer.team.id} Image`} />
                </div>
                <h4>{transfer.team.name}</h4>
            </div>
        </div>
    )
}

export default TransferCard