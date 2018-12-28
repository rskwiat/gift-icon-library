import {
  LOAD_ICONS,
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case LOAD_ICONS:
      return action.payload;
    default:
      return state;
  }
};
