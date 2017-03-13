import React, { PropTypes } from 'react';

const ShowQuote = ({ quote }) => <p>{quote}</p>;

ShowQuote.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default ShowQuote;
