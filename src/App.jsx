import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import Footer from './components/Footer';
import RoutesWrapper from './components/RoutesWrapper';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <CookieConsent />
        <ScrollToTop />
        <RoutesWrapper />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;