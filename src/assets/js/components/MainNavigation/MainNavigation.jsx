import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles, { active } from './MainNavigation.scss';
import LoadingDots from '../LoadingDots/LoadingDots';

const MainNavigation = ({ loading }) => (
  <nav styleName="main-navigation">
    <NavLink styleName="navigation-item" activeClassName={active} exact to="/">Home</NavLink>
    <NavLink styleName="navigation-item" activeClassName={active} to="/about">About</NavLink>
    <NavLink styleName="navigation-item" activeClassName={active} to="/courses">Courses </NavLink>
    <NavLink styleName="navigation-item" activeClassName={active} to="/topics">Topics</NavLink>
    {loading && <LoadingDots interval={200} dots={20} />}
  </nav>
);

MainNavigation.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default CSSModules(MainNavigation, styles);
