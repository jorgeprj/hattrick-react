import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Logo from '../../../components/shared/Logo'
import Loading from '../../../components/feedback/Loading';
import NotFound from '../../notFound/NotFound';
import ShareIcons from '../../../components/shared/ShareIcons';
import Avatar from '../../../components/dataDisplay/Avatar';
import useLeagues from '../../../hooks/useLeagues';
import TeamLink from '../../../components/navigation/TeamLink';

const LeagueHeader = ({ league }) => {
    return (
        <div>
            <div className='relative'>
                <Avatar className='h-48 w-48 p-2' src={`../../src/assets/leagues/${league.id}.png`} />
            </div>
        </div>
    )
}

const LeagueName = ({ league }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
                <img className='h-3.5 sm:h-5' src={`../../src/assets/flags/${league.country}.png`} alt="League Country" />
                <h1 className='text-xl font-bold sm:text-3xl'>
                    {league.name}
                </h1>
            </div>
            <div className='flex text-sm gap-2 mt-2'>
                <div className='flex items-center font-semibold gap-1 hover:underline'>
                    <p className='text-neutral-500 whitespace-nowrap'>Last Champion:</p>
                    <TeamLink teamName={league.champions[league.champions.length - 1].team.name} teamId={league.champions[league.champions.length - 1].team.id} />
                </div>
            </div>
        </div>
    )
}

const League = () => {
    const { id } = useParams();
    const { leagues, isLoading: leaguesLoading } = useLeagues();
    const [league, setLeague] = useState(null);

    useEffect(() => {
        if (leagues && leagues.length > 0) {
            const foundLeague = leagues.find((p) => p.id == id);
            if (foundLeague) {
                setLeague(foundLeague);
            } else {
                console.error(`No League found with ID ${id}`);
            }
        }
    }, [id, leagues]);

    if (leaguesLoading) {
        return <Loading />;
    }

    if (!league) {
        return <NotFound />;
    }

    return (
        <div className='py-4 px-16 min-h-[80vh]'>
            <main className='flex flex-col w-full py-4 gap-16 lg:items-start lg:flex-row lg:gap-16'>
                <section className='flex flex-col lg:w-1/5 lg:min-w-48 items-center'>
                    <span className='mb-4 lg:hidden'>
                        <LeagueName league={league}/>
                    </span>
                    <LeagueHeader league={league}/>
                    <section className='flex flex-col mt-8 gap-8 items-start w-full'>

                    </section>
                </section>



                <section className='flex flex-col lg:w-3/5'>
                    <div className='flex-col sm:flex-row gap-2 justify-between mb-4 hidden lg:flex'>
                        <LeagueName league={league} />
                        <ShareIcons />
                    </div>
                    <section className='flex flex-col gap-8 mt-4'>
                        <section>
                            <h3 className='font-semibold text-lg mb-2'>Wiki</h3>
                            <div className='flex flex-col gap-3'>
                                {league.wiki.map((wiki, index) => (
                                    <p className='text-sm' key={index}>{wiki}</p>
                                ))}
                            </div>
                        </section>
                    </section>
                </section>



                <section className='flex flex-col gap-10 lg:w-1/5'>
                    <section>
                        <h3 className='font-semibold text-lg mb-2'>Author</h3>
                        <Logo className="text-xl" />
                    </section>
                </section>

            </main>
        </div>
    )
}

export default League