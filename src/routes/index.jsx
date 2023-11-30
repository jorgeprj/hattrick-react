import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/scouts/Scouts';
import Player from '../pages/player/Player';
import Dashboard from '../pages/dashboard/Dashboard';

export const AppRoutes = ( {players, setPlayers, posts, year} ) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard posts={posts} />} />
            <Route path="/scouts" element={<Home players={players} setPlayers={setPlayers} year={year} />} />
            <Route path="/player/:id" element={<Player players={players} year={year} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}