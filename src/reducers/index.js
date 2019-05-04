import { combinedReducers, combineReducers } from 'redux';
import todo from './todos';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;