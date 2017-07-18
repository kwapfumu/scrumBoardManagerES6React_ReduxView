import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

// Case reducer
export function addUserReducer(usersState, action) {
	// Creates a new user with the newUser
	let newUser = Object.assign({}, action.payload);
	//creates a new Array with the newUser added
	let newUsers = update(usersState, {$push:[newUser]});			
	return newUsers;
};