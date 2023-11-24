// App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AppRoutes from './routes/routes';
import { WhatsappButton } from './components/WhatsappButton';
import { Suspense } from 'react';

function App() {
  return (
    <main>
      <Router>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
        <WhatsappButton />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
