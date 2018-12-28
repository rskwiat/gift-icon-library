import React from 'react';
import { mount } from 'enzyme';

// import Header from './header';
// import Gallery from './gallery';
// import Modal from './modal';

const Header = jest.fn();

import App from '../App';

describe('The App component', () => {
  let component;

  it('should render with no props', () => {
    component = mount(<App />);
    expect(component).toMatchSnapshot();
  });
});