import React from 'react'

import { FaRegStar, FaStar } from 'react-icons/fa6'

const StarRating = ({ stars }) => {
    const filledStars = stars > 0 ? stars : 0;
    const emptyStars = Math.max(0, 5 - filledStars);

    return (
        <div>
            {[...Array(filledStars)].map((_, index) => (
                <FaStar key={index} />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={index + filledStars} />
            ))}
        </div>
    )
}

export default StarRating