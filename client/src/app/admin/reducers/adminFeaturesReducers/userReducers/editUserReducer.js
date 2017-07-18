import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

// Case reducer
export function editUser(usersState, action){
	//finds taskIndex of task2Edit
	let userIndex = this.getUserIndex(action.aUserId);
	//creates a new Array with the editedTask replaced
	let newUsers = update(usersState, {[userIndex]: { $set: action.payload }});			
	return newUsers;
};