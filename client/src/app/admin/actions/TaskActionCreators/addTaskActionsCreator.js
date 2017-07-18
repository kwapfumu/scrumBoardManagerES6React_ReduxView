"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import checkHttpErrorStatus from '../../../checkHttpErrorStatus';



/**ActionCreators are functions that create actions*/
/**createTaskActionCreator informs taskReducer that a addtask/createTask request began*/
function createTaskRequestActionCreator(aTask2Add){
	return {
		type: types.CREATE_TASK, 
		payload: aTask2Add 
	};
};

/**when the network request comes through, we will dispatch CREATE_TASK_SUCCESS*/
function createdTaskActionCreator(json) {
	return { 
		type: types.CREATE_TASK_SUCCESS, 
		payload: json.data.children.map((child) => child.data)		
	};
};

function createTaskFailedActionCreator(anError) {
	return { 
		type: types.CREATE_TASK_ERROR, 
		payload: anError 
	};
};

function addTaskActionsCreator(aTask2Add) {	
	//returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
	return (dispatch) => { 
		dispatch(this.createTaskActionCreator(aTask2Add));
		return fetch(`${api.API_URL}/admin/releaseBacklog/newTask`, {
			method: 'POST',
			headers: api.API_HEADERS,
			body: JSON.stringify(aTask2Add)
			}).then(checkHttpErrorStatus)
			  .then((response) => response.json())
			  .then((json) => dispatch(this.createdTaskActionCreator(json)))
			  .catch((error) => {
				dispatch(this.createTaskFailedActionCreator(error));
				console.log('Error fetching data', error);
			  });	
	};
};


export {addTaskActionsCreator};