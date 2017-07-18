"use strict";
import {openAdminEditFormModalReducer} from './openAdminEditFormModalReducer';
import {showedEditFormModalReducer} from './showedEditFormModalReducer';
import {showEditFormModalFailedReducer} from './showEditFormModalFailedReducer';

/**slice reducer: a reducer that is being used to handle updates to one specific slice of the state tree*/
/**a reducer is a pure function. It only computes the next state. It should be completely predictable: 
calling it with the same inputs many times should produce the same outputs. It shouldn't perform any 
side effects like API calls or router transitions. These should happen before an action is dispatched.*/
export function showEditFormModalReducer(adminEditFormModalState = { 
	isFetching: false,
	aTask2Edit: {}
	}, action) {
	switch(action.type) {
		case 'SHOW_EDIT_FORM_MODAL': return openAdminEditFormModalReducer(adminEditFormModalState, action);
		case 'SHOW_EDIT_FORM_MODAL_SUCCESS': return showedEditFormModalReducer(adminEditFormModalState, action);
		case 'SHOW_EDIT_FORM_MODAL_ERROR': return showEditFormModalFailedReducer(adminEditFormModalState, action);					
		default : return adminEditFormModalState;
	},
};