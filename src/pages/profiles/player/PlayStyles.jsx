import React from 'react'

const PlayStyles = ({player}) => {
    return (
        <section className='flex flex-col'>
            <h4 className='font-semibold text-lg mb-4'>Play Styles</h4>
            <div className='flex flex-wrap gap-4'>
                {player.playStyles.map(style =>
                    <div className='flex items-center whitespace-nowrap' key={style.id}>
                        <div className='mr-2'>
                            <img className='h-8 w-8' src={`../../src/assets/playStyles/${style.id}.png`} alt={`${style.id}`} />
                        </div>
                        <div>
                            <a href={`/playstyles/${style.id}`} className='text-sm font-medium text-neutral-400 cursor-pointer hover:text-black'>{style.name}</a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default PlayStyles