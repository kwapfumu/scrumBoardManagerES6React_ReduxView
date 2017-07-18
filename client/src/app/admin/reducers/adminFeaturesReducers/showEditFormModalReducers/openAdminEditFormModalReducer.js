"use strict";
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';
/**sets the isFetching field to true*/
export function openAdminEditFormModalReducer(adminEditFormModalState, action){
	let editFormModalState = update(adminEditFormModalState,{isFetching:{$set:{true}}});
	return editFormModalState;
};