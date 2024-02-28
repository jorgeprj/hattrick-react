import React from 'react'
import { FaFacebookF, FaLink, FaXTwitter } from 'react-icons/fa6'

const ShareIcons = ({className}) => {
    return (
        <div className={`flex gap-2 ${className}`}>
            <a href="#" className='text-neutral-400 hover:text-black'>
                <FaXTwitter />
            </a>
            <a href="#" className='text-neutral-400 hover:text-black'>
                <FaFacebookF />
            </a>
            <a href="#" className='text-neutral-400 hover:text-black'>
                <FaLink />
            </a>
        </div>

    )
}

export default ShareIcons