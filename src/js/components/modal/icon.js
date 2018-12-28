const styles = require('@scss/main.scss');

import React from 'react';
import Proptypes from 'prop-types';

const Icon = ({ name, svg }) => (
  <div className={styles['icon']}>
    <h4>{name}</h4>
    <img src={svg} alt={name} />
    <pre>{svg}</pre>
  </div>
);

Icon.propTypes = {
  name: Proptypes.string,
  svg: Proptypes.string,
};


export default Icon;
