"use strict";
import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import { DropTarget } from 'react-dnd';
import SprintsTaskPanel from './SprintsTaskPanel';
import constants from '../../constants/constants';

/**The sprintPanelTargetSpec object describes how the enhanced component reacts to the drag and drop events. 
uses a hover method on the sprintPanelTargetSpec to call the taskPanelCallbacks to update its status as soon as it is 
hovering over the SprintPanel; the feedback to the user will be immediate.*/
const sprintPanelTargetSpec = {
	hover(props, monitor) {		
		const draggedId = monitor.getItem()._id;
		//dispatches an updateTaskStatusActionCreator
		props.taskPanelCallbacks.updateStatus(draggedId, props.panelId);			
	}
};

let collect = function collect(connect, monitor) {
	return { 
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
};
	
/** SprintPanel is the DropTarget for the drag&drop of tasks/SprintsTaskpanels: drag over any SprintPanel to change 
a task's status'**/
class SprintPanel extends Component{
	constructor(props){
		super(props);
	},
	const thisPaneltitle = (
		<h3>{this.props.panelTitle}</h3>			
	);	
	render(){
		const { connectDropTarget } = this.props;		
		let thisPanelTasks = this.props.sprintTasks.map((task) => {
			return <SprintsTaskPanel key={task._id} id={task._id} 
						taskName={task.taskName} 
						taskDescription={task.taskDescription} 
						developer={task.developer},
						status={task.status},
						storyPoints={task.storyPoints} 
						taskPanelCallbacks={this.props.taskPanelCallbacks} />
		});
		/**connectDropTarget prop returns which part of this component’s DOM is the target area for draggable objects.*/
		return connectDropTarget(
			<Col xs={4} sm={4} md={4} lg={4} >
				<Panel header={thisPaneltitle} 
				       bsStyle={this.props.panelColor} 
				       id={this.props.panelId} 
					   className="sprintPanelDrv-animation" 
					   isSprintPanelVisible>
					{/* Inner panels/task panels  */}
					{thisPanelTasks}
					{/* /Inner panels/task panels  */}
				</Panel>
			</Col>
		);
	}
};

SprintPanel.propTypes = {	
	panelColor: PropTypes.string.isRequired,
	sprintTasks: PropTypes.arrayOf(PropTypes.object),
	taskPanelCallbacks: PropTypes.object.isRequired,
	connectDropTarget: PropTypes.func.isRequired
};

export default DropTarget(constants.SPRINTSTASKPANEL, sprintPanelTargetSpec, collect)(SprintPanel);