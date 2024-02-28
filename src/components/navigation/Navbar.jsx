import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../input/Button'

const Hamburger = () => {
    return (
        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    )
}

const Link = ({ link, location }) => {
    const active = link.path === location.pathname
    return (
        <li>
            {!active ? (
                <a href={link.path}
                    className="block py-2 px-3 md:p-0 bg-neutral-950 rounded md:bg-transparent md:text-neutral-400 md:hover:text-neutral-700"
                    aria-current="page"
                >
                    {link.name}
                </a>
            ) : (
                <a href={link.path}
                    className="block py-2 px-3 md:p-0 bg-neutral-950 rounded md:bg-transparent md:text-neutral-950"
                    aria-current="page"
                >
                    {link.name}
                </a>

            )}

        </li >
    )
}

const Logo = ({ }) => {
    return (
        <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <p className='font-logo text-2xl font-bold'>hattrick</p>
        </a>
    )
}

const MenuLinks = ({ links, location }) => {
    return (
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-neutral-100 rounded-lg bg-neutral-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-50">
                {links.map((link, index) => (
                    <Link key={index} link={link} location={location} />
                ))}
            </ul>
        </div>
    )
}

const Navbar = ({ links }) => {
    const location = useLocation();

    return (
        <nav className="bg-slate-50 border-neutral-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo />
                <div className="flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <Button className={"text-xs"}>Seja membro</Button>
                    <Hamburger />
                </div>
                <MenuLinks links={links} location={location} />
            </div>
        </nav>

    )
}

export default Navbar