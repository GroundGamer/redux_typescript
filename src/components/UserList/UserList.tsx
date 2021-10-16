import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const UserList: FC = () => {
	const state = useTypedSelector(state => state.user);
	const {fetchUsers} = useActions()
	
	console.log(state)
	
	useEffect(() => {
		fetchUsers()
	}, [])
	
	if(state.loading) return <h1>Идёт загрузка...</h1>
	if(state.error) return <h1>Произошла ошибка: {state.error}</h1>
	
	return (
		<div>
			{state.users.map(user =>
				<div key={user.id} style={{borderBottom: '1px dashed grey'}}>
					<p>Name: {user.name}</p>
					<p>Email: {user.email}</p>
				</div>
			)}
		</div>
	);
};

export default UserList;
