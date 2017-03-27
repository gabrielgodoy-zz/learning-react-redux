import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './CoursesListRow.scss';

const CoursesListRow = ({ course }) => (
  <h4 styleName="course-item">{course.title}</h4>
);

CoursesListRow.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CSSModules(CoursesListRow, styles);
