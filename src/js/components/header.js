const styles = require('@scss/main.scss');

import React from 'react';
import Proptypes from 'prop-types';

const Header = ({ name, subhead }) => (
  <header className={styles['header']}>
    <div className="container">
      <h1><span>{name}</span> {subhead}</h1>
    </div>
  </header>
);

Header.propTypes = {
  name: Proptypes.string,
  subhead: Proptypes.string,
};

export default Header;
