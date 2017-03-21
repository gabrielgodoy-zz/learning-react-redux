import React, { PropTypes } from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';

const Topic = ({ match }) => (
  <div>
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

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
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
