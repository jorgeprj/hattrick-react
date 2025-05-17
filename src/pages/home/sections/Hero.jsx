import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Button, { OffButton } from '../../../components/input/BUtton'

const MainImage = () => {
    return (
        <img className="w-full max-w-[800px] max-h-[250px] object-top object-cover md:w-2/5 md:h-screen 2xl:w-1/4 md:h-100% md:max-h-[600px] z-[-1] animate-fade-down animate-once"
            src="../src/assets/main.png"
            alt="Hero Section Image" />
    )
}

const Title = () => {
    return (
        <div>
            <h1 className='max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl'>
                Alcance um novo level no modo carreira
            </h1>
            <p className='max-w-2xl mb-6 font-light text-neutral-500 lg:mb-8 md:text-lg lg:text-xl 2xl:max-w-4xl'>
                Amplifique a sensação de realismo no seu Modo Carreira no EA FC 24 com análises de ponta,
                perfis de jogadores detalhados e estratégias de equipe adaptativas - Bem-vindo a uma nova era
                onde o jogo se mistura com a vida real.
            </p>
        </div>
    )
}

const Buttons = () => {
    return (
        <div className='mr-auto place-self-center lg:col-span-7'>
            <Button>
                Seja membro
                <FaArrowRight className="w-4 h-4 ml-2 -mr-1" />
            </Button>
            <OffButton>Saiba mais</OffButton>
        </div>
    )
}

const Hero = () => {
    return (
        <section className='flex flex-col-reverse md:flex-row md:justify-between 2xl:justify-center'>
            <div className='flex flex-col justify-center p-8 animate-fade-right'>
                <Title />
                <Buttons/>
            </div>
            <MainImage />
        </section>
    )
}

export default Hero