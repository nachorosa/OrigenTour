import React from 'react'
import Nav from './components/Nav'
import { AboutUs } from './pages/AboutUs';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destiny from './pages/Destiny';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/about"} element={<AboutUs />} />
                        <Route path={"/destiny"} element={<Destiny/>} />
                        <Route path={"/destiny/:id"} element={<Destiny/>} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App