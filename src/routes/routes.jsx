 import { Route, Routes, useLocation} from 'react-router-dom'
 import { lazy } from 'react';
 import { paths } from './paths';
import FormViaje from '../components/FormViaje';
import Destiny from '../pages/Destiny'
import Admin from '../pages/Admin';

const Home = lazy(() => import('../pages/Home'))
// const Destiny = lazy(() => import('../pages/Destiny'))
const Experience = lazy(() => import('../pages/Experience'))
const AboutUs = lazy(() => import('../pages/AboutUs'))
const Contact = lazy(() => import('../pages/Contact'))
const DestinyDetail = lazy(() => import('../pages/DestinyDetail'))

 const AppRoutes = () => {
    const location = useLocation()
    
    return (
        <Routes location={location} key={location.pathname}>
            <Route path={paths.home} element={<Home/>}/>
            <Route path={paths.destinos} element={<Destiny/>}/>
            <Route path={paths.experiencias} element={<Experience/>}/>
            <Route path={paths.nosotros} element={<AboutUs/>}/>
            <Route path={paths.contacto} element={<Contact/>}/>
            <Route path={paths.destinoDetalle} element={<DestinyDetail/>}/>
            <Route path={paths.form} element={<FormViaje/>}/>
            <Route path={paths.admin} element={<Admin/>}/>
        </Routes>
    )
 }

 export default AppRoutes