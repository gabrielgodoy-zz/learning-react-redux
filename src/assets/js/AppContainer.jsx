import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import MainHeader from './components/MainHeader/MainHeader';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Topics from './pages/Topics/Topics';

const AppContainer = () => (
  <Router>
    <div>
      <MainHeader title="This is the header" />
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </div>
  </Router>
);

export default AppContainer;
