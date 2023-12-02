import { Route, Routes, useLocation } from 'react-router-dom'
import { lazy } from 'react';
import { paths } from './paths';
import { useAuth } from '../context/AuthProvider';
import ProtectedRoutes from './ProtectedRoutes';


const Home = lazy(() => import('../pages/Home'))
const Destiny = lazy(() => import('../pages/Destiny'))
const Experience = lazy(() => import('../pages/Experience'))
const AboutUs = lazy(() => import('../pages/AboutUs'))
const Contact = lazy(() => import('../pages/Contact'))
const DestinyDetail = lazy(() => import('../pages/DestinyDetail'))
const Admin = lazy(() => import('../pages/Admin'))
const Login = lazy(() => import('../pages/Login'))

const AppRoutes = () => {
    const location = useLocation()
    const { token } = useAuth()

    return (
        <>
            {token ?
                <Routes location={location} key={location.pathname}>
                    <Route path={"/*"} element={<Admin />} />
                    <Route path={paths.home} element={<Home />} />
                    <Route path={paths.destinos} element={<Destiny />} />
                    <Route path={paths.experiencias} element={<Experience />} />
                    <Route path={paths.nosotros} element={<AboutUs />} />
                    <Route path={paths.contacto} element={<Contact />} />
                    <Route path={paths.destinoDetalle} element={<DestinyDetail />} />
                    <Route path={paths.admin} element={<Admin />} />
                </Routes>
                :
                <Routes location={location} key={location.pathname}>
                    <Route path={"/*"} element={<Home />} />
                    <Route path={paths.home} element={<Home />} />
                    <Route path={paths.destinos} element={<Destiny />} />
                    <Route path={paths.experiencias} element={<Experience />} />
                    <Route path={paths.nosotros} element={<AboutUs />} />
                    <Route path={paths.contacto} element={<Contact />} />
                    <Route path={paths.destinoDetalle} element={<DestinyDetail />} />
                    <Route path={paths.login} element={<Login />} />
                </Routes>
            }
        </>
    )
}

export default AppRoutes