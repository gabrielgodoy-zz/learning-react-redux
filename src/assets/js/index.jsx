import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// AppContainer é um wrapper necessário para o HMR funcionar
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import { loadCourses } from './containers/Courses/CoursesActions';
import { loadAuthors } from './containers/ManageCourses/ManageCoursesActions';

import '../../../node_modules/toastr/build/toastr.css';
import '../styles/main.scss';
import '../styles/teste.css';
import App from './App/App';

const store = configureStore();
store.dispatch(loadCourses()); // Busca lista inicial de cursos
store.dispatch(loadAuthors()); // Busca lista inicial de autores

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  )
  ;
};

render(App);
if (module.hot) {
  module.hot.accept('./App/App', () => render(App));
}
