import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const TodoList: FC = () => {
	const state = useTypedSelector(state => state.todo)
	const {fetchTodos, setTodoPage} = useActions()
	const pages = [1, 2, 3, 4, 5]
	
	useEffect(() => {
		fetchTodos(state.page, state.limit)
	}, [state.page])
	
	if (state.loading) return <h1>Идёт загрузка...</h1>
	if (state.error) return <h1>Произошла ошибка: {state.error}</h1>
	
	return (
		<div>
			{state.todos.map(todo =>
				<div key={todo.id}>
					<p>{todo.id}. - {todo.title}</p>
				</div>
			)}
			<div style={{ display: 'flex'}}>
				{pages.map((item, index) =>
					<div
						key={index}
						onClick={() => setTodoPage(item)}
						style={{
							cursor: 'pointer',
							border: item === state.page ? '2px solid green' : '1px solid gray',
							padding: 10
						}}
					>
						{item}
					</div>
				)}
			</div>
		</div>
	);
};

export default TodoList;
