// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoActivePage from './pages/NoActivePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoActivePage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
