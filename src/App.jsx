import React from 'react'
import Nav from './components/Nav'
import { AboutUs } from './pages/AboutUs';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destiny from './pages/Destiny';
import Experience from './pages/Experience';
import WhatsappButton from './components/WhatsappButton';
import Contact from './pages/Contact'

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"} element={<Home />} />
                            <Route path={"/nosotros"} element={<AboutUs />} />
                            <Route path={"/destinos"} element={<Destiny/>} />
                            <Route path={"/destinos/:id"} element={<Destiny/>}/>
                            <Route path={"/experiencias"} element={<Experience/>}/>
                        </Routes>
                    </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

export default App