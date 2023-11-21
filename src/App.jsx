import Nav from './components/Nav'
import Footer from './components/Footer';
import AppRoutes from './routes/routes';
import {BrowserRouter as Router} from 'react-router-dom'
import { WhatsappButton } from "./components/WhatsappButton"


function App() {
        return (
         <main>
            <Router>
            <Nav />
            <AppRoutes />
            <WhatsappButton/>
            <Footer />
        </Router>
         </main>  
        )
}

export default App