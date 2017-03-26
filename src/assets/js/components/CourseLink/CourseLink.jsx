import React, { PropTypes } from 'react';
import {
  Link,
} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './CourseLink.scss';

const TopicList = ({ match, path, label }) => (
  <Link styleName="topic-list-item" to={`${match.url}/${path}`}>
    {label}
  </Link>
);

TopicList.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CSSModules(TopicList, styles);
