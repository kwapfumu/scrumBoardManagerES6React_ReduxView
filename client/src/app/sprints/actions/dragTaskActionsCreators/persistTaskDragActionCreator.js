"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import {throttle} from '../../utils';
import Store from '../../Store';

function persistTaskDragRequestActionCreator(){
	return {
		type: types.PERSIST_TASK_DRAG, 
		payload: {
			isSavingDraggedTask: true,
		}
	};
};
function persistedTaskActionCreator(){
	return {
		type: types.PERSIST_TASK_DRAG_SUCCESS,
		payload: {
			isSavingDraggedTask: false,			
		}
	};
},

function persistTaskFailedActionCreator(){
	return {
		type: types.PERSIST_TASK_DRAG_ERROR, 
		payload: {
			isSavingDraggedTask: false,
		}
	};
},
/*Receives an object containing a given taskId and the new tassk status. Called after a task’s drag-and-drop. 
Persists the new task’s position and status on the server*/
export function persistTaskDragActionCreator(aTaskId, aTaskStatus) {
	dispatch(this.persistTaskDragRequestActionCreator());
	return (dispatch) => {
		return fetch(`${api.API_URL}/releaseBacklog/currentSprint/:${aTaskId}/edit`, {
			method: 'PUT',
			headers: api.API_HEADERS,
			body: JSON.stringify({id: aTaskId, status:aTaskStatus})
		}).then(checkHttpErrorStatus)
		  .then((response) => response.json())
		  .then(dispatch(this.persistedTaskActionCreator())
		  .catch((error) => {
				dispatch(this.persistTaskFailedActionCreator());
					console.log('Error editing task', error);
			});	
	};
};
