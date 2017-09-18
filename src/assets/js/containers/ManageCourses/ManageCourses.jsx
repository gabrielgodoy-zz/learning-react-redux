import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';
import * as actions from '../Courses/CoursesActions';
import CourseForm from '../../components/CourseForm/CourseForm';
import { authorsFormattedForDropdown } from '../../selectors/selectors';

export class ManageCourses extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      authors: [],
      errors: {},
      saving: false,
    };

    // Crie o bind do 'this' corretamente
    this.saveCourse = this.saveCourse.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }

  // Estado de atualização quando os props mudam,
  // neste caso, quando os cursos vem de uma chamada ajax
  componentWillReceiveProps(nextProps) {
    const courseIdChanged = this.props.course.id !== nextProps.course.id;
    if (courseIdChanged) {
      // Popula formulário quando o curso existente é carregado diretamente
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  updateCourseState(event) {
    const field = event.target.name; // Cada campo do formulário tem um nome
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

    // Use o estado local fora do redux, no caso de dados
    // que o resto do aplicativo não se importará, como um feedback de "salvar" para o usuário
    this.setState({ saving: true });

    // Aqui é possível usar o saveCourse por causa do MapDispatchToProps
    this.props.actions.saveCourse(this.state.course) // Thunk retorna promises
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

// Defina que estado estará disponível neste componente através de props
// Representa estados da store
function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id; // Do caminho /course/:id

  let course = { // Curso vazio
    id: '',
    title: '',
    watchRef: '',
    authorId: '',
    length: '',
    category: '',
  };

  // Não obtenha novos cursos quando ainda não há cursos disponíveis,
  // aguarde até que a chamada do Ajax termine
  const courseExist = state.courses.length;

  if (courseId && courseExist) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course,
    authors: authorsFormattedForDropdown(state.authors),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageCourses));
