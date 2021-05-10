import './App.scss';
import '../node_modules/slick-carousel/slick/slick-theme.css'
import '../node_modules/slick-carousel/slick/slick.css'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';
import Services from './pages/services';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
            <Link to="/">
              <img className="header-logo" src="/logo-512.png" alt="Teegarden Tutoring logo"/>
              <img className="header-logo-text" src="/logo-text.png" alt="Teegarden Tutoring"/>
              {/* <h1>Teegarden Tutoring</h1> */}
            </Link>
          <nav>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer>
          <div>Teegarden Tutoring — powered by <a href="ashen.works">Ash Todd</a> © 2021</div>
          <div className="footer-contact">
            <a href="tel:512-487-3476">✆ (512) 487-3476</a>
            <a href="mailto:sapientia@utexas.edu">✉︎ sapientia@utexas.edu</a>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
