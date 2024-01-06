import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import Player from '../pages/profile/player/Player'
import Team from '../pages/profile/team/Team'
import Scouts from '../pages/scouts/Scouts'
import HattrickData from '../pages/hattrickData/HattrickData'
import EditPlayer from '../pages/hattrickData/playersSection/editPlayer/EditPlayer'
import Manager from '../pages/profile/manager/Manager'
import Dashboard from '../pages/dashboard/Dashboard'
import Article from '../components/pages/article/Article'

export const AppRoutes = ({teamId, year}) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home year={year} />}/>
            <Route path="/manager/:id" element={<Manager year={year} />}/>
            <Route path="/player/:id" element={<Player year={year} />}/>
            <Route path="/team/:id" element={<Team year={year} />}/>
            <Route path="/scouts" element={<Scouts year={year} />}/>
            <Route path="/dashboard" element={<Dashboard teamId={teamId} year={year} />}/>
            <Route path="/article/:id" element={<Article/>}/>
            <Route path="/hattrickdata" element={<HattrickData/>}/>
            <Route path="/hattrickdata/editplayer/:id" element={<EditPlayer />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}