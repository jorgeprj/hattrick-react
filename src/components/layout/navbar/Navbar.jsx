import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ links }) => {
	const location = useLocation();

	return (
		<div className='navbar'>
			<a href='/home' className='logo'>
				hattrick
			</a>
			<div className='options'>
				<ul>
					{links.map(link => (
						<Link to={link.path} className={location.pathname === link.path ? "active" : ""} key={link.name}><li>{link.name}</li></Link>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Navbar