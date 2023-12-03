import './TextCard.css'

const TextCard = ( {title, text} ) => {
    return (
        <div className='player-text-card'>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default TextCard