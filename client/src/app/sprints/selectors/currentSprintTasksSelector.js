"use strict";
import _ from 'lodash';
import { createSelector } from 'reselect';

//input-selectors i.e. do not modify the state
const allBacklogTasksSelector = (state) => state.backlogTasks;

const getCurrentSprintTasks = function getCurrentSprintTasks(backlogTasks, playedSokozosIds){
	let currentSprintTasks = [];
	let todaysDate = Date.now();
	currentSprintTasks = _.filter(backlogTasks,(task) => todaysDate <= task.sprintInfo.endDate;);
	return currentSprintTasks; 
};

/**Takes one or more selectors, or an array of selectors, computes their values and passes them as arguments to resultFunc*/
const currentSprintTasksSelector = createSelector(
	allBacklogTasksSelector,
	getCurrentSprintTasks
);

export default currentSprintTasksSelector;