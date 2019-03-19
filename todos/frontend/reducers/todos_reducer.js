import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, fetchTodos } from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TODOS: {
            const newTodos = {};
            action.todos.forEach( (todo) => {
                newTodos[todo.id] = todo;
            });
            const newState = merge({}, newTodos);
            return newState;

        }
        case RECEIVE_TODO: {
            const { id, title, body, done } = action.todo;
            const todo = {
                [id]: {id, title, body, done}
            };
            const newState = merge({}, state, todo);
            return newState;
        }
        case REMOVE_TODO: {
            const nextState = merge({}, state);
            delete nextState[action.todo.id];
            return nextState;
        }
        default:
            return state;
    }
};

export default todosReducer;