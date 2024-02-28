import React from 'react'
import { FaArrowLeft, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Logo = () => {
    return (
        <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img    className='h-12'
                    src="../src/assets/logo_black.png" 
                    alt="hattrick logo"/>
        </a>

    )
}

const Content = () => {
    return(
        <div className='flex flex-col items-center mb-24'>
            <h1 className='mb-4 text-6xl tracking-tight font-bold lg:text-8xl'>404</h1>
            <h2 className='mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-3xl'>Page not found.</h2>
            <p className='mb-6 text-xl font-light text-gray-500 text-center'>Sorry, we couldn't find the page you're looking for.</p>
            <a href="/home" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-sm 
                           font-medium text-center text-white rounded-lg bg-gray-950
                         hover:bg-black focus:ring-4 focus:ring-gray-300 "
            >
                <FaArrowLeft className="w-4 h-4 mr-2 -ml-1" />
                Voltar para a página principal
            </a>
        </div>
    )
}

const Footer = () => {
    return(
        <footer className='flex justify-center items-center gap-4'>
            <p className='block text-medium text-gray-500 sm:text-center'>© 2024 Hattrick, Inc. All rights reserved.</p>
            <div className='flex gap-4'>
                <a href="#">
                    <FaXTwitter className='text-gray-500 hover:text-gray-950'/>
                </a>
                <a href="#">
                    <FaGithub className='text-gray-500 hover:text-gray-950'/>
                </a>
                <a href="#">
                    <FaInstagram className='text-gray-500 hover:text-gray-950'/>
                </a>
            </div>
        </footer>
    )
}

const NotFound = () => {
    return (
        <div className='flex flex-col justify-between items-center h-screen p-4'>
            <Logo/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default NotFound