import React from 'react'

const BasicInfo = ({team}) => {
    return (
        <section className='basic-info'>
            <h4>Basic Info</h4>
            <div className='infos'>
                <div className='column-1'>
                    <p>Name</p>
                    <p>Location</p>
                    <p>Nickname</p>
                    <p>Founded</p>
                    <p>Ground</p>
                    <p>Capacity</p>
                    <p>Owner</p>
                    <p>League</p>
                </div>
                <div className='column-2'>
                    <p>{team.clubInfo.completedName}</p>
                    <p>{team.clubInfo.location}</p>
                    <p>{team.clubInfo.nickname}</p>
                    <p>{team.clubInfo.founded}</p>
                    <p>{team.clubInfo.ground}</p>
                    <p>{team.clubInfo.capacity}</p>
                    <p>{team.clubInfo.owner}</p>
                    <p>{team.league}</p>
                </div>
            </div>
        </section>
    )
}

export default BasicInfo