import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';

// Case reducer

export function fetchTasksErrorReducer(fetchTasksState, action) {
	//sets isFetching: false,didInvalidate:true
	let newFetchTasksState = update(fetchTasksState,{$merge:{action.payload}});	
	return newFetchTasksState;
};
