import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as coursesActions from './CoursesActions';
import CourseList from '../../components/CourseList/CourseList';
import CourseCreator from '../../components/CourseCreator/CourseCreator';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: '',
        id: '0',
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
    this.props.actions.createCourse(this.state.course); // eslint-disable-line
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Courses</title>
        </Helmet>

        <h2>Courses</h2>

        <CourseCreator
          onTitleChange={this.onTitleChange}
          onClickSave={this.onClickSave}
          stateValue={this.state.course.title}
        />

        <CourseList courses={courses} />

      </div>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
  })).isRequired,
  actions: PropTypes.shape({
    createCourses: PropTypes.func,
  }).isRequired,
};

// Define states that will be available on this component as props
function mapStateToProps(state, ownProps) { // eslint-disable-line
  return {
    courses: state.courses,
  };
}

// bindActionCreators makes mapDispatchToProps more terse
// bindActionCreators Maps all the action and wraps it in the dispatch
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coursesActions, dispatch),
  };
}

// Define actions that will be available on this component as props
// When mapDispatchToProps is not defined, the component will have 'dispatch' property as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
