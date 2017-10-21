import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.scss';
import LoadingDots from '../LoadingDots/LoadingDots';

const MainNavigation = ({ loading }) => (
  <nav styleName="main-navigation">
    <NavLink activeClassName="active" exact styleName="navigation-item" to="/">Home</NavLink>
    <NavLink activeClassName="active" styleName="navigation-item" to="/about">About</NavLink>
    <NavLink activeClassName="active" styleName="navigation-item" to="/courses">Courses </NavLink>
    <NavLink activeClassName="active" styleName="navigation-item" to="/topics">Topics</NavLink>
    {loading && <LoadingDots dots={20} interval={200} />}
  </nav>
);

MainNavigation.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default MainNavigation;
