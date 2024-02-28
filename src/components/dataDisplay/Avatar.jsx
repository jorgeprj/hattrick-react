import React from 'react'

const Avatar = ({className, src}) => {
    return (
        <img className={`min-w-fit w-auto h-10 rounded bg-neutral-200 ${className}`} src={src} alt="Avatar"/>
    )
}

export default Avatar