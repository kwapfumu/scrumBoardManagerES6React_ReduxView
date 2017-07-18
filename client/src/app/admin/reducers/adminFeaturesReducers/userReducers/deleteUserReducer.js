"use strict";
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';
import getUserIndexFctr from '../../../coolReusableFunctions/getUserIndexFctr';

// Case reducer
export function deleteUserReducer(usersState, action){
	//updates usersState => {aUserId2Delete: aUserId,isSaving:true}
	let newUsersState = update(usersState,{$merge:{action.payload}});
	return newUsersState;
};