import React from 'react';
// import '../css/style.css';
// import '../css/materialize.css';
import Nav from "./Nav.jsx";
import TodoInput from "./TodoInput.jsx"
import TodoItem from "./TodoItem.jsx"
class Todo extends React.Component{
	render(){
		return(
			<div className="todo">
				<Nav></Nav>
				<TodoInput/>
				<TodoItem/>
			</div>

		);
	}
}
export default Todo;
