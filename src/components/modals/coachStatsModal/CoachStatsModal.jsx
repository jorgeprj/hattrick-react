import React, { useEffect, useState } from 'react'
import './CoachStatsModal.css'
import '../Modal.css'

import { FaXmark } from 'react-icons/fa6';


const CoachStatsModal = ({ stats, onClose }) => {
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
                    <h2>Career Stats</h2>
                    <FaXmark onClick={handleClose} />
                </div>
                <table className="coach-stats-table">
                    <thead>
                        <tr>
                            <th>Season</th>
                            <th>Wins</th>
                            <th>Draws</th>
                            <th>Losses</th>
                            <th>%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.map((stat, index) => (
                            <tr key={index}>
                                <td>{stat.season}</td>
                                <td>{stat.wins}</td>
                                <td>{stat.draws}</td>
                                <td>{stat.losses}</td>
                                <td>{(((stat.wins*3 + stat.draws)/((stat.wins + stat.draws + stat.losses)*3))*100).toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CoachStatsModal