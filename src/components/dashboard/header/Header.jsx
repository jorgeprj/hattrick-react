import './Header.css'

const Header = ({ section, setSection }) => {

    const sections = ['overview', 'squad', 'youth academy'];

    const handleClick = (section) => {
        setSection(section);
    };

    return (
        <div className='dashboard-header'>
            <header>
                <div className='team-photo'>
                    <img src="./src/assets/teams/113926.png" alt="Team Logo" />
                </div>
                <div className='team-basic-info'>
                    <h3>Salford City</h3>
                    <div className='country'>
                        <img src="./src/assets/flags/england.png" alt="England" />
                        <h4>England</h4>
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