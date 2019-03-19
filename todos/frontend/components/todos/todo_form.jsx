import React from 'react';
// import util from '../../util/util';

class ToDoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
        };
        this.updateForm  = this.updateForm.bind(this);
        this.makeTodo = this.makeTodo.bind(this);
    }

    updateForm(event) {
        this.setState({[event.currentTarget.id]: event.currentTarget.value});
    }

    makeTodo() {
        const todo = {
            title: this.state.title,
            body: this.state.body,
            done: false
        };
        this.props.createTodo(todo).then(() => this.setState({title: "", body: ""})); 
        // (errors) => this.props.receiveErrors(errors) 
       
    }

    render() {
        // const errors = typeof this.props.errors == 'undefined' ? "" : this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)
        return (
            <>
            <ul>
                <li>{this.props.errors}</li>
            </ul>
            {/* {errors} */}
            <form action="#" method="#">
            <label htmlFor="title">Title</label>
            <input onChange={this.updateForm} type="text" name="todo_title" id="title" value={this.state.title}/>
            <label htmlFor="body">Body</label>
            <input onChange={this.updateForm} type="text" name="todo_body" id="body" value={this.state.body}/>
            <input onClick={this.makeTodo} type="submit" value="Add To-Do" /> 
            </form>
            </>
        );
    }


}

export default ToDoForm;