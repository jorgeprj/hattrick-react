import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import Button, { OffButton } from '../../../components/input/BUtton';

const Switch = ({ period, setPeriod }) => {
    const handleSwitch = (selectedPeriod) => {
        setPeriod(selectedPeriod);
    };

    return (
        <div className='flex rounded-full gap-2 border border-neutral-300 w-fit text-sm font-medium'>
            <p className={period === 'Mensal' ? 'bg-neutral-950 rounded-full text-white px-4 py-1' : 'text-neutral-400 hover:text-neutral-700 cursor-pointer px-4 py-1 '} onClick={() => handleSwitch('Mensal')}>
                Mensal
            </p>
            <p className={period === 'Anual' ? 'bg-neutral-950 rounded-full text-white px-4 py-1' : 'text-neutral-400 hover:text-neutral-700 cursor-pointer px-4 py-1'} onClick={() => handleSwitch('Anual')}>
                Anual
            </p>
        </div>
    );
};

const Benefit = ({ children }) => {
    return (
        <p className='flex items-center text-sm '><FaCheck className='mr-2 mt-1' />{children}</p>
    )
}

const Price = ({ price, period }) => {
    return (
        <h3 className='text-3xl font-bold my-4 mb-6'>R${price}<span className='text-neutral-400 font-medium text-sm ml-2'>/{period}</span></h3>
    )
}

const Card = ({ plan, period }) => {
    return (
        <div className='px-8 py-6 border border-neutral-300 rounded-lg w-80 text-left'>
            <h1 className='text-xl mb-2 font-semibold'>{plan.name}</h1>
            <p className='text-neutral-700 mb-2 text-sm'>{plan.description}</p>
            <Price price={plan.price[period]} period={period} />
            <OffButton className="w-full rounded-full">Buy Plan</OffButton>
            <div className='flex flex-col gap-2 mt-6'>
                {plan.benefits.map((benefit, index) => (
                    <Benefit key={index}>{benefit}</Benefit>
                ))}
            </div>
        </div>
    )
}

const MainCard = ({ plan, period }) => {
    return (
        <div className='px-8 py-6 border border-neutral-700 rounded-lg w-80 text-left'>
            <h1 className='text-xl mb-2 font-semibold'>{plan.name}</h1>
            <p className='text-neutral-700 mb-2 text-sm'>{plan.description}</p>
            <Price price={plan.price[period]} period={period} />
            <Button className="w-full rounded-full">Buy Plan</Button>
            <div className='flex flex-col gap-2 mt-6'>
                {plan.benefits.map((benefit, index) => (
                    <Benefit key={index}>{benefit}</Benefit>
                ))}
            </div>
        </div>
    )
}

const Title = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-[700px] text-center">
                <p className="font-bold uppercase text-neutral-500">
                    Planos
                </p>
                <h2 className="mb-3 text-4xl font-bold">Membros Premium</h2>
                <p className="mb-16 text-neutral-500">
                    Seja você um gerente novato ou um veterano experiente, 
                    nossos planos foram cuidadosamente elaborados para atender 
                    às suas necessidades.
                </p>
            </div>
        </div>
    )
}

const Pricing = () => {
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

    const [period, setPeriod] = useState('Mensal')

    const plans = [
        {
            name: 'Gerente Aspirante',
            description: 'Tudo que você precisa para deixar seu jogo mais realista.',
            price: {
                Mensal: '4,99',
                Anual: '39,99'
            },
            benefits: [
                'Ebooks Completos',
                'Artigos Exclusivos',
                'Hattrickdata Completo',
            ]
        },
        {
            name: 'Gerente Estrategista',
            description: 'O que você precisa para elevar seu nível e seu jogo!',
            price: {
                Mensal: '9,99',
                Anual: '99,99'
            },
            benefits: [
                'Benefícios do Plano Inicial',
                'Estatísticas de Desempenho',
                'Consultoria de Transferências',
                'Sliders Únicos e Exclusivos'
            ]
        },
        {
            name: 'Gerente Elite',
            description: 'Feito para os que desejam a experiência mais realista!',
            price: {
                Mensal: '19,99',
                Anual: '199,99'
            },
            benefits: [
                'Todos os Beneficios',
                'Análise do seu Gerente',
                'Análise do seu Time',
                'Análise da sua liga',
            ]
        }
    ]

    return (
        <section className='flex flex-col items-center justify-center text-center'>
            <Title/>
            <Switch period={period} setPeriod={setPeriod} />
            <div ref={elementoRef} className='flex justify-center flex-wrap px-8 py-4 gap-8 w-full mt-8'>
                <Card plan={plans[0]} period={period} />
                <MainCard plan={plans[1]} period={period}/>
                <Card plan={plans[1]} period={period}/>
            </div>
        </section>
    )
}

export default Pricing