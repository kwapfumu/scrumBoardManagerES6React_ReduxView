"use strict";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import currentSprintTasksSelector from '../selectors/currentSprintTasksSelector';
import currentSprintInfoSelector from '../selectors/currentSprintInfoSelector';
import {updateTaskStatusActionCreator, updateTaskPositionActionCreator, persistTaskDragActionCreator} from '../actions/DragTaskActionCreators';
import CurrentSprintLayout from '../components/CurrentSprintLayout';


/**CurrentSprintContainer**/

/**mapStateToProps that tells how to transform the current Redux store state into the props you want to pass to a 
presentational component you are wrapping*/
const mapStateToProps = (state, ownProps) => {
	return {
		currentSprintTasks:currentSprintTasksSelector(state),
		currentSprintInfo:currentSprintInfoSelector(state)
	};
};
/**mapDispatchToProps() receives the dispatch() method and returns callback props that you want to inject into the 
presentational component*/
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		{/*invoked by both the SprintPanel component(when you drag the SprintsTaskPanel to a 
		different SprintPanel) and by the SprintsTaskPanel itself (when you make the sorting
		functionality later), so you must edit all the components in the middle of the hierarchy 
		to receive and pass along this prop.*/}
		taskPanelCallbacks = {
			updateStatus: (aTaskId, aPanelId) => {
				dispatch(updateTaskStatusActionCreator(aTaskId, aPanelId));
			}, 
            updatePosition: (aTaskId , afterId) => {
			    dispatch(updateTaskPositionActionCreator(aTaskId , afterId));
			},
			persistTaskDrag: (taskProps) => {
				dispatch(persistTaskDragActionCreator(taskProps));
			}						
		}		            
	};
};	

const CurrentSprintContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentSprintLayout);	

export default CurrentSprintContainer;