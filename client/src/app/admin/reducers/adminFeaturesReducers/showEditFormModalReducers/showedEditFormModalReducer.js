"use strict";
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

/**sets the isFetching field to false and returns the taskto2edit*/
export function showedEditFormModalReducer(adminEditFormModalState, action){
	let editFormModalState = Object.assign(adminEditFormModalState,{isFetching:false, aTask2Edit:action.payload});	
	return editFormModalState;
};