import React from 'react'
import './BasicInfo.css'
import { Link } from 'react-router-dom'

const BasicInfo = ({manager, year}) => {
    return (
        <section className='basic-info'>
            <h4>Basic Info</h4>
            <div className='infos'>
                <div className='column-1'>
                    <p>Team</p>
                    <p>Age</p>
                </div>
                <div className='column-2'>
                    <p className='team'>
                        <img className='team-image' src={`../../src/assets/teams/${manager.careerHistory[0].team.id}.png`} alt={`Team ${manager.careerHistory[0].team.id} image`} />
                        <Link to={`/team/${manager.careerHistory[0].team.id}`}>
                            {manager.careerHistory[0].team.name}
                        </Link>
                    </p>
                    <p>{year - Number(manager.age)} years</p>
                </div>
            </div>
        </section>
    )
}

export default BasicInfo