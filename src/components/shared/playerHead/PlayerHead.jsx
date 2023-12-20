import React from 'react'
import './PlayerHead.css'


const PlayerHead = ({playerId}) => {
    return (<img src={`../../src/assets/players/heads/${playerId}.png`} alt="Player" className='player-image'/>)
}

export default PlayerHead