import React from 'react'
import Nav from './components/Nav'
import { Home } from './pages/Home';
import { Destiny } from './pages/Destiny';
import Contact from './pages/Contact';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Destiny/>
        {/* <Home/> */}
        {/* <Contact/> */}
      </div>
    );
  }
}

export default App
