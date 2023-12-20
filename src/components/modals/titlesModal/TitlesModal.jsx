import React, { useEffect, useState } from 'react'
import './TitlesModal.css'
import '../Modal.css'

import { FaXmark } from 'react-icons/fa6';


const TitlesModal = ({ titles, onClose }) => {
    const [modalOpen, setModalOpen] = useState(true);

    const handleClose = () => {
        setModalOpen(false);
        onClose();
        document.body.classList.remove('modal-open');
    };

    useEffect(() => {
        document.body.classList.add('modal-open');

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className='header'>
                    <h2>Titles</h2>
                    <FaXmark onClick={handleClose} />
                </div>
                <div className="titles-list">
                    {titles.map((title) => (
                        <div key={title.id} className="title-item">
                            <img
                                src={`../src/assets/trophies/${title.id}.png`}
                                alt={`Trophy ${title.name}`}
                                className="trophy-image"
                            />
                            <div className="title-details">
                                <div className='team-logo'>
                                    <img
                                        src={`../src/assets/teams/${title.team}.png`}
                                        alt={`Team ${title.team}`}
                                        className="trophy-image"
                                    />
                                    <div className='text'>
                                        <h4>{title.name}</h4>
                                        <p>{title.season}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TitlesModal