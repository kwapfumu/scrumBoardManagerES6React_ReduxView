"use strict";
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';
import getTaskIndexFctr  from '../../coolReusableFunctions/getTaskIndexFctr';

export function updateTaskPositionReducer(dragTaskState, action){
	// Only proceed if hovering over a different task
	if(action.payload.aTaskId !== action.payload.afterId){
		//finds taskIndex
	    let taskIndex = getTaskIndexFctr.getTaskIndex(action.payload.aTaskId);
		// Get the current task
		let currentTask = dragTaskState[taskIndex];
		// Find the index of the task the user is hovering over
		let afterIndex = dragTaskState.findIndex((aTask) => aTask._id == action.payload.afterId);
		// Use splice to remove the card and reinsert it a the new index
		let repositionedTasks = update(dragTaskState, { $splice: [[taskIndex, 1],[afterIndex, 0, currentTask]]}}));
	}
	return repositionedTasks;
};