import React, { PropTypes } from 'react';
import TextInput from '../Form/TextInput/TextInput';
import SelectInput from '../Form/SelectInput/SelectInput';

const CourseForm = ({ course, allAuthors, onSave, onChange, saving, errors }) => (
  <form>
    <h1>Manage Course</h1>
    <TextInput
      error={errors.title}
      label="Title"
      name="title"
      onChange={onChange}
      value={course.title}
    />

    <SelectInput
      defaultOption="Select Author"
      error={errors.authorId}
      label="Author"
      name="authorId"
      onChange={onChange}
      options={allAuthors}
      value={course.authorId}
    />

    <TextInput
      error={errors.category}
      label="Category"
      name="category"
      onChange={onChange}
      value={course.category}
    />

    <TextInput
      error={errors.length}
      label="Length"
      name="length"
      onChange={onChange}
      value={course.length}
    />

    <input
      className="btn btn-primary"
      disabled={saving}
      onClick={onSave}
      type="submit"
      value={saving ? 'Saving...' : 'Save'}
    />
  </form>
);

CourseForm.propTypes = {
  allAuthors: PropTypes.arrayOf(PropTypes.object).isRequired,
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    title: PropTypes.string,
    authorId: PropTypes.string,
    category: PropTypes.string,
    length: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
};

export default CourseForm;
