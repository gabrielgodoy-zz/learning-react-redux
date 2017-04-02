import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './CourseListItem.scss';

const CourseListItem = ({ course }) => (
  <div styleName="course-item">
    <h4 styleName="title">{course.title}</h4>
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

export default CSSModules(CourseListItem, styles);
