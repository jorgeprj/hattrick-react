import React from 'react'
import './PlayStyles.css'

const PlayStyles = ({player}) => {
    return (
        <section className='play-styles'>
            <h4>Play Styles</h4>
            <div className='player-styles'>
                {player.playStyles.map(style =>
                    <div className='play-style' key={style.id}>
                        <div className="icon">
                            <img src={`../../src/assets/playStyles/${style.id}.png`} alt={`${style.id}`} />
                        </div>
                        <div className='play-style-text'>
                            <h5>{style.name}</h5>
                        </div>
                    </div>
                )}
            </div>
        </section>

    )
}

export default PlayStyles