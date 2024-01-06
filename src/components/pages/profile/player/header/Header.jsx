import React from 'react'
import './Header.css'
import PotentialRating from '../../../../ratings/potentialRating/PotentialRating'
import HattrickRating from '../../../../ratings/hattrickRating/HattrickRating'
import { calculateHatScore } from '../../../../../utils/hatScore'
import HeadImage from '../../../../shared/headImage/HeadImage'
import { FaCircleInfo } from 'react-icons/fa6'


const Header = ({ player, year }) => {
    return (
        <section className='player-header'>
            <div className='player-head'>
                <img className='head-flag' src={`../../src/assets/flags/${player.nationality}.png`} alt={`Flag of ${player.nationality}`} />
                <HeadImage path={`../../src/assets/players/heads/${player.id}.png`}/>
            </div>
            <section className='player-stats'>
                <div>
                    <h4>
                        {player.overall}
                        <div className='rating'>
                            <PotentialRating overall={player.overall} potential={player.potential} />
                        </div>
                    </h4>
                    <p>Overall</p>
                </div>
                <div>
                    <h4>
                        {calculateHatScore(player, year)}
                        <div className='rating'>
                            <HattrickRating hattrick={calculateHatScore(player, year)} />
                        </div>
                    </h4>
                    <p className='info'>Hat3Score<FaCircleInfo/></p>
                </div>
            </section>
        </section>
    )
}

export default Header