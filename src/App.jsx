import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/layout/navbar/Navbar.jsx";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
			</Router>
		</div>
	)
}

export default App
