import React from 'react'
import Nav from './components/Nav'
import { Home } from './pages/Home';
import { Destiny } from './pages/Destiny';
import Contact from './pages/Contact';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Destiny/>
        {/* <Home/> */}
        {/* <Contact/> */}
        <Footer/>
      </div>
    );
  }
}

export default App
