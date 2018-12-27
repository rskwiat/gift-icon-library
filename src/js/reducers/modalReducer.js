import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return state;
    default:
      return state;
  }
};
