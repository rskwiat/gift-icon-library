import React from 'react';
import { mount } from 'enzyme';

import { Modal } from '../index';

describe('The Modal component', () => {
  let component;

  const gallery = {
    "key": "test",
    "svgURL": "test.svg",
    "name": "test name",
  };

  it('render the gallery component', () => {
    component = mount(
      <Modal
        closeModal={() => { return; }}
        modal={gallery}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('render the loading instead of the gallery component', () => {
    component = mount(
      <Modal
        closeModal={() => { return; }}
      />
    );
    expect(component).toMatchSnapshot();
  });

});
