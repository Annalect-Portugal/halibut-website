import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesWrapper from './components/RoutesWrapper';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <Router>
      <Header />
      <CookieConsent/>
      <ScrollToTop/>
      <RoutesWrapper />
      <Footer />
    </Router>
  );
}

export default App;