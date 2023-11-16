import Nav from './components/Nav'
// import { AboutUs } from './pages/AboutUs';
import Footer from './components/Footer';
import AppRoutes from './routes/routes';
import {BrowserRouter as Router} from 'react-router-dom'
// import {  Route, Routes, useLocation } from 'react-router-dom';
// import Home from './pages/Home';
// import Destiny from './pages/Destiny';
// import Experience from './pages/Experience';
// import Contact from './pages/Contact'
// import { DestinyDetail } from './pages/DestinyDetail';

function App() {
        return (
         <main>
            <Router>


            <Nav />
            <AppRoutes />
            <Footer />
        </Router>
         </main>  
        )
}

export default App