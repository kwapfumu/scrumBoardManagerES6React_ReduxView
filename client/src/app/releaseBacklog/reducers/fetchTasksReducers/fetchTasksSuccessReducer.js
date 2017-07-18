import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

// Case reducer
export function fetchTasksSuccessReducer(fetchTasksState, action) {
	//sets isFetching: false,backlogTasks: to received array
	let newFetchTasksState = update(fetchTasksState,{$merge:{action.payload}});	
	return newFetchTasksState;
};
