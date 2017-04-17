import React from 'react';
import expect from 'expect'; // eslint-disable-line
import { mount, shallow } from 'enzyme'; // eslint-disable-line
import { ManageCourses } from './ManageCourses'; // not importing the connected() component

// Mount is different than shallow
// Shallow only renders one layer deep
// Here we need to test this component interactions with its child components
// Mount is needed to be used so a full DOM is created im memory
// Behind the scenes Enzyme is using JSDOM to create a virtual in-memory DOM

describe('Manage Course Page', () => {
  it('Sets error message when trying to save empty title', () => {
    const props = {
      // mapDispatchToPops would expose prop 'action' on the real component
      actions: { saveCourse() { return Promise.resolve(); } }, // mocking saveCourse with a noop
      history: { push() { return Promise.resolve(); } },
      course: { // Empty course
        id: '',
        title: '',
        watchRef: '',
        authorId: '',
        length: '',
        category: '',
      },
      authors: [], // mapStateToPops is handling this in the real component
    };
    const wrapper = mount(<ManageCourses {...props} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit'); // The last input is the submit button
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
