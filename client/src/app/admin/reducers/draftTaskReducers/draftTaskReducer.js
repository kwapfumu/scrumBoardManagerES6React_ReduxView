"use strict";
import constants from '../constants';
import update from 'react-addons-update';
	
let defaultDraft = () => {
	return {
		id: Date.now(),
		projectName: '',
		tasktName: '',
		taskDescription: '',
		storyPoints: 0,								
		developer: ''
		status: 'todo',
		sprintNumber: 0;
		sprintInfo:{
			startDate: Date.now(),
			endDate: Date.now()
		}		
	};
};

export function draftTaskReducer(draftTaskState = defaultDraft, action){
	switch (action.type) {
		case 'CREATE_DRAFT_TASK':
			/**check if a task object was passed as payload. This is the case where an existing task is being edited; 
			the task properties are then copied and set as the draftTask state. If no task is passed as parameter 
			(which is the case when the user is creating a new task), the defaultDraft method is invoked to create a default 
			empty task that is set as the store state.*/
			if(action.payload.aTask){
				return update(draftTaskState, {$set: action.payload.aTask});
			} else {
				return defaultDraft();
			};
			/**The UPDATE_DRAFT action passes two payloads: the field that the user edited, and its new value. In this case, 
			the new value is set in the corresponing property of the draft task in the store’s state*/
		case 'UPDATE_DRAFT_TASK':return update(draftTaskState, {[action.payload.field]: {$set: action.payload.value}});
		default: return draftTaskState;
	};
};

