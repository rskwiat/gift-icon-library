import React from 'react';
import { mount } from 'enzyme';

import Loading from '../loading';

describe('The loading component', () => {
  let component;
  it('should render', () => {
    component = mount(<Loading />);
    expect(component).toMatchSnapshot();
  });
});
