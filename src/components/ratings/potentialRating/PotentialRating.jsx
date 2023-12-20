import React from 'react'
import './PotentialRating.css'
import { FaAngleUp, FaAnglesUp, } from 'react-icons/fa6'

const PotentialRating = ({ overall, potential }) => {

    const difference = potential - overall;

    const renderIcon = () => {
        if (difference >= 5) {
            return <FaAnglesUp />;
        } else if (difference >= 2) {
            return <FaAngleUp />;
        } else {
            return null;
        }
    };
    return <div className='potential-rating'>{renderIcon()}</div>;
}

export default PotentialRating