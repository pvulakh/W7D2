import todosReducer from './todos_reducer';
import errorReducer from './error_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    todos: todosReducer,
    errors: errorReducer
});