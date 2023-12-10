import './Feed.css'

import { useState } from 'react';
import { getPosts } from '../../../services/posts/postsService';
import { useEffect } from 'react';

import Timeline from '../../../components/dashboard/timeline/Timeline';
import Loading from '../../../components/layout/loading/Loading';

const Feed = () => {

    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
		const fetchPosts = async () => {
			const postsData = await getPosts();
			setPosts(postsData);
		};

		fetchPosts();
	}, []);

    useEffect(() => {
        const delay = 500;

        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='feed'>
            <div className='timeline'>
                <h4>Last News</h4>
                <Timeline posts={posts} />
            </div>
        </div>

    )
}

export default Feed