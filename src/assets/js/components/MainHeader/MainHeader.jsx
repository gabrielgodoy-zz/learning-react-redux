import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './MainHeader.scss';

const MainHeader = ({ title }) => <div styleName="main-header">{title}</div>;

MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CSSModules(MainHeader, styles);
