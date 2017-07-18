"use strict";
import * as types from '../../../constants/constants'
import {throttle} from '../../utils';

/**There are a lot of callbacks being fired as the user drags a task. Hovering the task on top of other tasks
successively invokes updatePosition callback, while hovering different sprintPanels successively invokes updateStatus.
Calling the taskPanelcallbacks dozens of times per second like this has the potential to be a drag on
performance, and for this reason you need to implement a throttling function. A throttling function receives
two parameters, the original function you want to have throttled and wait. It returns a throttled version of
the passed function that, when invoked repeatedly, will only actually call the original function at most once
per every wait milliseconds. The throttling function you will implement is also smart enough to invoke the
original function immediately if the calling arguments change.*/
// Only call updateCardStatus when arguments change
export const updateTaskStatusActionCreator = throttle((aTaskId, aPanelId) => ({ 
	type: types.UPDATE_TASK_STATUS,	 
	payload: {
		aTaskId: aTaskId,
		aPanelId: aPanelId
	}
}));

// Call updateCardPosition at max every 500ms (or when arguments change)
export const updateTaskPositionActionCreator = throttle((aTaskId , afterId) => ({
	type: types.UPDATE_TASK_POSITION, 
	payload: {
		aTaskId: aTaskId,
		afterId: afterId
	}
}),500);


	
	
	
	