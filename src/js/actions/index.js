import {
  LOAD_ICONS,
} from './types';

export const loadIcons = () => async (dispatch) => {
  const res = await fetch('/api/b', { method: 'GET' });
  const data = await res.json();

  dispatch({
    type: LOAD_ICONS,
    payload: data,
  });
};
