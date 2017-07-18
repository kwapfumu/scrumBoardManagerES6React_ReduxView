"use strict";
import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Grid, Row, PageHeader, Label} from 'react-bootstrap';
import Moment from 'moment';
import SprintPanel from './SprintPanel';


class CurrentSprintLayout extends Component{
	constructor(props){
		super(props);
		this.state={
			isSprintPanelVisible: true,
		};
	},
	
		
	render() {
		return (
			<div className="sprintContainer">
				{/* sprint display area  */}
				<PageHeader>Current Sprint <small><span>
														<h4><Label bsStyle="default">{Moment(this.props.currentSprintInfo.startDate).format("dddd, MMMM [the] Do, YYYY")}</Label>&nbsp;</h4>
												  </span>
												  <span>
												        <h4><Label bsStyle="default">{Moment(this.props.currentSprintInfo.endDate).format("dddd, MMMM [the] Do, YYYY")}</Label></h4>
												  </span>
										   </small>
				</PageHeader>
				<Grid>
					<Row>
						{/* Sprint Panel Column  */}
						<SprintPanel panelId="todo" 
						             panelTitle="To Do" 
									 panelColor="danger" 
									 panelVisibility={this.state.isSprintPanelVisible} 
							         sprintTasks={this.props.currentSprintTasks.filter((task) => task.status === "todo")}
                                     taskPanelCallbacks={this.props.taskPanelCallbacks} />
						<SprintPanel panelId="in-progress" 
						             panelTitle="In Progress" 
									 panelColor="warning" 
									 panelVisibility={this.state.isSprintPanelVisible} 
							         sprintTasks={this.props.currentSprintTasks.filter((task) => task.status === "in-progress")} 
									 taskPanelCallbacks={this.props.taskPanelCallbacks} />
						<SprintPanel panelId="Done" 
						             panelTitle="Done"  
									 panelColor="success" 
									 panelVisibility={this.state.isSprintPanelVisible} 
							         sprintTasks={this.props.currentSprintTasks.filter((task) => task.status === "Done")} 
									 taskPanelCallbacks={this.props.taskPanelCallbacks} />
						{/*  /Sprint Panel Column  */}						
					</Row>
				</Grid>
				{/*  /sprints display area  */}					
			</div>
		);
	}
};

CurrentSprintLayout.propTypes = {
	currentSprintInfo: PropTypes.object.isRequired,
	currentSprintTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	taskPanelCallbacks: PropTypes.object.isRequired,
};
/**DragDropContext is a higher-order component that orchestrates the drag-and-drop between SprintPanel and SprintsTaskPanel*/
export default DragDropContext(HTML5Backend)(CurrentSprintLayout);