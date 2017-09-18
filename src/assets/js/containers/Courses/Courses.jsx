import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as coursesActions from './CoursesActions';
import CourseList from '../../components/CourseList/CourseList';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: '',
        id: '0',
      },
    };

    // Nas classes de JS, precisamos definir o binding correto
    // Definindo o contexto do 'this'
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    // O bind para o 'this' correto poderia ter sido feito dentro da função de render, assim:
    // <input onChange={this.onTitleChange.bind(this)} />
    // mas tem problemas de desempenho, porque ao fazer isso, você está recriando essa função
    // cada vez que a função de render é executada
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course); // eslint-disable-line
  }

  redirectToAddCoursePage() {
    this.props.history.push('/course');
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
        <input
          type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

// Defina estados que estarão disponíveis neste componente como props
function mapStateToProps(state) { // eslint-disable-line
  return {
    courses: state.courses,
  };
}

// bindActionCreators torna o MapDispatchToProps mais conciso
// bindActionCreators Mapeia toda a action e envolve-a no dispatch
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coursesActions, dispatch),
  };
}

// Defina ações que estarão disponíveis neste componente como props
// Quando mapDispatchToProps não está definido, o componente terá a propriedade "dispatch" como prop
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Courses));
