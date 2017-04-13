import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme'; // eslint-disable-line
import CourseForm from './CourseForm';

function setup(saving) {
  const props = {
    course: {
      id: '',
      title: '',
      watchHref: '',
      authorId: '',
      length: '',
      category: '',
    },
    allAuthors: [],
    saving,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };
  return shallow(<CourseForm {...props} />);
}

describe('Course Form', () => {
  it('Renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('Save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('Save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
