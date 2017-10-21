import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Link.scss';

const TopicLink = ({ match, path, label }) => (
  <Link styleName="link" to={`${match.url}/${path}`}>
    {label}
  </Link>
);

TopicLink.propTypes = {
  label: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default TopicLink;
