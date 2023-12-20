import React from 'react'
import './Footer.css'

import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa6'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='pages'>
                <div className='column'>
                    <h4>Tools</h4>
                    <a href="#">What links here</a>
                    <a href="#">Related changes</a>
                    <a href="#">Special pages</a>
                    <a href="#">Permanent link</a>
                    <a href="#">Page information</a>
                    <a href="#">Hattrickdata item</a>
                </div>
                <div className='column'>
                    <h4>Contribute</h4>
                    <a href="#">Help</a>
                    <a href="#">Learn to edit</a>
                    <a href="#">Community portal</a>
                    <a href="#">Recent changes</a>
                    <a href="#">Upload file</a>
                </div>
                <div className='column'>
                    <h4>Hattrick</h4>
                    <a href="#">Contents</a>
                    <a href="#">Currents events</a>
                    <a href="#">About hattrick</a>
                    <a href="#">Contact us</a>
                </div>

            </div>
            <div className='foot'>
                <div className='logo'>
                    hattrick
                </div>
                <div className='links'>
                    <a href="#">Terms & Condition</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies</a>
                </div>
                <div className='icons'>
                    <FaInstagram />
                    <FaFacebookF />
                    <FaTwitter />
                </div>
            </div>
        </footer>
    )
}

export default Footer