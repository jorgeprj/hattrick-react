import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Logo from '../../../components/shared/Logo'
import useTeams from '../../../hooks/useTeams';
import Loading from '../../../components/feedback/Loading';
import NotFound from '../../notFound/NotFound';
import ShareIcons from '../../../components/shared/ShareIcons';
import Avatar from '../../../components/dataDisplay/Avatar';
import LeagueLink from '../../../components/navigation/LeagueLink';
import BasicInfo from './BasicInfo';
import Kits from './Kits';
import usePlayers from '../../../hooks/usePlayers';
import useManagers from '../../../hooks/useManagers';

const TeamHeader = ({ team }) => {
    return (
        <div>
            <div className='relative'>
                <img className='absolute w-14 bottom-[5px] right-0' src={`../../src/assets/leagues/${team.league.id}.png`} alt="Team Flag" />
                <Avatar className='h-48 w-48' src={`../../src/assets/teams/${team.id}.png`} />
            </div>
        </div>
    )
}

const TeamName = ({ team }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
                <img className='h-3.5 sm:h-5' src={`../../src/assets/flags/${team.country}.png`} alt="Team Nationality" />
                <h1 className='text-xl font-bold sm:text-3xl'>
                    {team.name}
                </h1>
            </div>
            <div className='flex text-sm gap-2 mt-2'>
                <div className='flex items-center font-semibold gap-1 hover:underline'>
                    <LeagueLink leagueName={team.league.name} leagueId={team.league.id} />
                </div>
            </div>
        </div>
    )
}

const Managers = ({ teamManager }) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-sm'>
                <Avatar src={`../../src/assets/managers/${teamManager.id}.png`} className='transform hover:scale-110 transition-transform duration-150 ease-in-out h-9 w-9' />
                <div>
                    <a href={`/manager/${teamManager.id}`} className='flex gap-1.5 items-center hover:underline'>
                        <img className='h-2.5' src={`../../src/assets/flags/${teamManager.nationality}.png`} alt="Manager Country" />
                        <h5 className='text-neutral-700 font-medium text-nowrap'>{teamManager.name}</h5>
                    </a>
                    <h6 className='text-neutral-400'>{teamManager.careerHistory[0].position}</h6>
                </div>
            </div>
            {teamManager.assistantManager && (
                <div className='flex items-center gap-2 text-sm'>
                    <Avatar src={`../../src/assets/managers/${teamManager.assistantManager.id}.png`} className='transform hover:scale-110 transition-transform duration-150 ease-in-out h-9 w-9' />
                    <div>
                        <div className='flex gap-1.5 items-center'>
                            <img className='h-2.5' src={`../../src/assets/flags/${teamManager.assistantManager.nationality}.png`} alt="Manager Country" />
                            <h5 className='text-neutral-700 font-medium text-nowrap'>{teamManager.assistantManager.name}</h5>
                        </div>
                        <h6 className='text-neutral-400'>Assistant Manager</h6>
                    </div>
                </div>
            )}
        </div>
    )
}

const Team = ({ year }) => {
    const { id } = useParams();
    const { teams, isLoading: teamsLoading } = useTeams();
    const [team, setTeam] = useState(null);
    const { players, isLoading: playersLoading } = usePlayers();
    const [teamPlayers, setTeamPlayers] = useState(null);
    const { managers, isLoading: managersLoading } = useManagers();
    const [teamManager, setTeamManager] = useState(null);

    useEffect(() => {
        if (teams && teams.length > 0) {
            const foundTeam = teams.find((p) => p.id == id);
            if (foundTeam) {
                setTeam(foundTeam);
            } else {
                console.error(`No team found with ID ${id}`);
            }
        }
    }, [id, teams]);

    useEffect(() => {
        if (players && players.length > 0) {
            const teamPlayers = players.filter(player =>
                player.teamHistory[0].team.id == id
            );
            if (teamPlayers) {
                setTeamPlayers(teamPlayers);
            } else {
                console.error(`No players found for team with ID ${id}`);
            }
        }
    }, [id, players]);

    useEffect(() => {
        if (managers && managers.length > 0) {
            const teamManager = managers.filter(manager =>
                manager.careerHistory[0].team.id == id
            );
            if (teamManager) {
                setTeamManager(teamManager);
            } else {
                console.error(`No manager found for team with ID ${id}`);
            }
        }
    }, [id, managers]);

    if (teamsLoading || playersLoading) {
        return <Loading />;
    }

    if (!team) {
        return <NotFound />;
    }

    console.log(teamManager)

    return (
        <div className='py-4 px-16 min-h-[80vh]'>
            <main className='flex flex-col w-full py-4 gap-16 lg:items-start lg:flex-row lg:gap-16'>
                <section className='flex flex-col lg:w-1/5 lg:min-w-48 items-center'>
                    <span className='mb-4 lg:hidden'>
                        <TeamName team={team} teamPlayers={teamPlayers} />
                    </span>
                    <TeamHeader team={team} year={year} />
                    <section className='flex flex-col mt-8 gap-8 items-start w-full'>
                        <BasicInfo team={team} />
                        <Kits team={team} />
                    </section>
                </section>



                <section className='flex flex-col lg:w-3/5'>
                    <div className='flex-col sm:flex-row gap-2 justify-between mb-4 hidden lg:flex'>
                        <TeamName team={team} />
                        <ShareIcons />
                    </div>
                    <section className='flex flex-col gap-8 mt-4'>
                        <section>
                            <h3 className='font-semibold text-lg mb-2'>Wiki</h3>
                            <div className='flex flex-col gap-3'>
                                {team.clubInfo.wiki.map((wiki, index) => (
                                    <p className='text-sm' key={index}>{wiki}</p>
                                ))}
                            </div>
                        </section>
                    </section>
                </section>



                <section className='flex flex-col gap-10 lg:w-1/5'>
                    {teamManager.length > 0 && (
                        <section>
                            <h4 className='font-semibold text-lg mb-2'>Staff</h4>
                            <Managers teamManager={teamManager[0]} />
                        </section>
                    )}


                    {teamPlayers.length > 0 && (
                        <section>
                            <div className='flex items-center gap-2 mb-2'>
                                <h4 className='font-semibold text-lg'>Team Players</h4>
                                <p className='bg-black text-white font-bold px-2 rounded text-xs'>{teamPlayers.length}</p>
                            </div>

                            <div className='flex flex-wrap gap-3'>
                                {teamPlayers
                                    .sort((a, b) => b.overall - a.overall)
                                    .slice(0, 8)
                                    .map(player => (
                                        <a href={`/player/${player.id}`}>
                                            <Avatar className='transform hover:scale-110 transition-transform duration-150 ease-in-out h-9' src={`../../src/assets/players/${player.id}.png`} />
                                        </a>
                                    ))}
                            </div>
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

export default Team