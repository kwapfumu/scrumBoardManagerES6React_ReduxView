"use strict";
import {addTaskReducer} from './addTaskReducer';
import {addedTaskReducer} from './addedTaskReducer';
import {addTaskFailedReducer} from './addTaskFailedReducer';
import {editTaskReducer} from './editTaskReducer';
import {editedTaskReducer} from './editedTaskReducer';
import {editTaskFailedReducer} from './editTaskFailedReducer';
import {deleteTaskReducer} from './deleteTaskReducer';
import {deletedTaskReducer} from './deletedTaskReducer';
import {deleteTaskFailedReducer} from './deleteTaskFailedReducer';

/**slice reducer: a reducer that is being used to handle updates to one specific slice of the state tree*/
/**a reducer is a pure function. It only computes the next state. It should be completely predictable: 
calling it with the same inputs many times should produce the same outputs. It shouldn't perform any 
side effects like API calls or router transitions. These should happen before an action is dispatched.*/
export function taskReducer(tasksState = { 
	isSaving: false,
	backlogTasks: backlogTasks
	}, action) {
	switch(action.type) {
		case 'CREATE_TASK': return addTaskReducer(tasksState, action);
		case 'CREATE_TASK_SUCCESS': return addedTaskReducer(tasksState, action);
		case 'CREATE_TASK_ERROR': return addTaskFailedReducer(tasksState, action);		
		case 'UPDATE_TASK': return editTaskReducer(tasksState, action);
		case 'UPDATE_TASK_SUCCESS': return editedTaskReducer(tasksState, action);
		case 'UPDATE_TASK_ERROR': return editTaskFailedReducer(tasksState, action);		
		case 'DELETE_TASK': return deleteTaskReducer(tasksState, action);
		case 'DELETE_TASK_SUCCESS': return deletedTaskReducer(tasksState, action);
		case 'DELETE_TASK_ERROR': return deleteTaskFailedReducer(tasksState, action);		
		default : return tasksState;
	},
};