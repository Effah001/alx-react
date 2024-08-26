import './App.css';
import Header  from '../Header/Header';
import Login from '../Login/Login';
import Footer  from '../Footer/Footer';
import Notifications from '../Notifications';

function App() {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <div className='App-body'>
          <Login />
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>

  );
}

export default App;