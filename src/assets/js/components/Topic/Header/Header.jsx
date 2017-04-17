import React, { PropTypes } from 'react';
import './Header.scss';

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

export default Topic;
