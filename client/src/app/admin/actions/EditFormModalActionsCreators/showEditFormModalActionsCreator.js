"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../fetchResponseHandlerFctr';

function openAdminEditFormModalActionCreator(aTaskId){ 
	return{
		type: types.SHOW_EDIT_FORM_MODAL,
		payload:aTaskId
	};
};

function openedAdminEditFormModalActionCreator(json){ 
	return{
		type: types.SHOW_EDIT_FORM_MODAL_SUCCESS,
		payload: json
	};
};

function openAdminEditFormModalFailedActionCreator(anError){ 
	return{
		type: types.SHOW_EDIT_FORM_MODAL_ERROR,
		payload:anError
	};
};

function showEditFormModalActionsCreator(aTaskId){
	return (dispatch) => { 
		dispatch(openAdminEditFormModalActionCreator(aTaskId));
		return fetch(`${api.API_URL}/admin/releaseBacklog/${aTaskId}`, {headers:api.API_HEADERS})
				.then(fetchResponseHandlerFctr.checkHttpErrorStatus)
				.then((response) => response.json())
				.then((json) => dispatch(openedAdminEditFormModalActionCreator(json)))
				.catch((error) => {
					dispatch(openAdminEditFormModalFailedActionCreator(error));
					console.log('Error fetching data', error);
				});	
	};
};

export {showEditFormModalActionsCreator};