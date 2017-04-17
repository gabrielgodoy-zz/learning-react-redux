import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';
import * as actions from '../Courses/CoursesActions';
import CourseForm from '../../components/CourseForm/CourseForm';

export class ManageCourses extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      authors: [],
      errors: {},
      saving: false,
    };

    // Bind correct 'this' context
    this.saveCourse = this.saveCourse.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }

  // Update state when props change, in  this case, when courses comes from ajax call
  componentWillReceiveProps(nextProps) {
    const courseIdChanged = this.props.course.id !== nextProps.course.id;
    if (courseIdChanged) {
      // Populate form when existing course is loaded directly
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  updateCourseState(event) {
    const field = event.target.name; // Each form field has a name
    const course = this.state.course;
    course[field] = event.target.value;
    return this.setState({ course });
  }

  redirect() {
    toastr.success('Course saved!');
    this.setState({ saving: true });
    this.props.history.push('/courses');
  }

  courseFormIsValid() {
    let formIsValid = true;
    const errors = {};
    const titleIsLessThanMinimumLength = this.state.course.title.length < 5;

    if (titleIsLessThanMinimumLength) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    // Use local state outside of redux, in the case when data
    // that the rest of the app will not care about, like a "saving" feedback to the user
    this.setState({ saving: true });

    // Here I am capable of using saveCourse because of mapDispatchToProps
    this.props.actions.saveCourse(this.state.course) // Thunk returns promises
        .then(() => this.redirect())
        .catch((error) => {
          toastr.error(error);
          this.setState({ saving: false });
        });
  }

  render() {
    return (
      <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        onSave={this.saveCourse}
        onChange={this.updateCourseState}
        saving={this.state.saving}
      />
    );
  }
}

ManageCourses.propTypes = {
  actions: PropTypes.shape({
    saveCourse: PropTypes.func.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function getCourseById(courses, id) {
  const course = courses.filter(courseItem => courseItem.id === id);
  if (course) {
    return course[0];
  }
  return null;
}

// Define what state will be available on this component via props
// Represent states from the store
function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id; // From the path /course/:id

  let course = { // Empty course
    id: '',
    title: '',
    watchRef: '',
    authorId: '',
    length: '',
    category: '',
  };

  // Don't try to get new courses when no courses are available yet, wait for Ajax call to finish
  const courseExist = state.courses.length;

  if (courseId && courseExist) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => ({
    value: author.id,
    text: `${author.firstName} ${author.lastName}`,
  }));

  return {
    course,
    authors: authorsFormattedForDropdown,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageCourses));
