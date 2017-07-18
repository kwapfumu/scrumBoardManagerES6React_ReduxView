"use strict";
import { combineReducers } from 'redux';
import {taskReducer} from './taskReducers/taskReducer';
import {userReducer} from './userReducers/userReducer';
import {showEditFormModalReducer} from './showEditFormModalReducers/showEditFormModalReducer';
/**combineReducers is a higher-order reducer, which takes an object full of slice reducer functions, and returns a new reducer 
function. In order to assemble the new state tree, combineReducers will call each slice reducer with its current slice of state
and the current action, giving the slice reducer a chance to respond and update its slice of state if needed. So, in that sense, 
using combineReducers does "call all reducers", or at least all of the slice reducers it is wrapping.
You can use it at all levels of your reducer structure, not just to create the root reducer. It's very common to have multiple 
combined reducers in various places, which are composed together to create the root reducer.
combineReducers takes an object full of slice reducer functions, and creates a function that outputs a corresponding state object 
with the same keys. The keys should simply reflect the domain or type of data they hold. This means we should either explicitly 
specify the names of the keys in the slice reducer object to define the keys in the output state object, or carefully rename the 
variables for the imported slice reducers to set up the keys when using the shorthand object literal syntax.
*/
const adminFeaturesReducer = combineReducers({
	taskReducer,
	userReducer,
	showEditFormModalReducer,
	
});

export default adminFeaturesReducer;