import React from 'react';
import { mount } from 'enzyme';

import Header from '../header';

describe('The header component', () => {
  let component;

  it('should render with no props', () => {
    component = mount(<Header />);
    expect(component).toMatchSnapshot();
  });

  it('should render with props', () => {
    component = mount(
      <Header
        name="Headline"
        subhead="Test Subhead"
      />
    );
    expect(component).toMatchSnapshot();
  });



});