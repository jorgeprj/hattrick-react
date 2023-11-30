import { BrowserRouter as Router } from "react-router-dom"
import { useEffect, useState } from "react";
import { AppRoutes } from './routes/index.jsx';

import Navbar from "./components/layout/navbar/Navbar.jsx";

function App() {

	const [players, setPlayers] = useState([]);
	const [posts, setPosts] = useState([]);
	const year = 2023

    useEffect(() => {
		const fetchPlayers = async () => {
			try {
				const response = await fetch('http://localhost:5000/players');

				if (response.ok) {
					const data = await response.json();
					const sortedPlayers = data.sort((a, b) => b.futz - a.futz);
					setPlayers(sortedPlayers);
				} else {
					console.error('Erro ao buscar dados da API');
				}
			} catch (error) {
				console.error('Erro na requisição:', error);
			}
		};

		fetchPlayers();
	}, []);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:5000/posts');

				if (response.ok) {
					const data = await response.json();
					const reversedData = data.reverse();
					setPosts(reversedData);
				} else {
					console.error('Erro ao buscar dados da API');
				}
			} catch (error) {
				console.error('Erro na requisição:', error);
			}
		};

		fetchPosts();
	}, []);

	return (
		<div>
			<Router>
				<Navbar />
				<AppRoutes players={players} posts={posts} setPlayers={setPlayers} year={year} />
			</Router>
		</div>
	)
}

export default App
