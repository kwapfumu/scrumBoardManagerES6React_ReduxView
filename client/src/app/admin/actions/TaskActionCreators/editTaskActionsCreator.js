"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';

/**ActionCreators are functions that create actions*/
/**Redux Thunk middleware allows you to write action creators that return a function instead of 
an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a 
certain condition is met. The inner function receives the store methods 'dispatch' and 'getState'
as parameters.*/

	
function updateTaskActionCreator(aTaskId){
	return {
		type: types.UPDATE_TASK,		
		payload: aTaskId
	};
},

function updatedTaskActionCreator(aTaskId,savedEditedTask){
	return {
		type: types.UPDATE_TASK_SUCCESS,
		aTaskId: aTaskId,
		payload: savedEditedTask
	};
},
function updateTaskFailedActionCreator(error){
	return {
		type: types.UPDATE_TASK_ERROR, 
		payload: error
	};
},

function editTaskActionsCreator(aTaskId, anEditedTask) {
	return (dispatch) => {
		return fetch(`${api.API_URL}/admin/releaseBacklog/:${aTaskId}/edit`, {
			method: 'PUT',
			headers: api.API_HEADERS,
			body: JSON.stringify(anEditedTask)
		}).then(checkHttpErrorStatus)
		   .then((response) => response.json())
		   .then((json) => dispatch(this.updatedTaskActionCreator(aTaskId,json)))
		   .catch((error) => {
				dispatch(updateTaskFailedActionCreator(error));
					console.log('Error editing task', error);
			});	
	};
};

export {editTaskActionsCreator, updateTaskActionCreator};