import React from 'react'
import { FaFacebookF, FaLink, FaXTwitter } from 'react-icons/fa6'
import './ShareIcons.css'

const ShareIcons = () => {
    return (
        <div className='share-icons'>
            <FaXTwitter />
            <FaFacebookF />
            <FaLink />
        </div>

    )
}

export default ShareIcons