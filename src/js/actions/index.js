import {
  LOAD_ICONS,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './types';

export const loadIcons = () => async (dispatch) => {
  const res = await fetch('/api', { method: 'GET' });
  const data = await res.json();

  dispatch({
    type: LOAD_ICONS,
    payload: data,
  });
};

export const openModal = (props) => {
  return (dispatch) => {
    dispatch({
      type: OPEN_MODAL,
      payload: props,
    });
  };
};

export const closeModal = () => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_MODAL,
      payload: null,
    });
  };
};
