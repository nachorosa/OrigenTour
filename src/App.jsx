import React from 'react'
import Nav from './components/Nav'
import { AboutUs } from './pages/AboutUs';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <AboutUs/>
        <Footer/>
      </div>
    );
  }
}

export default App