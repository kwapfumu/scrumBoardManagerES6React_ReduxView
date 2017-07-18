"use strict";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import addTaskActionsCreator from '../../admin/actions/TaskActionCreators/addTaskActionsCreator';
import editTaskActionsCreator from '../../admin/actions/TaskActionCreators/editTaskActionsCreator';
import deleteTaskActionsCreator from '../../admin/actions/TaskActionCreators/deleteTaskActionsCreator';
import ReleaseBacklogLayout from '../components/ReleaseBacklogLayout';


/**mapStateToProps that tells how to transform the current Redux store state into the props you want to pass to a 
presentational component you are wrapping*/
const mapStateToProps = (state, ownProps) => {
	return {
		allBacklogTasks: state.backlogTasks,			
	};
};

/**mapDispatchToProps() receives the dispatch() method and returns callback props that you want to inject into the 
presentational component*/
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		taskCallbacks:{
			addAtask: (aTask2Add) => {
				dispatch(addTaskActionsCreator(aTask2Add));
			},
			editAtask: (aTaskId) => {
				dispatch(editTaskActionsCreator(aTaskId));
			},
			deleteAtask: (aTaskId) => {
				dispatch(deleteTaskActionsCreator(aTaskId));
			},
		};			            
	};
};	

const ReleaseBacklogContainer = connect(mapStateToProps, mapDispatchToProps)(ReleaseBacklogLayout);	

export default ReleaseBacklogContainer;