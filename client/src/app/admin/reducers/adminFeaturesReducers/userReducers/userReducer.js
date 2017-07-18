"use strict";
import {addUserReducer} from './addUserReducer';
import {addedUserReducer} from './addedUserReducer';
import {addUserFailedReducer} from './addUserFailedReducer';
import {editUserReducer} from './editUserReducer';
import {editedUserReducer} from './editedUserReducer';
import {editUserFailedReducer} from './editUserFailedReducer';
import {deleteUserReducer} from './deleteUserReducer';
import {deletedUserReducer} from './deletedUserReducer';
import {deleteUserFailedReducer} from './deleteUserFailedReducer';

/**slice reducer: a reducer that is being used to handle updates to one specific slice of the state tree*/
/**a reducer is a pure function. It only computes the next state. It should be completely predictable: 
calling it with the same inputs many times should produce the same outputs. It shouldn't perform any 
side effects like API calls or router transitions. These should happen before an action is dispatched.*/
export function userReducer(usersState = { 
	aUserId2Edit:0,
	aUserId2Delete:0,
	isSaving: false,
	users: users
	}, action) {
	switch(action.type) {
		case 'CREATE_USER': return addUserReducer(usersState, action);
		case 'CREATE_USER_SUCCESS': return addedUserReducer(usersState, action);
		case 'CREATE_USER_ERROR': return addUserFailedReducer(usersState, action);		
		case 'UPDATE_USER': return editUserReducer(usersState, action);
		case 'UPDATE_USER_SUCCESS': return editedUserReducer(usersState, action);
		case 'UPDATE_USER_ERROR': return editUserFailedReducer(usersState, action);		
		case 'DELETE_USER': return deleteUserReducer(usersState, action);
		case 'DELETE_USER_SUCCESS': return deletedUserReducer(usersState, action);
		case 'DELETE_USER_ERROR': return deleteUserFailedReducer(usersState, action);		
		default: return usersState;
	},
};