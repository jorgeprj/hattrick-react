import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text, link}) => {

    const navigate = useNavigate();
	const redirectToPage = () => navigate(`${link}`);

    return (
        <div className='btn'>
            <button onClick={redirectToPage}>
                {text}
            </button>
        </div>

    )
}

export default Button