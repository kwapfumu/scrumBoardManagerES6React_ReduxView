"use strict";
import React,{Component, PropTypes} from 'react';
import AdminTaskForm from '../AdminTaskForm/AdminTaskForm';
import {editTaskActionsCreator} from '../../actions/TaskActioncreators/editTaskActionsCreator';

/**expects to receive a taskId query string parameter from the route. With the taskId
you can filter the task information and set the draft card in its state with the values from the task the user
wants to edit,*/
class AdminEditTaskForm extends Component{
	constructor(props){
		super(props);
	},
	getTask2Update(){
		let aTask2Update = {};
		//talks directly to the store to get the task to update
		aTask2Update = this.props.getState().backlogTasks.find((task) => task._id === this.props.params.taskId);
		return aTask2Update;
	},
	
	componentWillMount(){
		let task2Update = this.getTask2Update;
		this.props.dispatch(draftTaskActionsCreators.createDraftTaskActionCreator(task2Update));
	},
	
	//sets the property:value of draftCard according to each field's user input
	handleChange(field, value){
		this.props.dispatch(draftTaskActionsCreators.updateDraftTaskActionCreator(field,value));
	},
	
	handleSubmit(e){
		e.preventDefault();
		this.props.dispatch(editTaskActionsCreator(this.props.params.taskId, this.props.getState().draftTask);
		this.props.history.pushState(null,'/releasebacklog');
	},
	
	handleClose(e){
		this.props.history.pushState(null,'/releaseBacklog');
	},
	
	render(){
		return (
			<AdminTaskFormModal modalTitle="Edit Task" 			                    
								draftTask={this.props.getState().draftTask}
								handleChange={this.props.handleChange}
								handleSubmit={this.props.handleSubmit}
								handleClose={this.handleClose.bind(this)}/>
		);
	}
};
AdminEditTaskForm.propTypes = {
	getState: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default AdminEditTaskForm;