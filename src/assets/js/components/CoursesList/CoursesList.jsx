import React, { PropTypes } from 'react';
import CourseListRow from '../CoursesListRow/CoursesListRow';

const CoursesList = ({ courses }) => (
  <div>
    {courses.map(course => <CourseListRow key={course.id} course={course} />)}
  </div>
);

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(React.PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default CoursesList;
