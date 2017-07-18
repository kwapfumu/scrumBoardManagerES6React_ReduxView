"use strict";
import React, { Component, PropTypes } from 'react';
import {Button, Grid, Row, Col, Panel, ListGroup, ListGroupItem, Label, Glyphicon} from 'react-bootstrap';
import {deleteTaskActionsCreator} from '../../admin/actions/TaskActionsCreators/deleteTaskActionsCreator';
import {showEditFormModalActionsCreator} from '../../admin/actions/EditFormModalActionsCreators/showEditFormModalActionsCreator';

//custom proptype validator for taskDescription
let taskDescriptionPropType = (props, propName, componentName) => {
	if (props[propName]) {
		let value = props[propName];
		if (typeof value !== 'string' || value.length > 80) {
			return new Error(
				`${propName} in ${componentName} is longer than 80 characters`
			);
		}
	}
};

class BacklogTaskPanel extends Component{
	constructor(props){
		super(props);
	},
	let backlogTasktitle = (
		<h3>{this.props.task.taskName}<span className="pull-right">
											<Button bsStyle="success" 
											        bsSize="xsmall" 													
													onClick={this.props.openSprintsChoices}>toSprint</Button>
										</span>
		</h3>		
	);
	
	handleClick(){},
	
	render(){
		if(this.props.isAdmin){
			return (
				<Col xs={6} sm={3} md={3} lg={3} >
					<Panel header={backlogTasktitle} bsStyle="default" className="taskPanelExtra-space">
						{/* /taskpanel-body  */}
						<ListGroup>
							<ListGroupItem><p className="text-muted">{this.props.task.taskDescription}}</p></ListGroupItem>
							<ListGroupItem>
								<Grid>
									<Row>
										<span><Label bsStyle="danger">{this.props.task.storyPoints}</Label>&nbsp;</span>
										<span><Label bsStyle="default">{this.props.task.developer}</Label></span>									
									</Row>
								</Grid>
							</ListGroupItem>		
							<ListGroupItem>
								<Grid>
									<Row id="editNDeleteButtonRow">
										{/*deleteButton*/}
										<span className="pull-right">
											<Button bsStyle="warning" 
													bsSize="xsmall"
													className="backlogTaskPanel__task--remove"													
													onClick={this.props.dispatch(deleteTaskActionsCreator(this.props.task.taskId))} >
												<Glyphicon glyph="trash" />
											</Button>
										</span>
										{/*editButton*/}
										<span className="pull-left">
											<Button bsStyle="default" 
											        bsSize="xsmall"
											        className="backlogTaskPanel__task--edit"										       											  
											        onClick={this.props.dispatch(showEditFormModalActionsCreator(this.props.task.taskId))} >
												<Glyphicon glyph="edit" />
											</Button>
										</span>
									</Row>
								</Grid>
							</ListGroupItem>
						</ListGroup>		
						{/* /taskpanel-body  */}
					</Panel>
				</Col>
			);
		}else {
			return (
				<Col xs={6} sm={3} md={3} lg={3} >
					<Panel header={backlogTasktitle} bsStyle="default" className="taskPanelExtra-space">
						{/* /taskpanel-body  */}
						<ListGroup>
							<ListGroupItem><p className="text-muted">{this.props.task.taskDescription}}</p></ListGroupItem>
							<ListGroupItem>
								<Grid>
									<Row>
										<span><Label bsStyle="default">{this.props.task.storyPoints}</Label>&nbsp;</span>
										<span><Label bsStyle="default">{this.props.task.developer}</Label></span>									
									</Row>
								</Grid>
							</ListGroupItem>							
						</ListGroup>		
						{/* /taskpanel-body  */}
					</Panel>
				</Col>
			);
		};
	}
};

BacklogTaskPanel.propTypes = {
	isAdmin:PropTypes.bool.isRequired,
	taskId:PropTypes.number,//not sure if it's number
	taskName: PropTypes.string,
	taskDescription: taskDescriptionPropType,
	developer: PropTypes.string,
	storyPoints: PropTypes.number,
	dispatch: PropTypes.func.isRequired,
	openAdminEditTaskFormModal: PropTypes.func.isRequired
};

export default BacklogTaskPanel;