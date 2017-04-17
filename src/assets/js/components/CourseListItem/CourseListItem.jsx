import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './CourseListItem.scss';

const CourseListItem = ({ course }) => (
  <div styleName="course-item">
    <Link to={`/course/${course.id}`} styleName="title">{course.title}</Link>
    <p styleName="length">
      Length:
      <span styleName="value">
        { course.length }
      </span>
    </p>
    <p styleName="author">
      Author
      <span styleName="value">
        { course.authorId }
      </span>
    </p>
    <p styleName="category">
      Category
      <span styleName="value">
        { course.category }
      </span>
    </p>
    <a styleName="link" href={course.watchHref}>Watch</a>
  </div>
);

CourseListItem.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseListItem;
