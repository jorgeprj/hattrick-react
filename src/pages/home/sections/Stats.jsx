import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup';

const Title = () => {
    return (
        <div className="flex">
            <div className="max-w-[700px]">
                <p className="font-bold uppercase text-neutral-500">
                    hattrickData
                </p>
                <h2 className="mb-3 text-4xl font-bold">Banco de Dados</h2>
                <p className="mb-12 text-neutral-500">
                    Como um banco de dados único, o hattrickData engloba dados tanto do jogo quanto
                    do mundo real. Levando em consideração informações dentro e fora do jogo, oferecemos
                    uma perspectiva abrangente para aprimorar sua gestão virtual de futebol.
                </p>
            </div>
        </div>
    )
}

const DataStats = ({ lenPlayers, lenTeams, lenManagers }) => {
    return (
        <section>
            <div className='grid gap-8 text-neutral-950 sm:grid-cols-3 '>
                <CountUp start={0} end={lenPlayers} enableScrollSpy={true} suffix='+'>
                    {({ countUpRef }) => (
                        <div className='flex flex-col'>
                            <h4 className='mb-2 text-3xl md:text-4xl font-extrabold' ref={countUpRef} />
                            <p className='text-neutral-500'>Jogadores</p>
                        </div>
                    )}
                </CountUp>

                <CountUp start={0} end={lenTeams} enableScrollSpy={true} suffix='+'>
                    {({ countUpRef }) => (
                        <div className='flex flex-col'>
                            <h4 className='mb-2 text-3xl md:text-4xl font-extrabold' ref={countUpRef} />
                            <p className='text-neutral-500'>Times</p>
                        </div>
                    )}
                </CountUp>

                <CountUp start={0} end={lenManagers} enableScrollSpy={true} suffix='+'>
                    {({ countUpRef }) => (
                        <div className='flex flex-col'>
                            <h4 className='mb-2 text-3xl md:text-4xl font-extrabold' ref={countUpRef} />
                            <p className='text-neutral-500'>Treinadores</p>
                        </div>
                    )}
                </CountUp>
            </div>
        </section>
    )
}

const Buttons = () => {
    return (
        <div className='mr-auto mt-8 place-self-center lg:col-span-7'>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-sm 
                           font-medium text-center text-white rounded-lg bg-neutral-950
                         hover:bg-black focus:ring-4 focus:ring-neutral-300 "
            >
                Contribua
            </a>
            <a href="#" className="mt-4 md:mt-0 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-neutral-900 border border-neutral-300 rounded-lg hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 ">
                Saiba mais
            </a>
        </div>
    )
}

const Stats = ({ lenPlayers, lenTeams, lenManagers }) => {
    const elementoRef = useRef();

    useEffect(() => {
        const elementoAtual = elementoRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    elementoAtual.classList.add('animate-fade-right');
                } else {
                    elementoAtual.classList.remove('animate-fade-right');
                }
            });
        });

        observer.observe(elementoAtual);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className='flex flex-col-reverse md:flex-row md:justify-between 2xl:justify-center mb-16'>
            <img ref={elementoRef} className="w-full object-right-top max-w-[800px] max-h-[250px] md:object-right object-cover md:w-2/5 md:h-screen 2xl:w-1/4 md:h-100% md:max-h-[600px] z-[-1]" src="../src/assets/hattrickdata.png" alt="hattrick data" />
            <div className='px-8 mb-16 md:mb-0'>
                <Title />
                <DataStats lenPlayers={lenPlayers} lenTeams={lenTeams} lenManagers={lenManagers} />
                <Buttons/>
            </div>
            
        </section>
    )
}

export default Stats