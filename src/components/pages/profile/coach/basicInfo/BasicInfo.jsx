import React from 'react'
import './BasicInfo.css'
import { Link } from 'react-router-dom'

const BasicInfo = ({coach, year}) => {
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
                        <img className='team-image' src={`../../src/assets/teams/${coach.careerHistory[0].team.id}.png`} alt={`Team ${coach.careerHistory[0].team.id} image`} />
                        <Link to={`/team/${coach.careerHistory[0].team.id}`}>
                            {coach.careerHistory[0].team.name}
                        </Link>
                    </p>
                    <p>{year - Number(coach.age)} years</p>
                </div>
            </div>
        </section>
    )
}

export default BasicInfo