import React, { PropTypes } from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Courses.scss';

import CourseLink from '../../components/CourseLink/CourseLink';
import CourseHeader from '../../components/CourseHeader/CourseHeader';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: '',
      },
    };

    // Binding correct 'this' context
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

    // The bind to the correct 'this' could have been done inside the render function, like that:
    // <input onChange={this.onTitleChange.bind(this)} />
    // but it has performance issues because by doing that you are recreting that function
    // each time the render function runs
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Courses</title>
        </Helmet>

        <h2>Courses</h2>

        <div styleName="create-course-container">
          <h3>Create a course</h3>
          <input
            type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title}
          />
          <input
            type="submit"
            onClick={this.onClickSave}
            value="Save"
          />
        </div>

        <div className="links">
          <CourseLink match={this.props.match} path="topic-1" label="Course 1" />
          <CourseLink match={this.props.match} path="topic-2" label="Course 2" />
          <CourseLink match={this.props.match} path="topic-3" label="Course 3" />
        </div>

        <Route path={`${this.props.match.url}/:topicId`} component={CourseHeader} />
        <Route
          path={this.props.match.url}
          exact
          render={() => <p>Please select a topic</p>}
        />
      </div>
    );
  }
}

Courses.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CSSModules(Courses, styles);
