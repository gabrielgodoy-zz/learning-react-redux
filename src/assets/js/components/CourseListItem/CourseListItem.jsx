import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './CourseListItem.scss';

const CourseListItem = ({ course }) => (
  <div styleName="course-item">
    <Link styleName="title" to={`/course/${course.id}`}>{course.title}</Link>
    <p styleName="length">
      Duração:
      <span styleName="value">
        {course.length}
      </span>
    </p>
    <p styleName="author">
      Author
      <span styleName="value">
        {course.authorId}
      </span>
    </p>
    <p styleName="category">
      Category
      <span styleName="value">
        {course.category}
      </span>
    </p>
    <a href={course.watchHref} styleName="link">Veja</a>
  </div>
);

CourseListItem.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseListItem;
