import React from 'react';
import { shallow } from 'enzyme';
import Notifications from '../../../task_2/dashboard/src/Notifications';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('renders three list items', () => {
    expect(wrapper.find('li').length).toBe(3);
  });

  test('renders the notification text', () => {
    expect(wrapper.contains(<p>Here is a list of notifications</p>)).toBeTruthy();
  });
});
