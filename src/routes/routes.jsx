 import { Route, Routes, useLocation} from 'react-router-dom'
 import { lazy } from 'react';
 import { paths } from './paths';

const Home = lazy(() => import('../pages/Home'))
const Destiny = lazy(() => import('../pages/Destiny'))

 const AppRoutes = () => {
    const location = useLocation()
    
    return (
        <Routes location={location} key={location.pathname}>
            <Route path={paths.home} element={<Home />}/>
            <Route path={paths.destinos} element={<Destiny/>}/>
        </Routes>
    )
 }

 export default AppRoutes
 
 
//  <div>
//                 <Nav/>
//                         <Routes location={location} key={this.location.pathname}>
//                             <Route path={"/"} element={<Home />} />
//                             <Route path={"/nosotros"} element={<AboutUs />} />
//                             <Route path={"/destinos"} element={<Destiny/>} />
//                             <Route path={"/destinos/:id"} element={<Destiny/>}/>
//                             <Route path={"/experiencias"} element={<Experience/>}/>
//                             <Route path={"/destinos/detalle"} element={<DestinyDetail/>}/>
//                             <Route path={"/contacto"} element={<Contact/>}/>
//                         </Routes>
//                 <Footer/>
//             </div>
//             const location = useLocation()    
