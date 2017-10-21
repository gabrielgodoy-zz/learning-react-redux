import React, { PropTypes } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import MainHeader from '../components/MainHeader/MainHeader';
import MainNavigation from '../components/MainNavigation/MainNavigation';
import Home from '../containers/Home/Home';
import About from '../containers/About/About';
import Topics from '../containers/Topics/Topics';
import Courses from '../containers/Courses/Courses';
import ManageCoursesPage from '../containers/ManageCourses/ManageCourses';

const AppContainer = ({ loading }) => (
  <BrowserRouter>
    <div>
      <MainHeader title="This is the header" />
      <div styleName="container">
        <MainNavigation loading={loading} />
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Topics} path="/topics" />
        <Route component={Courses} path="/courses" />
        <Route component={ManageCoursesPage} exact path="/course" />
        <Route component={ManageCoursesPage} path="/course/:id" />
      </div>
    </div>
  </BrowserRouter>
);

AppContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(AppContainer);
