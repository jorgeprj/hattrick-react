import React from 'react'
import './ManagerSection.css'
import { Link } from 'react-router-dom'

const ManagerSection = ({article}) => {

    return (
        <div className='manager-section'>
            <Link to={`/article/2`}>
                <img className='manager-image' src="../src/assets/articles/2.png" alt="Manager Image" />

            </Link>
            <div className='section-content'>
                <Link to={`/article/2`}>
                    <h2>
                        {article.title}
                    </h2>
                </Link>
                <p className='description'>{article.description}</p>
                <p className='source'>via {article.source}</p>
            </div>
        </div>
    )
}

export default ManagerSection