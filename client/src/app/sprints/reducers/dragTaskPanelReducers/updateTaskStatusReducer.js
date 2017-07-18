"use strict";
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';
import getTaskIndexFctr  from '../../coolReusableFunctions/getTaskIndexFctr';
// Case reducer
export function updateTaskStatusReducer(dragTaskState, action){
	//finds taskIndex of this taskPanel
	let taskIndex = getTaskIndexFctr.getTaskIndex(action.payload.aTaskId);
	// Get the current task
	let currentTask = dragTaskState[taskIndex];		
	// Only proceed if hovering over a different SprintPanel
	if(currentTask.status !== action.payload.aPanelId){			 
		// replaces current task with  with new task with updated status field
		let newBacklogTasks = update(dragTaskState, {[taskIndex]: {status: { $set: action.payload.aPanelId }}});		
	};
	return newBacklogTasks;
};