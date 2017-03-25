import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './MainHeader.scss';

const MainHeader = ({ title }) => <h2 styleName="main-header">{title}</h2>;

MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CSSModules(MainHeader, styles);
