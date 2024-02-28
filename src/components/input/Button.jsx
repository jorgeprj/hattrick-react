import React from 'react'

const Button = ({ children, className }) => {
    return (
        <a className={`inline-flex items-center justify-center px-5 py-3 mr-3 text-sm 
        font-medium text-center text-white rounded-lg bg-neutral-950 cursor-pointer
      hover:bg-black focus:ring-4 focus:ring-neutral-300 ${className} `}
        >
            {children}
        </a>
    )
}

export const OffButton = ({ children, className }) => {
    return (
        <a className={`mt-4 md:mt-0 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-neutral-900 border border-neutral-300 rounded-lg hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 cursor-pointer ${className}`}>
            {children}
        </a>

    )
}


export default Button