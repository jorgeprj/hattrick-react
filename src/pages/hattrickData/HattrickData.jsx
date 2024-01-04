import React, { useState } from 'react'
import Footer from '../../components/layout/footer/Footer'
import './HattrickData.css'
import PlayersSection from './playersSection/PlayersSection';

const HattrickData = () => {

    const [tabMenu, setTabMenu] = useState('players')

    return (
        <div className='hattrick-data'>
            <h1>Hattrickdata</h1>
            <section className='content'>
                <section className='column-1'>

                    <ul>
                        <li onClick={() => setTabMenu('players')} className={tabMenu === 'players' ? 'active' : ''}>Players</li>
                        <li onClick={() => setTabMenu('teams')} className={tabMenu === 'teams' ? 'active' : ''}>Teams</li>
                        <li onClick={() => setTabMenu('managers')} className={tabMenu === 'managers' ? 'active' : ''}>Managers</li>
                    </ul>
                </section>

                <section className='column-2'>
                    {tabMenu === 'players' && <PlayersSection />}
                </section>

                <section className='column-3'>

                </section>
            </section>
            <Footer />
        </div>
    )
}

export default HattrickData