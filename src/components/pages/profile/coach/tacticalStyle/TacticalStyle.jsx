import React from 'react'
import './TacticalStyle.css'
import HeadImage from '../../../../shared/headImage/HeadImage'
import { Link } from 'react-router-dom'

const TacticalStyle = ({ coach }) => {
    return (
        <section className='tactical-style'>
            <h4>Tactical Style</h4>
            <section className='all-infos'>
                <div className='infos'>
                    <div className='column-1'>
                        <p>Tactical vision</p>
                        <p>Preferred formation</p>
                        <p>Defensive style</p>
                        <p>Offensive style</p>
                        <p>Chance creation</p>

                    </div>
                    <div className='column-2'>
                        <p>{coach.tactical.vision}</p>
                        <p>{coach.tactical.preferredFormation}</p>
                        <p>{coach.tactical.defensiveStyle}</p>
                        <p>{coach.tactical.offensiveStyle}</p>
                        <p>{coach.tactical.chanceCreation}</p>
                    </div>
                </div>
                <div className='coach-comparison'>
                    <HeadImage path={`../../src/assets/coaches/heads/${coach.comparisonCoach.id}.png`} />
                    <div className='coach-text'>
                        <Link to={`/coach/${coach.comparisonCoach.id}`}>
                            <h5 className='link'>
                                {coach.comparisonCoach.name}
                                <img className='flag' src={`../../src/assets/flags/${coach.comparisonCoach.nationality}.png`} alt={`Flag of ${coach.comparisonCoach.nationality}`} />
                            </h5>
                        </Link>
                        <h6>Comparison Manager</h6>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default TacticalStyle