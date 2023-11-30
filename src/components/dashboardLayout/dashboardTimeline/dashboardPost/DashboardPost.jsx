import './DashboardPost.css'

import { FaXTwitter, FaChartSimple, FaFire } from 'react-icons/fa6'

const DashboardPost = ({ post }) => {

    let iconToRender;

    if (post.category === "Twitter") {
        iconToRender = <FaXTwitter/>;
    } else if (post.category === 'Stats') {
        iconToRender = <FaChartSimple/>;
    } else if (post.category === "News") {
        iconToRender = <FaFire/>;
    }

    return (
        <div className='dashboard-post'>
            <div className={`post-basic-info ${post.category}`}>
                {iconToRender}
                <p>{post.date}</p>
            </div>
            <div className='post-info'>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                {post.image && <img src={`./src/assets/posts/${post.id}.png`} alt={post.id}/>}
            </div>
        </div>
    )
}

export default DashboardPost