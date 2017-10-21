import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';
import TopicLink from '../../components/Topic/Link/Link';
import TopicHeader from '../../components/Topic/Header/Header';

const Topics = ({ match }) => (
  <div>
    <div className="links">
      <TopicLink label="Topic 1" match={match} path="topic-1" />
      <TopicLink label="Topic 2" match={match} path="topic-2" />
      <TopicLink label="Topic 3" match={match} path="topic-3" />
    </div>

    <Route component={TopicHeader} path={`${match.url}/:topicId`} />
    <Route exact path={match.url} render={() => <p>Selecione um tópico</p>} />
  </div>
);

Topics.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Topics;
