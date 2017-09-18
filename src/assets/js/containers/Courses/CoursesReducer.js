import initialState from '../../initialState';
import * as types from './CoursesConstants';

export default function coursesReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses; // Retorna objetos da API

    case types.CREATE_COURSES_SUCCESS:
      return [ // Estado aqui é imutável
        // Fatia da Store, array de cursos
        ...state, // Cria um novo array
        Object.assign({}, action.course), // Cria uma nova cópia com Object.assign
      ];

    case types.UPDATE_COURSES_SUCCESS:
      return [ // Estado aqui é imutável
        // Filtra o curso que queremos atualizar
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course), // Curso sendo atualizado
      ];

    default:
      return state;
  }
}
