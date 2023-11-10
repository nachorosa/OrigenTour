import React from 'react'
import Nav from './components/Nav'
import { Home } from './pages/Home';
import { Destiny } from './pages/Destiny';
import { Experience } from './pages/Experience';
import { AboutUs } from './pages/AboutUs';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <AboutUs/>
      </div>
    );
  }
}

export default App