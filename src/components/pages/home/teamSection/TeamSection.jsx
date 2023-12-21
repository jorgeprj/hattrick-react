import React from 'react'
import './TeamSection.css'


const TeamSection = ({team}) => {
    return (
        <div className='team-section'>
            <div className='header'>
                <h2>{team.name}</h2>
                <p>{team.summary}</p>
            </div>
            <div className='sections'>
                <div>
                    <button>
                        Wiki
                    </button>
                </div>
                <div>
                    <button>
                        Dashboard
                    </button>
                </div>
                <div>
                    <button>
                        Scouts
                    </button>
                </div>
                <div>
                    <button>
                        Timeline
                    </button>
                </div>
                <div>
                    <button>
                        Players
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TeamSection