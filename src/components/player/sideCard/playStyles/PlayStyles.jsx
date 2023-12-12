import './PlayStyles.css'

const PlayStyles = ({ player }) => {
    return (
        <div className='player-styles'>
            {player.playStyles.map(style =>
                <div className='play-style'>
                    <div className="icon">
                        <img src={`../../src/assets/playStyles/${style.id}.png`} alt={`${style.id}`} />
                    </div>
                    <div className='play-style-text'>
                        <h4>{style.name}</h4>
                    </div>
                </div>

            )}

        </div>
    )
}

export default PlayStyles