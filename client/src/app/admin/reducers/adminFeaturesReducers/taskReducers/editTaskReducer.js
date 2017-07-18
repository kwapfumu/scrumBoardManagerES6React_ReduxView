import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

// Case reducer
//returns task2Edit
function getTask2Edit(aTaskId){
	task
};
export function editTaskReducer(tasksState, action){
	//finds taskIndex of task2Edit
	let taskIndex = this.getTaskIndex(action.aTaskId);
	//creates a new Array with the editedTask replaced
	let newBacklogTasks = update(tasksState, {[taskIndex]: { $set: action.payload }});			
	return newBacklogTasks;
};