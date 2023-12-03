import './Header.css';

import { formatCurrency } from '../../../utils/formatCurrency';
import { getOverallColor } from '../../../utils/overallColor';


const Header = ({ player, year }) => {

    return (
        <div className='player-header'>
            <div className='header-info'>
                <div className={`player-overall ${getOverallColor(player.overall)}`}>
                    <h4>Overall</h4>
                    <p>
                        {player.overall}
                        <span className={player.modifier > 0 ? 'green' : 'red'}>
                            {player.modifier > 0 ? `+${player.modifier}` : player.modifier}
                        </span>
                    </p>
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
                    {player.buyClause ?
                        (<div>
                            <h4>Buy clause</h4>
                            <p>{formatCurrency(player.buyClause)}</p>
                        </div>) : (
                            <div>
                                <h4>Release clause</h4>
                                <p>{formatCurrency(player.releaseClause)}</p>
                            </div>
                        )}

                </div>
                <div className='player-contract'>
                    <h4>Contract until</h4>
                    {player.contract === (year + 1) ? (
                        <p className='available'>{player.contract}</p>
                    ) : (
                        <p>{player.contract}</p>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Header