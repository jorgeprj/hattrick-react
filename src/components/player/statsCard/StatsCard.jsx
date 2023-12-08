import './StatsCard.css'

const StatsCard = ({ player, year }) => {

    const stats = player.stats[0];

    return (
        <div className='stats-card'>
            <h4>Last Season Stats</h4>
            <div className="player-stats">
                <div className="column1">
                    <p>Matches</p>
                    <p>Goals</p>
                    <p>Assists</p>
                    <p>Without goals</p>
                    <p>Modifier</p>
                </div>
                <div className="column2">
                    <p>{stats.matches}</p>
                    <p>{stats.goals}</p>
                    <p>{stats.assists}</p>
                    <p>{stats.matchesWithoutGoals}</p>
                    <p>+{stats.modifier}</p>
                </div>
            </div>
        </div>
    )
}

export default StatsCard