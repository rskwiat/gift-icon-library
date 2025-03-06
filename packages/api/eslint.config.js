import globals from 'globals';
import config from '../../config/eslint.config.js';

export default [
  ...config,
  {
    languageOptions: { 
      globals: globals.node 
    }
  },
];