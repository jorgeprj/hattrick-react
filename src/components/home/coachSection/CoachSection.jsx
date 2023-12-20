import React, { useState } from 'react'
import './CoachSection.css'

import { FaRegClipboard, FaTrophy, FaChartSimple } from 'react-icons/fa6'
import CoachStatsModal from '../../modals/coachStatsModal/CoachStatsModal';
import TitlesModal from '../../modals/titlesModal/TitlesModal';
import Button from '../../shared/button/Button';

const CoachSection = ({ coach }) => {

    const [titlesModal, setTitlesModal] = useState(false);
    const [statsModal, setStatsModal] = useState(false);

    const toggleTitles = () => {
        setTitlesModal(!titlesModal);
    }

    const toggleStats = () => {
        setStatsModal(!statsModal);
    }

    return (
        <div className='coach-section'>
            <div className='coach-content'>
                <img src={`./src/assets/${coach.name.toLowerCase().replace(/ /g, "")}.jpg`} alt="Ole Gunnar Solskjaer" />
                <div className='text'>
                    <section className='coach-header'>
                        <h4>{coach.name}</h4>
                        <div className='subtitle'>
                            <FaRegClipboard />
                            <p>Manager</p>
                        </div>
                    </section>
                    <p><strong>{coach.bio.split(' ').slice(0, 3).join(' ')} </strong>{coach.bio.split(' ').slice(3).join(' ')}</p>
                    <div className='icons'>
                        <FaTrophy onClick={toggleTitles}/>
                        <FaChartSimple onClick={toggleStats} />
                        <Button text={"Read more"} link={"/coach"}/>
                    </div>
                </div>
            </div>
            {titlesModal && (
                <TitlesModal titles={coach.titles} onClose={toggleTitles}/>
            )}
            {statsModal && (
                <CoachStatsModal stats={coach.stats} onClose={toggleStats}/>
            )}
        </div>
    )
}

export default CoachSection