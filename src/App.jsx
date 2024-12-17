import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesWrapper from './components/RoutesWrapper';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop/>
      <RoutesWrapper />
      <Footer />
    </Router>
  );
}

export default App;