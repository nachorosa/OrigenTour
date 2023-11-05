import React from 'react'
import Nav from './components/Nav'
import { Experience } from './pages/Experience';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Experience/>
      </div>
    );
  }
}

export default App
