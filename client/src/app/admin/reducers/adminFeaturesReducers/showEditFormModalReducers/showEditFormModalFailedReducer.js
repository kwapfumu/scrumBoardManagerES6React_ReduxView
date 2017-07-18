"use strict";
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

/**sets the isFetching field to false and returns the taskto2edit*/
export function showEditFormModalFailedReducer(adminEditFormModalState, action){
	let editFormModalState = update(adminEditFormModalState,{isFetching:{$set:{false}}});
	return editFormModalState;
};