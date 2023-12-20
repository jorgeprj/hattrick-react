import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from './routes/index.jsx';

import Navbar from "./components/layout/navbar/Navbar.jsx";
import Footer from "./components/layout/footer/Footer.jsx";

function App() {

	const links = [
		{
			name: 'Home',
            path: '/home',
		},
		{
			name: 'Dashboard',
            path: '/dashboard',
		},
		{
			name: 'Scouts',
            path: '/scouts',
		},
	];

	const year = 2025;

	return (
		<div>
			<Router>
				<Navbar links={links}/>
				<AppRoutes year={year}/>
			</Router>
		</div>
	)
}

export default App
