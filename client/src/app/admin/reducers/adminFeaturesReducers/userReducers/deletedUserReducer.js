"use strict";
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';
import getUserIndexFctr from '../../../coolReusableFunctions/getUserIndexFctr';

// Case reducer
export function deletedUserReducer(usersState, action){
	//finds taskIndex of task2Edit
	let userIndex = getUserIndexFctr.getUserIndex(action.payload.aUserId2Delete);
	//Creates a new array without the user
	let newUsers = update(usersState.users, {$splice: [[userIndex,1]]});
	//updates usersState
	let newUsersState = update(usersState,{$merge:{aUserId2Delete:0, action.payload, users: newUsers}});
	return newUsersState;
};