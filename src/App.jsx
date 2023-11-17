import Nav from './components/Nav'
import Footer from './components/Footer';
import AppRoutes from './routes/routes';
import {BrowserRouter as Router} from 'react-router-dom'

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