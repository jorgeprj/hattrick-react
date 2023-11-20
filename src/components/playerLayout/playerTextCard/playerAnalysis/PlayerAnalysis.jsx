import { calculateFutzScore } from '../../../../utils/calculateFutzScoreUtils'
import './PlayerAnalysis.css'

const PlayerAnalysis = ( {player, year} ) => {
    return (
        <div className='player-analysis'>
            <div>
                <h4>Player analysis</h4>
                <p>{player.analysis}</p>
            </div>
            <div className='player-futz'>
                <p>{calculateFutzScore(player, year)}</p>
                <h5>futz <span>score</span></h5>
            </div>
        </div>
    )
}

export default PlayerAnalysis