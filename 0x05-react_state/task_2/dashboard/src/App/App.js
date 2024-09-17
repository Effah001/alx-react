import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { defaultUser } from './AppContext';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    // Bind the handleKeyDown method to 'this'
    this.handleKeyDown = this.handleKeyDown.bind(this);

    // Initialize the state
    this.state = {
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
      displayDrawer: false,
      user: defaultUser,
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // Add event listener when component is mounted
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  // Remove event listener when component is unmounted
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  // Method to handle key down events
  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    });
  }

  logIn = (email, password) => {
    this.setState({ user: {
      email: email,
      password: password,
      isLoggedIn: true
    }});
  }

  render() {
    const { listCourses, listNotifications, user } = this.state;
    const { displayDrawer } = this.state;

    return (
      <>
        <Notifications 
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.app)}>
          <Header />
          <div className='App-body'>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Here is some random news from the school. Stay tuned for more updates!</p>
            </BodySection>
          </div>
            <Footer />
        </div>
      </>
    );
  }
}

export default App;