import React from 'react';
import { mount } from 'enzyme';

import Icon from '../icon';

describe('The icon component', () => {
  let component;

  it('should render with no props', () => {
    component = mount(<Icon />);
    expect(component).toMatchSnapshot();
  });

  it('should render with props', () => {
    component = mount(<Icon name="test name" svg="/path/to/svg" />);
    expect(component).toMatchSnapshot();
  });

});
