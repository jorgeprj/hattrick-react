import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	const links = [
		{
			name: 'Dashboard',
            path: '/dashboard',
		},
		{
			name: 'Scouts',
            path: '/scouts',
		},
		{
			name: 'Ranking',
            path: '/rankings',
		}
	];

	const location = useLocation();

	return (
		<div className='navbar'>
			<div className='logo'>
				<Link to="/">
					futz
				</Link>
			</div>
			<ul>
				{links.map(link =>(
					<Link to={link.path} className={location.pathname === link.path ? "active" : ""} key={link.name}><li>{link.name}</li></Link>
				))}
			</ul>
		</div>
	)
}

export default Navbar