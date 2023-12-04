import './Timeline.css'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useState } from 'react';

import Post from './post/post'

const Timeline = ({ posts }) => {
    const [visiblePosts, setVisiblePosts] = useState(4);

    const handleLoadMore = () => {
        if (visiblePosts + 4 >= posts.length) {
            setVisiblePosts(posts.length);
        } else {
            setVisiblePosts(visiblePosts + 4);
        }
    };

    return (
        <div className='dashboard-timeline'>
            {posts.slice().reverse().slice(0, visiblePosts).map(post => (
                <Post key={post.id} post={post} />
            ))}
            {visiblePosts < posts.length && (
                <div className='buttons'>
                    <button className="show-older-button" onClick={handleLoadMore}>
                        <FaAngleDown />
                        Show Older
                    </button>
                    {visiblePosts > 4 && (
                        <button className="show-less-button" onClick={() => setVisiblePosts(4)}>
                            <FaAngleUp />
                            Show Less
                        </button>
                    )}
                </div>

            )}

            {visiblePosts === posts.length && (
                <button className="show-less-button" onClick={() => setVisiblePosts(4)}>
                    <FaAngleUp />
                    Show Less
                </button>
            )}
        </div>
    );
};

export default Timeline;