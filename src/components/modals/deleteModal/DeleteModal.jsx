import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import './DeleteModal.css'
import '../Modal.css'

const DeleteModal = ({handleClose, handleDelete}) => {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <div className='header'>
                    <h2>Confirm deletion</h2>
                    <FaXmark onClick={handleClose} />
                </div>
                <p className='delete-text'>Are you sure wold like to delete this player from the database? This action cannot be undone.</p>
                <div className='buttons'>
                    <button className='cancel-btn' onClick={handleClose}>Cancel</button>
                    <button className='delete-btn' onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal