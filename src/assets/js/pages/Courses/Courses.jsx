import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Courses.scss';
import * as actions from './CoursesActions';
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

    // On JS classes we need to set correct bindings
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
    this.props.dispatch(actions.createCourse(this.state.course)); // eslint-disable-line
  }

  courseRow(course, index) {  // eslint-disable-line
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Courses</title>
        </Helmet>

        <h2>Courses</h2>

        {this.props.courses.map(this.courseRow)}

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
  courses: PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
  })).isRequired,
};

// States that will be available on this component via props
function mapStateToProps(state, ownProps) { // eslint-disable-line
  return {
    courses: state.courses,
  };
}

// When mapDispatchToProps is not defined, the component will have 'dispatch' property on its props
export default connect(mapStateToProps)(CSSModules(Courses, styles));
