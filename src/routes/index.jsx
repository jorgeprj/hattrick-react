import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/scouts/Scouts';
import Player from '../pages/player/Player';

export const AppRoutes = ( {players, setPlayers, year} ) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/scouts" />} />
            <Route path="/scouts" element={<Home players={players} setPlayers={setPlayers} year={year} />} />
            <Route path="/player/:id" element={<Player players={players} year={year} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}