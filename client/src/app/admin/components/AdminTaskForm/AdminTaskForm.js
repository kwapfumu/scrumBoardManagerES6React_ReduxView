"use strict";
import React, { Component, PropTypes } from 'react';
import {FormGroup, FormControl, InputGroup,  Button, HelpBlock } from 'react-bootstrap';

/**contain a form (that needs to be flexible enough to be used blank or pre-filled with existing card values.) and an overlay.
The form will appear as a modal on top of the Kanban board, and the overlay will be used behind the modal to “darken” 
everything behind it.*/
class AdminTaskForm extends Component(
	constructor(props){
		super(props);
		this.state={
			help:''
		}
	},
	//custom propValidator:todo=> refactor it when u less tired(something not wrong with state.value...)...	
	getValidationState() {
		const length = this.state.value.length;
		const textPattern = new RegExp('^[a-z]');
		if (length > 7 && length <10) return {
			'success';
		}else if (length > 10) return {
			'warning';
			this.setState({help:'${label} should be max 10 characters long'});
		}else if (length < 7) return {
			'error';
			this.setState({help:'${label} should be at least 7 characters long'});
		}else if(typeof (this.state.value) !== 'string' || this.state.value === textPattern){
			return {
			'error';
			this.setState({help:'${label} should be a text'});
		} 
	},
	
	//handles form field change
	handleChange(field, e){
		this.props.handleChange(field, e.target.value);
	},
	//handles the modal closing (when the user clicks outside the modal).
	handleClose(e){
		e.preventDefault();
		this.props.handleClose();
	},
	FieldGroup(id,label,help, ...props){
		return (
			<FormGroup bsSize="small"
			           controlId={id}
				       validationState={this.getValidationState()}>
				<Col sm={10}>
					<FormControl {...props} />
				</Col>
				<FormControl.Feedback />
				<HelpBlock>{help}</HelpBlock>
			</FormGroup>
		);
	},
	render(){
		return (
			<Form horizontal onSubmit={this.props.handleSubmit.bind(this)}>
				<FormGroup bsSize="small">
					<div ng-show="error" class="text-center text-danger">
						<div class="alert alert-danger" role="alert">
							<strong ng-bind="error"></strong>
						</div>
					</div>
				</FormGroup>
				<FieldGroup id="projectName"
				            type="text"
							label="projectName"
                            value={this.props.draftTask.projectName} 
							placeholder="project name"
 							onChange={this.handleChange.bind(this,{label})} />
				<FieldGroup id="taskName"
				            type="text"
							label="taskName"
                            value={this.props.draftTask.taskName} 
							placeholder="task name"
 							onChange={this.handleChange.bind(this,{label})} />								
				<FormGroup bsSize="small" 
				           controlId="taskDescription" 
						   validationState={this.getValidationState()}>
					<Col sm={10}>
						<FormControl componentClass="textarea" 
						             placeholder="taskDescription"
									 value={this.props.draftTask.taskDescription}
                                     onChange={this.handleChange.bind(this,'taskDescription')}	                                    
                                     rows="2"/>
						<FormControl.Feedback />
						<HelpBlock>{help}</HelpBlock>
					</Col>
				</FormGroup>
				<FieldGroup id="storyPoints"
				            type="number"
							label="storyPoints"
                            value={this.props.draftTask.storyPoints} 
							placeholder="storyPoints"
 							onChange={this.handleChange.bind(this,{label})} />
				<FieldGroup id="developer"
				            type="text"
							label="developer"
                            value={this.props.draftTask.developer} 
							placeholder="developer"
 							onChange={this.handleChange.bind(this,{label})} />
				
				<FormGroup bsSize="small" 
				          controlId="status" 
						  validationState={this.getValidationState()}>
					<Col sm={10}>
						<FormControl componentClass="select" 
						             placeholder="select"
									 value={this.props.draftTask.status}
									 onChange={this.handleChange.bind(this,'status')}>
						    <option value="todo">To Do</option>
							<option value="inProgress">In Progress</option>
							<option value="done">Done</option>							
						</FormControl>
						<FormControl.Feedback />
						<HelpBlock>{help}</HelpBlock>
					</Col>
				</FormGroup>
				<FieldGroup id="sprintNumber"
				            type="number"
							label="sprintNumber"
                            value={this.props.draftTask.sprintInfo.sprintNumber} 
							placeholder="sprint number"
 							onChange={this.handleChange.bind(this,{label})} />
				<FieldGroup id="sprintInfo.startDate"
				            type="date"
							label="sprintInfo.startDate"
                            value={this.props.draftTask.sprintInfo.startDate} 
							placeholder="sprint start date"
 							onChange={this.handleChange.bind(this,{label})} />
				<FieldGroup id="sprintInfo.endDate"
				            type="date"
							label="sprintInfo.endDate"
                            value={this.props.draftTask.sprintInfo.endDate} 
							placeholder="sprint end date"
 							onChange={this.handleChange.bind(this,{label})} />
				<FormGroup bsSize="small" controlId="buttonsRow">
					<Col sm={10}>
						<Button type="submit" bsStyle="warning" disabled value="">{this.props.taskFormButtonText}</Button>
						<Button type="button" bsStyle="default" value="" data-dismiss="modal" onClick={this.handleClose.bind(this)}>Cancel</Button>
					</Col>
				</FormGroup>
			</Form>
		);
	}
});

AdminTaskForm.propTypes = {
	taskFormButtonText: PropTypes.string.isRequired,
	draftTask: PropTypes.shape({
	    projectName: PropTypes.string,
		tasktName: PropTypes.string,
		taskDescription: PropTypes.string,
		storyPoints: PropTypes.number,								
		developer: PropTypes.string,
		status: PropTypes.string,
		sprintNumber: PropTypes.number,
		sprintInfo:PropTypes.shape({
			startDate: PropTypes.string,
			endDate: PropTypes.string
		});
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default AdminTaskForm;  