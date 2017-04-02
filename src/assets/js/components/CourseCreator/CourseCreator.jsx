import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './CourseCreator.scss';

const CourseCreator = ({ onTitleChange, onClickSave, stateValue }) => (
  <div styleName="create-course-container">
    <h3>Create a course</h3>
    <input
      type="text"
      onChange={onTitleChange}
      value={stateValue}
    />
    <input
      type="submit"
      onClick={onClickSave}
      value="Save"
    />
  </div>
);

CourseCreator.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default CSSModules(CourseCreator, styles);
