import React, { PropTypes } from 'react';
import TextInput from '../Form/TextInput/TextInput';
import SelectInput from '../Form/SelectInput/SelectInput';

const CourseForm = ({ course, allAuthors, onSave, onChange, saving, errors }) => (
  <form>
    <h1>Manage Course</h1>
    <TextInput
      name="title"
      label="Title"
      value={course.title}
      onChange={onChange}
      error={errors.title}
    />

    <SelectInput
      name="authorId"
      label="Author"
      value={course.authorId}
      defaultOption="Select Author"
      options={allAuthors}
      onChange={onChange} error={errors.authorId}
    />

    <TextInput
      name="category"
      label="Category"
      value={course.category}
      onChange={onChange}
      error={errors.category}
    />

    <TextInput
      name="length"
      label="Length"
      value={course.length}
      onChange={onChange}
      error={errors.length}
    />

    <input
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      onClick={onSave}
    />
  </form>
);

CourseForm.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
  allAuthors: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    title: PropTypes.string,
    authorId: PropTypes.string,
    category: PropTypes.string,
    length: PropTypes.string,
  }).isRequired,
};

export default CourseForm;
