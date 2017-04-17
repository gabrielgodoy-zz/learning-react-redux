import React, { PropTypes } from 'react';
import './MainHeader.scss';

const MainHeader = ({ title }) => <h2 styleName="main-header">{title}</h2>;

MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeader;
