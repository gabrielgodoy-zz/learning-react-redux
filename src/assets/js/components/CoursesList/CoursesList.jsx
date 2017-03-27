import React, { PropTypes } from 'react';
import CourseListRow from '../CoursesListRow/CoursesListRow';

const CoursesList = ({ courses }) =>
  courses.map(course => <CourseListRow key={course.id} course={course} />);

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(React.PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default CoursesList;
