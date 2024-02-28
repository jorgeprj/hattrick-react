import React from 'react'
import Logo from '../shared/Logo';
import { FaFacebookF, FaGithub, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const socialLinks = [
    { href: 'https://github.com/jorgeprj', text: <FaGithub /> },
    { href: '#', text: <FaInstagram /> },
    { href: '#', text: <FaFacebookF /> },
    { href: '#', text: <FaXTwitter /> },
    { href: '#', text: <FaYoutube /> },
];

const toolsLinks = [
    { href: '/hattrickdata', text: 'Hattrickdata' },
    { href: '/positioncalculator', text: 'Calculadora' },
];

const followLinks = [
    { href: '#', text: 'Github' },
    { href: '#', text: 'Discord' },
];

const legalLinks = [
    { href: '#', text: 'Política de Privacidade' },
    { href: '#', text: 'Temos e Condições' },
];

const Section = ({ title, links }) => (
    <div>
        <h2 className="mb-2 text-sm font-semibold text-white uppercase">{title}</h2>
        <ul className="flex flex-col gap-1 text-neutral-500">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} className="hover:underline">{link.text}</a>
                </li>
            ))}
        </ul>
    </div>

);

const Main = () => {
    return (
        <div className="mb-6 md:mb-0">
            <Logo complete={true} color={"white"} />
            <p className='text-neutral-500 md:mr-8 sm:max-w-xl xl:max-w-screen-sm mt-2'>
                Eleve sua experiência no Modo Carreira do EA FC 24 com insights inigualáveis, perfis imersivos
                de jogadores e táticas de equipe dinâmicas - Onde o jogo se torna real.
            </p>
        </div>
    )
};

const Social = ({ links }) => {
    return (
        <div className="flex mt-4 space-x-6 sm:justify-end sm:mt-0 text-base">
            {links.map((link, index) => (
                <a key={index} href={link.href} className="text-neutral-500 hover:text-white">
                    {link.text}
                </a>
            ))}
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="p-12 bg-black mt-24 text-sm">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <Main />
                    <div className="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-3">
                        <Section title={"Resources"} links={toolsLinks} />
                        <Section title={"Nos Siga"} links={followLinks} />
                        <Section title={"Legal"} links={legalLinks} />
                    </div>
                </div>
                <hr className="my-6 border-neutral-600 sm:mx-autolg:my-8" />
                <Social links={socialLinks}/>
            </div>
        </footer>
    )
}

export default Footer