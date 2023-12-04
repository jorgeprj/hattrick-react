import './Overview.css'

import { useEffect, useState } from 'react';
import { getPosts } from '../../../services/posts/postsService';

import Loading from '../../../components/layout/loading/Loading';
import Timeline from '../../../components/dashboard/timeline/Timeline';
import TransferCard from '../../../components/dashboard/transferCard/TransferCard';
import { getTransfers } from '../../../services/transfers/transfersService';


const Overview = ({ year }) => {
	const [isLoading, setIsLoading] = useState(true);

	const [posts, setPosts] = useState(null);
	const [transfers, setTransfers] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			const postsData = await getPosts();
			setPosts(postsData);
		};

		fetchPosts();
	}, []);

	useEffect(() => {
		const fetchTransfers = async () => {
			const transfersData = await getTransfers();
			setTransfers(transfersData.reverse());
		};

		fetchTransfers();
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
			<div className='transfers'>
				<h4>Last Transfers</h4>
				{transfers
					.filter(transfer => transfer.year === year)
					.map(transfer => <TransferCard key={transfer.id} transfer={transfer} />)}
			</div>
			<div className='timeline'>
				<h4>Last News</h4>
				<Timeline posts={posts} />
			</div>
		</div>
	)
}

export default Overview