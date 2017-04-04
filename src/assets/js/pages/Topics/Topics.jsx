import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';
import TopicLink from '../../components/Topic/Link/Link';
import TopicHeader from '../../components/Topic/Header/Header';

const Topics = ({ match }) => (
  <div>
    <div className="links">
      <TopicLink match={match} path="topic-1" label="Topic 1" />
      <TopicLink match={match} path="topic-2" label="Topic 2" />
      <TopicLink match={match} path="topic-3" label="Topic 3" />
    </div>

    <Route path={`${match.url}/:topicId`} component={TopicHeader} />
    <Route path={match.url} exact render={() => <p>Please select a topic</p>} />
  </div>
);

Topics.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Topics;
