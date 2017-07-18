"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';

/**ActionCreators are functions that create actions*/
/**Redux Thunk middleware allows you to write action creators that return a function instead of 
an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a 
certain condition is met. The inner function receives the store methods 'dispatch' and 'getState'
as parameters.*/
function deletedTaskActionCreator(json){
	return {
		type: types.DELETE_TASK_SUCCESS,
		payload: json		
	};
},
function deleteTaskFailedActionCreator(anError){
	return {
		type: types.DELETE_TASK_ERROR, 
		payload: anError
	};
},
function deleteTaskActionsCreator(aTaskId) {
	return (dispatch) => {
		return fetch(`${api.API_URL}/admin/releaseBacklog/:${aTaskId}/deleteTask`, {
			method: 'DELETE',
			headers: api.API_HEADERS
		}).then(checkHttpErrorStatus)
		  .then((response) => response.json())
		  .then((json) => dispatch(this.deletedTaskActionCreator(json)))
		  .catch((error) => {
			dispatch(deleteTaskFailedActionCreator(error));
					console.log('Error deleting task', error);
		  });	
	};
	
};
export {deleteTaskActionsCreator};