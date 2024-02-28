import React from 'react'

const Logo = ({ complete, color, className }) => {
    return (
        <>
            {complete ? (
                <div className={`flex ${color === 'white' ? 'text-white' : 'text-black'}`}>
                    <img className={`h-7`}
                        src={`../src/assets/logo_${color}.png`}
                        alt="hattrick logo"
                    />
                    <p className={`font-logo text-2xl font-bold  ${className}`}>hattrick</p>
                </div>
            ) : (
                <p className={`font-logo text-2xl font-bold ${className}
                    ${color === 'white' ? 'text-white' : 'text-black'}`}>
                    hattrick
                </p>
            )}
        </>
    )
}

export default Logo
