import { connect } from 'react-redux';
import ToDoList from './todo_list';
import { receiveTodo, removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import { receiveErrors } from '../../actions/error_actions';
import {allToDos, allErrors} from '../../reducers/selectors';



const mapStateToProps = state => ({
    todos: allToDos(state),
    errors: allErrors(state)
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    fetchTodos: (todos) => dispatch(fetchTodos(todos)),
    createTodo: (todo) => dispatch(createTodo(todo)),
    receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);