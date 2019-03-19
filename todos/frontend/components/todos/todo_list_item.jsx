import React from 'react';

class ToDoListItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            done: this.props.todo.done
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }


    deleteTodo(){
        this.props.removeTodo(this.state.todo);
    }

    toggleDone(){
        this.state.done ? this.setState({ done: false}) : this.setState({ done: true });
    }

    render() {
        return (
            <>
            <li>{this.props.todo.title} : {this.props.todo.body}</li>
            <button onClick={this.deleteTodo}>DELETE</button>
            <button onClick={this.toggleDone}>{this.state.done ? "Not Done" : "Done"}</button>
            </>
        );
    }
}

export default ToDoListItem;