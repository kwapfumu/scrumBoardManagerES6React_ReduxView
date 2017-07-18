"use strict";
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

// Case reducer
export function deleteUserFailedReducer(usersState, action){
	//updates usersState
	let newUsersState = update(usersState,{$merge: action.payload});
	return newUsersState;
};