import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import Players from '../pages/players/Players'
import Player from '../pages/profiles/player/Player'
import Team from '../pages/profiles/team/Team'
import League from '../pages/profiles/league/LEague'
import Hattrickdata from '../pages/hattrickdata/Hattrickdata'

const AppRoutes = ({ links, year }) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={
                <>
                    <Navbar links={links} />
                    <Home />
                    <Footer />
                </>}
            />
            <Route path="/players" element={
                <>
                    <Navbar links={links} />
                    <Players year={year} />
                    <Footer />
                </>}
            />

            <Route path="/player/:id" element={
                <>
                    <Navbar links={links} />
                    <Player year={year} />
                    <Footer />
                </>}
            />

            <Route path="/team/:id" element={
                <>
                    <Navbar links={links} />
                    <Team year={year} />
                    <Footer />
                </>}
            />

            <Route path="/league/:id" element={
                <>
                    <Navbar links={links} />
                    <League year={year} />
                    <Footer />
                </>}
            />

            <Route path="/hattrickdata" element={
                <>
                    <Navbar links={links} />
                    <Hattrickdata />
                    <Footer />
                </>}
            />


            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes