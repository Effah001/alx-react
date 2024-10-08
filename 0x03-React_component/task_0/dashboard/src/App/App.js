import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils';

class App extends Component {
  
  state = {
    listCourses: [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ],
    listNotifications: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ],
  };

  render() {
    const { isLoggedIn } = this.props;
    const { listCourses, listNotifications } = this.state;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className='App'>
          <Header />
          <div className='App-body'>
            {isLoggedIn ? (
              <CourseList listCourses={listCourses} />
            ) : (
              <Login />
            )}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
