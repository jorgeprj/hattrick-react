import React from 'react'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Stats from './sections/Stats'
import Pricing from './sections/Pricing'

import usePlayers from '../../hooks/usePlayers';
import useTeams from '../../hooks/useTeams';
import useManagers from '../../hooks/useManagers';

import Loading from '../../components/feedback/Loading';
import NotFound from '../notFound/NotFound';

const Home = () => {
    const { players, error: playersError, isLoading: playersLoading } = usePlayers();
    const { teams, error: teamsError, isLoading: teamsLoading } = useTeams();
    const { managers, error: managersError, isLoading: managersLoading } = useManagers();

    if (playersLoading || teamsLoading || managersLoading) {
        return <Loading />;
    }

    if (playersError || teamsError || managersError) {
        return <NotFound />;
    }



    return (
        <div className='flex flex-col gap-24'>
            <Hero/>
            <Features/>
            <Stats lenPlayers={players.length} lenTeams={teams.length} lenManagers={managers.length}/>
            <Pricing/>
        </div>
    )
}

export default Home