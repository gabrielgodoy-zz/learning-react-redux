import React, { PropTypes } from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';

import TopicLink from '../../components/TopicLink/TopicLink';
import TopicHeader from '../../components/TopicHeader/TopicHeader';

const Topics = ({ match }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Topics</title>
    </Helmet>

    <h2>Topics</h2>

    <div className="links">
      <TopicLink match={match} path="topic-1" label="Topic 1" />
      <TopicLink match={match} path="topic-2" label="Topic 2" />
      <TopicLink match={match} path="topic-3" label="Topic 3" />
    </div>

    <Route path={`${match.url}/:topicId`} component={TopicHeader} />
    <Route
      path={match.url}
      exact
      render={() => (
        <h3>Please select a topic.</h3>
      )}
    />
  </div>
);

Topics.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Topics;
