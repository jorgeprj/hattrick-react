import { useEffect, useState } from 'react';
import DashboardTimeline from '../../../components/dashboardLayout/dashboardTimeline/DashboardTimeline'
import './DashboardOverview.css'
import Loading from '../../../components/layout/loading/Loading';

const DashboardOverview = ( {posts} ) => {

    const [isLoading, setIsLoading] = useState(true);

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
            <DashboardTimeline posts={posts}/>
        </div>
    )
}

export default DashboardOverview