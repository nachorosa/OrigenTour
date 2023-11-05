import React from 'react'
import Nav from './components/Nav'
import { Destiny } from './pages/Destiny';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Destiny/>
      </div>
    );
  }
}

export default App
