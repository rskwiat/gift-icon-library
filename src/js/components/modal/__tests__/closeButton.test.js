import React from 'react';
import { mount } from 'enzyme';

import CloseButton from '../closeButton';

describe('The Close Button component', () => {
  let component;

  it('should render with no props', () => {
    component = mount(<CloseButton />);
    expect(component).toMatchSnapshot();
  });

  it('should render with props', () => {
    component = mount(<CloseButton onClick={() => { return; }} />);
    expect(component).toMatchSnapshot();
  });

});
