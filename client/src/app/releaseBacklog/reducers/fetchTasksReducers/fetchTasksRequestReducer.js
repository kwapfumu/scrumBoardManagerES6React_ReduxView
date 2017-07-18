import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

// Case reducer
export function fetchTasksRequestReducer(fetchTasksState, action) {
	//sets isFetching: true,didInvalidate: false
	let newFetchTasksState = update(fetchTasksState,{$merge:{action.payload}});	
	return newFetchTasksState;	
};