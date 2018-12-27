import { combineReducers } from 'redux';
import galleryReducer from './galleryReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  gallery: galleryReducer,
  modal: modalReducer,
});

export default rootReducer;
