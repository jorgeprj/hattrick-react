import './Post.css'

import { FaXTwitter, FaChartSimple, FaFire, FaNewspaper } from 'react-icons/fa6'

const Post = ({ post }) => {

    let iconToRender;

    if (post.category === "Twitter") {
        iconToRender = <FaXTwitter/>;
    } else if (post.category === 'Stats') {
        iconToRender = <FaChartSimple/>;
    } else if (post.category === "News") {
        iconToRender = <FaNewspaper/>;
    } else if (post.category === "Match") {
        iconToRender = <FaFire/>;
    }

    return (
        <div className='dashboard-post'>
            <div className={`post-basic-info ${post.category}`}>
                <span>{iconToRender}</span>
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

export default Post