import './StatCard.css';

const StatCard = ({name, value}) => {
  return (
    <div className='stat-card'>
        <h4>{name}</h4>
        <h3>{value}</h3>
    </div>
  )
}

export default StatCard