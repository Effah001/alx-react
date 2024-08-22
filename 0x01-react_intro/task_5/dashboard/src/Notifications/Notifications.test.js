import React from "react";
import { shallow } from 'enzyme';
import Notifications from "./Notifications";

describe('<Notifications />', () => {
    it('renders <Notificatios /> without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('verify that <Notifications /> renders three list items', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('li')).toHaveLength(3);
    });

    it('verify that <Notifications /> renders the text ...', () => {
        const notifications = shallow(<Notifications />);
        const text = notifications.find('p').text();
        expect(text).toEqual('Here is the list of notifications');
    });
});
