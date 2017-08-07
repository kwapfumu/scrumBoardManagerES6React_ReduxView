"use strict";
import {openAdminEditFormModalReducer} from './openAdminEditFormModalReducer';
import {showedEditFormModalReducer} from './showedEditFormModalReducer';
import {showEditFormModalFailedReducer} from './showEditFormModalFailedReducer';

/**slice reducer: a reducer that is being used to handle updates to one specific slice of the state tree*/
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