import { abbreviateName } from '../../../utils/abbreviateName';
import './Header.css'

import { FaClipboard } from 'react-icons/fa6';

const Header = ({ section, setSection, coach }) => {

    const sections = ['overview', 'squad', 'youth academy', 'transfers'];

    const handleClick = (section) => {
        setSection(section);
    };

    return (
        <div className='dashboard-header'>
            <header>
                <div className='team'>
                    <div className='team-photo'>
                        <img src="./src/assets/teams/113926.png" alt="Team Logo" />
                    </div>
                    <div className='team-basic-info'>
                        <div className='trophys'>
                            <h3>Salford City</h3>
                            <img src="./src/assets/trophys/4.png" alt="EFL League Two" />
                        </div>
                        <div className='country'>
                            <img src="./src/assets/flags/england.png" alt="England" />
                            <h4>England</h4>
                        </div>
                    </div>
                </div>

                <div className='coach-infos'>
                    <div className='coach-photo'>
                        <img src={`./src/assets/players/999999.png`} alt={`coach ${coach.id} Image`} />
                    </div>
                    <div className='coach-basic-infos'>
                        <h4>{coach.name}</h4>
                        <div className='country'>
                            <h5>{coach.nationality}</h5>
                            <img src={`./src/assets/flags/${coach.nationality}.png`} alt={`${coach.nationality}`} />
                        </div>
                    </div>
                    <div className='coach-icon'>
                        <FaClipboard />
                    </div>
                </div>
            </header>
            <nav>
                <ul>
                    {sections.map((s) => (
                        <li key={s} className={section === s ? 'active' : ''} onClick={() => handleClick(s)}>
                            {s.charAt(0).toUpperCase() + s.slice(1)}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header