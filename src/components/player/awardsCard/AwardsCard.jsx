import './AwardsCard.css';

import { FaAward } from 'react-icons/fa6'

const AwardsCard = ( {player} ) => {
  return (
    <div className='awards-card'>
        <h4>Player Awards</h4>
        {player.awards.map((award) => (
            <div className='player-awards'>
                <FaAward/>
                <p>{award.season} {award.name}</p>
            </div>
        ))}
    </div>
  )
}

export default AwardsCard