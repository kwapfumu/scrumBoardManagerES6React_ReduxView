"use strict";
import _ from 'lodash';
import { createSelector } from 'reselect';
import currentSprintTasksSelector from './currentSprintTasksSelector';

const getCurrentSprintInfo = function getCurrentSprintInfo(currentSprintTasks){
	let aTask = _.head(currentSprintTasks);
	let currentSprintInfo={};
	currentSprintInfo = Object.assign(currentSprintInfo,aTask.sprintInfo);
	return currentSprintInfo; 
};
/**Takes one or more selectors, or an array of selectors, computes their values and passes them as arguments to resultFunc*/
const currentSprintInfoSelector = createSelector(
	currentSprintTasksSelector,
	getCurrentSprintInfo
);

export default currentSprintInfoSelector;