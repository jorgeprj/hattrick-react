import './Overview.css'

import { useEffect, useState } from 'react';
import { getPosts } from '../../../services/posts/postsService';

import Loading from '../../../components/layout/loading/Loading';
import Timeline from '../../../components/dashboard/timeline/Timeline';


const Overview = () => {
	const [isLoading, setIsLoading] = useState(true);

	const [posts, setPosts] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			const postsData = await getPosts();
			setPosts(postsData);
		};

		fetchPosts();
	}, []);


	useEffect(() => {
		const delay = 1000;

		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, delay);

		return () => clearTimeout(timeoutId);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className='dashboard-overview'>
			<div className='timeline'>
				<Timeline posts={posts} />
			</div>
		</div>
	)
}

export default Overview