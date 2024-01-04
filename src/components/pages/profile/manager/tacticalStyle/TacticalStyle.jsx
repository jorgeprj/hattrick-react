import React from 'react'
import './TacticalStyle.css'
import HeadImage from '../../../../shared/headImage/HeadImage'
import { Link } from 'react-router-dom'

const TacticalStyle = ({ manager }) => {
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
                        <p>{manager.tactical.vision}</p>
                        <p>{manager.tactical.preferredFormation}</p>
                        <p>{manager.tactical.defensiveStyle}</p>
                        <p>{manager.tactical.offensiveStyle}</p>
                        <p>{manager.tactical.chanceCreation}</p>
                    </div>
                </div>
                <div className='manager-comparison'>
                    <HeadImage path={`../../src/assets/managers/heads/${manager.comparisonManager.id}.png`} />
                    <div className='manager-text'>
                        <Link to={`/manager/${manager.comparisonManager.id}`}>
                            <h5 className='link'>
                                {manager.comparisonManager.name}
                                <img className='flag' src={`../../src/assets/flags/${manager.comparisonManager.nationality}.png`} alt={`Flag of ${manager.comparisonManager.nationality}`} />
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