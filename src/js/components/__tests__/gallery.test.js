import React from 'react';
import { mount } from 'enzyme';

import { Gallery } from '../gallery';

describe('The Gallery component', () => {
  let component;

  const gallery = [
    {
      "key": "test",
      "svgURL": "test.svg",
      "name": "test name",
    },
  ];

  it('render the gallery component', () => {
    component = mount(
      <Gallery
        loadIcons={() => { return; }}
        openModal={() => { return; }}
        gallery={gallery}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('render the loading instead of the gallery component', () => {
    component = mount(
      <Gallery
        openModal={() => { return; }}
        loadIcons={() => { return; }}
      />
    );
    expect(component).toMatchSnapshot();
  });

});
