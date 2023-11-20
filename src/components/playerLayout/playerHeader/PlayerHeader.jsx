import { calculateFutzScore } from '../../../utils/calculateFutzScoreUtils';
import { formatCurrency } from '../../../utils/formatCurrencyUtils';
import { getOverallColor } from '../../../utils/overallColorUtils';
import './PlayerHeader.css';

const PlayerHeader = ( {player, year} ) => {
  return (
    <div className='player-header'>
        <div className='header-info'>
        <div className={`player-overall ${getOverallColor(player.overall)}`}>
                <h4>Overall</h4>
                <p>{player.overall}</p>
            </div>
            <div className='player-value'>
                <h4>Value</h4>
                <p>{formatCurrency(player.value)}</p>
            </div>
            <div className='player-wage'>
                <h4>Wage</h4>
                <p>{formatCurrency(player.wage)}</p>
            </div>
            <div className='player-release-clause'>
                <h4>Release clause</h4>
                <p>{formatCurrency(player.releaseClause)}</p>
            </div>
            <div className='player-contract'>
                <h4>Contract until</h4>
                <p>{player.contract}</p>
            </div>
        </div>
    </div>
  )
}

export default PlayerHeader