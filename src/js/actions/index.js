import {
  LOAD_ICONS,
  OPEN_MODAL,
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
