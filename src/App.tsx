import React from 'react';
import UserList from "./components/UserList/UserList";
import TodoList from "./components/TodoList/TodoList";

function App() {
	return (
		<div className="wrapper">
			<UserList/>
			<TodoList/>
		</div>
	);
}

export default App;
