import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Link.scss';

const TopicLink = ({ match, path, label }) => (
  <div styleName="topic-list-item">
    <Link styleName="link" to={`${match.url}/${path}`}>
      {label}
    </Link>
  </div>
);

TopicLink.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CSSModules(TopicLink, styles);
