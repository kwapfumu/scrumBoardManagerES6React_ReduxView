import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

// Case reducer
export function deleteTask(tasksState, action){
	//finds taskIndex of task2Edit
	let taskIndex = this.getTaskIndex(action.aTaskId);
	//Creates a new array without the task
	let newBacklogTasks = update(usersState, {$splice: [[taskIndex,1]]});
	return newBacklogTasks;
};