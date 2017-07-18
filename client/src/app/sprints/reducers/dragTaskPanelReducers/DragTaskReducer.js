"use strict";
import {updateTaskStatusReducer} from './updateTaskStatusReducer';
import {updateTaskPositionReducer} from './updateTaskPositionReducer';
import {persistTaskDragReducer} from './persistTaskDragReducer';
import {persistedTaskDragReducer} from './persistedTaskDragReducer';
import {persistTaskFailedDragReducer} from './persistTaskFailedDragReducer';

/**slice reducer: a reducer that is being used to handle updates to one specific slice of the state tree*/

export function DragTaskReducer(dragTaskState = {
	isSavingDraggedTask: false,
	backlogTasks: backlogTasks
}, action) {
	switch(action.type) {
		case 'UPDATE_TASK_STATUS': return updateTaskStatusReducer(dragTaskState, action);
		case 'UPDATE_TASK_POSITION': return updateTaskPositionReducer(dragTaskState, action);
		case 'PERSIST_TASK_DRAG': return persistTaskDragReducer(dragTaskState, action);
		case 'PERSIST_TASK_DRAG_SUCCESS': return persistedTaskDragReducer(dragTaskState, action);
		case 'PERSIST_TASK_DRAG_ERROR': return persistTaskFailedDragReducer(dragTaskState, action);
		default : return dragTaskState;
	},
};