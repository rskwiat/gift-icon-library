import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

describe('The App component', () => {
  let component;

  it.skip('should render with no props', () => {
    component = mount(<App />);
    expect(component).toMatchSnapshot();
  });
});
