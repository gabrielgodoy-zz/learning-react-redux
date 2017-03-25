import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import MainHeader from './components/MainHeader/MainHeader';
import MainNavigation from './components/MainNavigation/MainNavigation';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Topics from './pages/Topics/Topics';

const AppContainer = () => (
  <BrowserRouter>
    <div>
      <MainHeader title="This is the header" />
      <MainNavigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </BrowserRouter>
);

export default AppContainer;
