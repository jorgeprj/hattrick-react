import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AppRoutes from './routes/index.jsx';

function App() {

	const links = [
		{
			name: 'Home',
            path: '/home',
		},
		{
			name: 'Modo Carreira',
            path: '/careermode',
		},
		{
			name: 'Jogadores',
            path: '/players',
		},
	];

	const year = 2024;

	return (
		<>
			<Router>
				<AppRoutes links={links} year={year} />
			</Router>
		</>
	)
}

export default App
