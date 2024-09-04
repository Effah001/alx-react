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

    // Initialize the state with listCourses and listNotifications
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
    };
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
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { listCourses, listNotifications } = this.state;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.app)}>
          <Header />
          <div className='App-body'>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
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

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,  // logOut should be a function
}

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {},  // Default logOut is an empty function
}

export default App;