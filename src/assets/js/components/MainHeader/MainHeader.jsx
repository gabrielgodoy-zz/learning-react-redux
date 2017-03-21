import React, { PropTypes } from 'react';

const MainHeader = ({ title }) => <a>{title}</a>;

MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeader;
