import { shallow } from 'enzyme';
import App from './App';

test('renders the App component without crashing', () => {
  shallow(<App />);
});

test('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').length).toBe(1);
});

test('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').length).toBe(1);
});

test('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').length).toBe(1);
});