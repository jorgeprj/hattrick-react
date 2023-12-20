import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import PlayerReport from '../pages/playerReport/PlayerReport'
import Player from '../pages/player/Player'
import Coach from '../pages/coach/Coach'

export const AppRoutes = ({year}) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home year={year} />}/>
            <Route path="/coach" element={<Coach year={year} />}/>
            <Route path="/player/:id" element={<Player year={year} />}/>
            <Route path="/player/report/:id" element={<PlayerReport year={year} />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}