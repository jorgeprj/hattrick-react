import './DashboardTimeline.css'
import DashboardPost from './dashboardPost/DashboardPost'

const DashboardTimeline = ( {posts} ) => {
    return (
        <div className='dashboard-timeline'>
            {posts.map(post => (<DashboardPost post={post} />))}
        </div>
    )
}

export default DashboardTimeline