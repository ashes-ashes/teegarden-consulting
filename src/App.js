import logo from './logo.svg';
import './App.scss';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
            <Link to="/">
              <img src=""/>
              <h1>Teegarden Tutoring</h1>
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
            services
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/">
            home
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
