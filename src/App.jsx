// App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AppRoutes from './routes/routes';
import { WhatsappButton } from './components/WhatsappButton';
import { Suspense } from 'react';
import LoadingOval from './components/LoadingOval';

function App() {
  return (
    <main>
      <Router>
        <Nav />
        <Suspense fallback={<LoadingOval/>}>
          <AppRoutes />
        </Suspense>
        <WhatsappButton />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
