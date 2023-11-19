import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home';

export const AppRoutes = ( {players, setPlayers, year} ) => {

    return (
        <Routes>
            <Route path="/" element={<Home players={players} setPlayers={setPlayers} year={year} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}