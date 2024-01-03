import React, { useEffect, useState } from 'react';
import HeadImage from '../../../shared/headImage/HeadImage';

const KitsSection = ({ team }) => {
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
            <h4>Kits</h4>
            <div className='kits'>
                <HeadImage path={`../../src/assets/teams/kits/kit1/${team.id}.png`} alt={`${team.name} Kit 1`}/>
                <HeadImage path={`../../src/assets/teams/kits/kit2/${team.id}.png`} alt={`${team.name} Kit 2`}/>
            </div>
        </section>
    )
}

export default KitsSection