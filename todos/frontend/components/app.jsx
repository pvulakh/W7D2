import React from 'react';
import ToDoListContainer from './todos/todo_list_container';
class App extends React.Component {

    render() {
        return (
            <>
                <h1>Todos App</h1>
                <ToDoListContainer />
            </>
        );
    }

}
export default App;