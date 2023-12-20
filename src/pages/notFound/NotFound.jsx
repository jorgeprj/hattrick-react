import React from 'react'
import './NotFound.css'
import { FaArrowRight } from 'react-icons/fa6'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='background-image'></div>
            <div className='content'>
                <div className='text'>
                    <h2>Page not found.</h2>
                    <p>
                        The page you were looking for doesn't exist.
                        You May have misstyped the adress or the page may have moved.
                    </p>
                    <a href="/home">
                        <FaArrowRight />
                        Go to Home page
                    </a>
                </div>
                <div className='error'>
                    <h1>404</h1>
                </div>
            </div>
        </div>
    )
}

export default NotFound