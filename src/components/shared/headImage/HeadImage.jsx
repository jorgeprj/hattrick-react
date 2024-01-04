import React from 'react'
import './HeadImage.css'


const HeadImage = ({path}) => {
    return (<img src={`${path}`} alt="Head Image" className='head-image'/>)
}

export default HeadImage