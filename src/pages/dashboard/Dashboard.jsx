import { useState } from 'react';
import DashboardHeader from '../../components/dashboardLayout/dashboardHeader/DashboardHeader';
import './Dashboard.css';
import DashboardOverview from './overview/DashboardOverview';

const Dashboard = ( {posts} ) => {
    const [section, setSection] = useState('overview')

    let componentToRender;

    if (section === 'overview') {
        componentToRender = <DashboardOverview posts={posts}/>;
    }

    return (
        <div className='dashboard'>
            <header>
                <DashboardHeader section={section} setSection={setSection} />
            </header>
            <section>
                {componentToRender}
            </section>
        </div>
    )
}

export default Dashboard