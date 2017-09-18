import React from 'react';
import expect from 'expect'; // eslint-disable-line
import { mount, shallow } from 'enzyme'; // eslint-disable-line
import { ManageCourses } from './ManageCourses'; // Sem importar o componente conectado com connect()

// "mount" é diferente do "shallow"
// Shallow apenas renderiza um componente com uma camada de profundidade
// Aqui precisamos testar as interações desse componente com seus filhos
// "mount" é necessário ser usado para que um DOM completo seja criado na memória
// Por baixo dos panos o Enzyme está usando o JSDOM para criar um DOM virtual na memória
describe('Manage Course Page', () => {
  it('Sets error message when trying to save empty title', () => {
    const props = {
      // mapDispatchToPops expões a prop 'action' no componente real
      actions: { saveCourse() { return Promise.resolve(); } }, // mockando saveCourse com um noop
      history: { push() { return Promise.resolve(); } },
      course: { // Empty course
        id: '',
        title: '',
        watchRef: '',
        authorId: '',
        length: '',
        category: '',
      },
      authors: [], // mapStateToPops está lidando com essa prop no componente real
    };
    const wrapper = mount(<ManageCourses {...props} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit'); // O último input é o submit
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
