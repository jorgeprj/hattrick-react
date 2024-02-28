import React, { useEffect, useRef } from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6'


const Title = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-[700px] text-center">
                <p className="font-bold uppercase text-neutral-500">
                    Recursos
                </p>
                <h2 className="mb-3 text-4xl font-bold">Tudo que você precisa!</h2>
                <p className="mb-16 text-neutral-500">
                    A hattrick disponibiliza tudo que você precisa para
                    transformar o modo carreira em uma jornada ultra-realista
                    e imersiva.
                </p>
            </div>
        </div>
    )
}

const Feature = ({ feature }) => {
    const elementoRef = useRef();

    useEffect(() => {
        const elementoAtual = elementoRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    elementoAtual.classList.add('animate-fade-up');
                } else {
                    elementoAtual.classList.remove('animate-fade-up');
                }
            });
        });

        observer.observe(elementoAtual);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={elementoRef} className="mb-12">
            <div className="flex">
                <div className="shrink-0">
                    <FaRegCircleCheck className='mr-3 h-4 w-4 text-success' />
                </div>
                <div className="ml-2 grow">
                    <p className="mb-1 font-bold">{feature.title}</p>
                    <p className="text-neutral-500">
                        {feature.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    const features = [
        {
            title: "Banco de dados único",
            description: "Primeiro banco de dados que engloba dados tanto do jogo quanto do mundo real."
        },
        {
            title: "Hattrick score",
            description: "Métrica única que avalia o potencial da contratação do jogador."
        },
        {
            title: "Análise Financeira",
            description: "Tenha uma visão abrangente das finanças do seu time."
        },
        {
            title: "Análise realista de mercado",
            description: "Maximize a busca por talentos com análise realista do mercado."
        },
        {
            title: "Blog",
            description: "Acompanhe e relembre os fatos importantes do seu modo de carreira."
        },
        {
            title: "Metas",
            description: "Ferramenta de visualização de todas as suas metas."
        }
    ];

    return (
        <section className="container mx-auto px-8">
            <Title />
            <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                {features.map((feature, index) => (
                    <Feature key={index} feature={feature} />
                ))}
            </div>
        </section>

    )
}

export default Features