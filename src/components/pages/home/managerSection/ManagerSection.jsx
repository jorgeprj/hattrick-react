import React, { useState } from 'react'
import './managerSection.css'

import { FaRegClipboard, FaTrophy, FaChartSimple } from 'react-icons/fa6'
import ManagerStatsModal from '../../../modals/managerStatsModal/ManagerStatsModal';
import TitlesModal from '../../../modals/titlesModal/TitlesModal';
import Button from '../../../shared/button/Button';
import { Link } from 'react-router-dom';

const ManagerSection = ({ manager }) => {

    const [titlesModal, setTitlesModal] = useState(false);
    const [statsModal, setStatsModal] = useState(false);

    const toggleTitles = () => {
        setTitlesModal(!titlesModal);
    }

    const toggleStats = () => {
        setStatsModal(!statsModal);
    }

    return (
        <div className='manager-section'>
            <div className='manager-content'>
                <Link to={`/manager/${manager.id}`}>
                    <img src={`./src/assets/managers/${manager.name.toLowerCase().replace(/ /g, "")}.jpg`} alt="Ole Gunnar Solskjaer" />
                </Link>
                <div className='text'>
                    <section className='manager-header'>
                        <h4>{manager.name}</h4>
                        <div className='subtitle'>
                            <FaRegClipboard />
                            <p>Manager</p>
                        </div>
                    </section>
                    <p><strong>{manager.bio.split(' ').slice(0, 3).join(' ')} </strong>{manager.bio.split(' ').slice(3).join(' ')}</p>
                    <div className='icons'>
                        {manager.titles.length > 0 && 
                            <FaTrophy onClick={toggleTitles} />
                        }
                        {manager.stats.length > 0 &&
                            <FaChartSimple onClick={toggleStats} />
                        }
                        <Button text={"Read more"} link={`/manager/${manager.id}`} />
                    </div>
                </div>
            </div>
            {titlesModal && (
                <TitlesModal titles={manager.titles} onClose={toggleTitles} />
            )}
            {statsModal && (
                <ManagerStatsModal stats={manager.stats} onClose={toggleStats} />
            )}
        </div>
    )
}

export default ManagerSection