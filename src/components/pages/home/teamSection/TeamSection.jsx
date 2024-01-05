import React from 'react'
import './TeamSection.css'
import { Link } from 'react-router-dom'


const TeamSection = ({ team }) => {
    return (
        <div className='team-section'>
            <div className='header'>
                <h2>{team.name}</h2>
                <p>{team.summary}</p>
            </div>
            <div className='sections'>
                <div>
                    <Link to={`/team/${team.id}`}>
                        <button>
                            Profile
                        </button>
                    </Link>
                </div>
                <div>
                    <button>
                        Rules
                    </button>
                </div>
                <div>
                    <button>
                        Squad
                    </button>
                </div>
                <div>
                    <button>
                        Goals
                    </button>
                </div>
                <div>
                    <button>
                        Transfers
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TeamSection