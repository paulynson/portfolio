// import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoActivePage from './pages/NoActivePage';


function App() {
  return (
    <div className="App">
     
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoActivePage} />
        </Switch>

        <Footer />

    </div>
  );
}

export default App;
