"use strict";
import {fetchTasksRequestReducer} from './fetchTasksRequestReducer';
import {fetchTasksSuccessReducer} from './fetchTasksSuccessReducer';
import {fetchTasksErrorReducer} from './fetchTasksErrorReducer';

/**slice reducer: a reducer that is being used to handle updates to one specific slice of the state tree*/
export function fetchTasksReducer(fetchTasksState = {
	isFetching: false,
	didInvalidate: false,
	backlogTasks: []
	}, action) {
	switch(action.type) {
		case 'FETCH_TASKS': return fetchTasksRequestReducer(fetchTasksState, action);
		case 'FETCH_TASKS_SUCCESS': return fetchTasksSuccessReducer(fetchTasksState, action);
		case 'FETCH_TASKS_ERROR': return fetchTasksErrorReducer(fetchTasksState, action);
		default : return fetchTasksState;
	},
};