import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../Courses/CoursesActions';
import CourseForm from '../../components/CourseForm/CourseForm';

class ManageCourses extends React.Component {  // eslint-disable-line
  constructor(props, context) {  // eslint-disable-line
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      authors: [],
      errors: {},
    };

    // Bind correct this context
    this.saveCourse = this.saveCourse.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }

  updateCourseState(event) {
    const field = event.target.name; // Each form field has a name
    const course = this.state.course;
    course[field] = event.target.value;
    return this.setState({ course });
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render() {
    return (
      <div>
        <Route
          path={`${this.props.match.url}/:id`}
          render={
            () => (
              <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.props.authors}
                onSave={this.saveCourse}
                onChange={this.updateCourseState}
                saving=""
              />
            )}
        />
        <Route
          path={this.props.match.url}
          exact
          render={
            () => (
              <div className="manage-course-container">
                <h1>Manage Courses</h1>
              </div>
            )
          }
        />
      </div>
    );
  }
}

ManageCourses.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    saveCourse: PropTypes.func.isRequired,
  }).isRequired,
};

// Pull in the React Router context so router is available on this.contet.router
ManageCourses.contextTypes = {
  router: PropTypes.object.isRequired,
};

// Define what state will be available on this component via props
// Represent states from the store
function mapStateToProps(state, ownProps) { // eslint-disable-line
  const course = {
    title: '',
    watchRef: '',
    authorId: '',
    length: '',
    category: '',
  };

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourses);
