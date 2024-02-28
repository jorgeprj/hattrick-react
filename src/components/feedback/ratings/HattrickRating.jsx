import React from 'react'
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';

const HattrickRating = ({ hattrick }) => {

    const renderIcon = () => {
        if (hattrick >= 7) {
            return <FaArrowTrendUp />;
        } else {
            return <FaArrowTrendDown />;
        }
    };

    return <div className='text-sm ml-1'>{renderIcon()}</div>;
}

export default HattrickRating