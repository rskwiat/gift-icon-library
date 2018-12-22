import { combineReducers } from 'redux';
import galleryReducer from './galleryReducer';

const rootReducer = combineReducers({
  gallery: galleryReducer,
});

export default rootReducer;
