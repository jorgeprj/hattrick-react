import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from './routes/index.jsx';

import Navbar from "./components/layout/navbar/Navbar.jsx";

function App() {

	const year = 2023;

	return (
		<div>
			<Router>
				<Navbar />
				<AppRoutes year={year}/>
			</Router>

		</div>
	)
}

export default App
