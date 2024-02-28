import React, { useEffect, useState } from 'react'
import Avatar from '../../../components/dataDisplay/Avatar';

const Kits = ({team}) => {
    const [kit1Exists, setKit1Exists] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = `../../src/assets/teams/kits/kit1/${team.id}.png`;

        img.onload = function () {
            setKit1Exists(true);
        };

        img.onerror = function () {
            setKit1Exists(false);
        };
    }, [team.id]);


    if (!kit1Exists) {
        return null;
    }

    return (
        <section>
            <h4 className='font-semibold text-lg mb-4'>Kits</h4>
            <div className='flex gap-4'>
                <Avatar className='h-24 w-24' src={`../../src/assets/teams/kits/kit1/${team.id}.png`} alt={`${team.name} Kit 1`} />
                <Avatar className='h-24 w-24' src={`../../src/assets/teams/kits/kit2/${team.id}.png`} alt={`${team.name} Kit 2`} />
            </div>
        </section>
    )
}

export default Kits