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
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/courses" component={Courses} />
        <Route exact path="/course" component={ManageCoursesPage} />
        <Route path="/course/:id" component={ManageCoursesPage} />
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
