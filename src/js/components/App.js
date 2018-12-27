import React from 'react';
import Header from './header';
import Gallery from './gallery';
import Modal from './modal';

const App = () => (
  <div>
    <Header
      name="Publisher Gift"
      subhead="Icons"
    />
    <Gallery />
    <Modal />
  </div>
);

export default App;
