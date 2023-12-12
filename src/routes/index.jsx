import { Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from '../pages/dashboard/Dashboard'
import Scouts from '../pages/scouts/Scouts'
import ScoutPlayer from '../pages/scoutPlayer/ScoutPlayer';
import Player from '../pages/player/Player';
import Team from '../pages/team/Team';

export const AppRoutes = ( {year} ) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard"/>}/>
            <Route path="/dashboard" element={<Dashboard year={year}/>}/>
            <Route path="/scouts" element={<Scouts year={year}/>}/>
            <Route path="/player/scout/:id" element={<ScoutPlayer year={year}/>}/>
            <Route path="/player/:id" element={<Player year={year}/>}/>
            <Route path="/team/:id" element={<Team/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}