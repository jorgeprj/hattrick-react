import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import usePlayers from '../../../hooks/usePlayers';
import Loading from '../../../components/feedback/Loading';
import NotFound from '../../notFound/NotFound';
import ShareIcons from '../../../components/shared/ShareIcons';
import Avatar from '../../../components/dataDisplay/Avatar';
import PotentialRating from '../../../components/feedback/ratings/PotentialRating';
import Logo from '../../../components/shared/Logo';
import Chart from '../../../components/dataDisplay/Chart';
import PlayStyles from './PlayStyles';
import BasicInfo from './BasicInfo';
import TeamLink from '../../../components/navigation/TeamLink';
import ClubHistory from './ClubHistory';
import NationalHistory from './NationalHistory';
import ScoutReport from './ScoutReport';

const PlayerHeader = ({ player }) => {
    return (
        <div>
            <div className='relative'>
                <img className='absolute h-14 bottom-0 right-0' src={`../../src/assets/teams/${player.teamHistory[0].team.id}.png`} alt="Team Logo" />
                <Avatar className='h-48 w-48' src={`../../src/assets/players/${player.id}.png`} />
            </div>
            <section className='flex justify-center mt-4 gap-8 max-w-48'>
                <div className='flex flex-col items-center'>
                    <h4 className='flex items-center text-3xl font-bold'>
                        {player.position}
                    </h4>
                    <p className='text-neutral-400 text-sm'>Position</p>
                </div>
                <div>
                    <h4 className='flex items-center text-3xl font-bold'>
                        {player.overall}
                        <span>
                            <PotentialRating overall={player.overall} potential={player.potential} />
                        </span>
                    </h4>
                    <p className='text-neutral-400 text-sm'>Overall</p>
                </div>
            </section>
        </div>
    )
}

const Name = ({ player }) => {
    return (
        <div className='flex items-center gap-2'>
            <img className='h-5' src={`../../src/assets/flags/${player.nationality}.png`} alt="Player Nationality" />
            <h1 className='text-3xl'>
                {player.name.split(' ').slice(0, -1)}
                <span className='font-bold ml-2'>{player.name.split(' ').slice(1).join(' ')}</span>
            </h1>
        </div>
    )
}

const Team = ({ player }) => {
    return (
        <div className='flex text-sm gap-2 mt-2'>
            {player.isLoan ? (
                <>
                    <p className='text-neutral-500 whitespace-nowrap'>On Loan from</p>
                    <div className='flex items-center font-semibold gap-1 hover:underline'>
                        <TeamLink teamName={player.teamHistory[1].team.name} teamId={player.teamHistory[1].team.id} />
                    </div>
                </>
            ) : (
                <>
                    <p className='text-neutral-500 whitespace-nowrap'>Contracted to</p>
                    <div className='flex items-center font-semibold gap-1 hover:underline'>
                        <TeamLink teamName={player.teamHistory[0].team.name} teamId={player.teamHistory[0].team.id} />
                    </div>
                </>
            )}
        </div>

    )
}

const PlayerName = ({ player }) => {
    return (
        <div className='flex flex-col'>
            <Name player={player} />
            <Team player={player} />
        </div>

    )
}

const Player = ({ year }) => {
    const { id } = useParams();
    const { players, error: playersError, isLoading: playersLoading } = usePlayers();
    const [player, setPlayer] = useState(null);
    
    useEffect(() => {
        if (players && players.length > 0) {
            const foundPlayer = players.find((p) => p.id == id);
            if (foundPlayer) {
                setPlayer(foundPlayer);
            } else {
                console.error(`No player found with ID ${id}`);
            }
        }
    }, [id, players]);

    if (playersLoading) {
        return <Loading />;
    }

    if (!player) {
        return <NotFound />;
    }

    return (
        <div className='py-4 px-16 min-h-[80vh]'>
            <main className='flex flex-col w-full py-4 gap-16 lg:items-start lg:flex-row lg:gap-16'>
                <section className='flex flex-col lg:w-1/5 lg:min-w-48 items-center'>
                    <span className='mb-4 lg:hidden'><PlayerName player={player} /></span>
                    <PlayerHeader player={player} year={year} />
                    <section className='flex flex-col mt-8 gap-8 items-start w-full'>
                        <BasicInfo player={player} year={year} />
                        {player.nationalTeam.length > 0 && <NationalHistory player={player} />}
                        <ClubHistory player={player} />
                    </section>
                </section>



                <section className='flex flex-col lg:w-3/5'>
                    <div className='flex-col sm:flex-row gap-2 justify-between mb-4 hidden lg:flex'>
                        <PlayerName player={player} />
                        <ShareIcons />
                    </div>
                    <section className='flex flex-col gap-8 mt-4'>
                        <section>
                            <h3 className='font-semibold text-lg mb-2'>Biography</h3>
                            <p className='text-sm'>{player.bio}</p>
                        </section>
                        <ScoutReport player={player} year={year} />
                    </section>
                </section>



                <section className='flex flex-col gap-10 lg:w-1/5'>
                    <section>
                        <h3 className='font-semibold text-lg mb-4'>Attributes Analysis</h3>
                        <Chart player={player} />
                    </section>

                    {player.playStyles.length > 0 && (
                        <section>
                            <PlayStyles player={player} />
                        </section>
                    )}


                    <section>
                        <h3 className='font-semibold text-lg mb-2'>Author</h3>
                        <Logo className="text-xl" />
                    </section>
                </section>

            </main>
        </div>
    )
}

export default Player