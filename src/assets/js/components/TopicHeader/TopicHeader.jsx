import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './TopicHeader.scss';

const Topic = ({ match }) => (
  <div styleName="topic">
    <h3>{match.params.topicId}</h3>
  </div>
);

Topic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      topicId: PropTypes.string,
    }),
  }).isRequired,
};

export default CSSModules(Topic, styles);
