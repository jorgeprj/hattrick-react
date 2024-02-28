import React from 'react'
import { FaAngleUp, FaAnglesUp, } from 'react-icons/fa6'

const PotentialRating = ({ overall, potential, className }) => {

    const difference = potential - overall;

    const renderIcon = () => {
        if (difference >= 10) {
            return <FaAnglesUp />;
        } else if (difference >= 5) {
            return <FaAngleUp />;
        } else {
            return null;
        }
    };
    return <div className={`text-sm text-green-400 ml-1 ${className}`}>{renderIcon()}</div>;
}

export default PotentialRating