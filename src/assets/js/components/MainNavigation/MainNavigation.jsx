import React from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles, { active } from './MainNavigation.scss';

const MainNavigation = () => (
  <nav styleName="main-navigation">
    <NavLink styleName="navigation-item" activeClassName={active} exact to="/">Home</NavLink>
    <NavLink styleName="navigation-item" activeClassName={active} to="/about">About</NavLink>
    <NavLink
      styleName="navigation-item"
      activeClassName={styles.active}
      to="/topics"
    >
      Topics
    </NavLink>
  </nav>
);

export default CSSModules(MainNavigation, styles);
