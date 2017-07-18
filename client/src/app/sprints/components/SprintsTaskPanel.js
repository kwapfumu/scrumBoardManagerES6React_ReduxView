"use strict";
import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col, Panel, ListGroup, ListGroupItem, Label} from 'react-bootstrap';
import { DragSource, DropTarget } from 'react-dnd';
import constants from '../../constants/constants';

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
/**The taskPanelDragSpec object describes how the enhanced component reacts to the drag and drop events.
 */
const taskPanelDragSpec = {
	//registers the task id and status when user starts dragging
	beginDrag(props) {
		return { 
			id: props.id, 
			status: props.status 
		};
	},
	//persists task when user stops dragging
	endDrag(props) {
		props.taskPanelCallbacks.persistTaskDrag(props.id, props.status);		
		/**- monitor: An instance of DropTargetMonitor: use it to connect state from the React DnD to props.
	     Available functions to get state include canDrag(), isDragging(), getItemType(), getItem(), didDrop() etc.*/
		const dragItem = monitor.getItem();
		const dropResult = monitor.getDropResult();
		if (dropResult) {
			console.log(`You dropped ${dragItem.taskName} into ${dropResult.panelId}`);
		}
	}	
};

/**The key to implement item sorting using React DnD is to make the element both a DragSource and a DropTarget. This way, when
 the user starts dragging one element, you can use the hover handler to detect over which other element he is hovering and 
 change positions with it.*/
const taskPanelDropSpec = {
	/**uses the hover function to detect when another taskPanel is hovering over & invokes the updatePosition callback 
	to switch the position between the 2 tasks.*/
	hover(props, monitor) {
		const draggedId = monitor.getItem()._id;		
		if(props.id !== draggedId){
			props.taskPanelCallbacks.updatePosition(draggedId, props.id);
		}
	}
};

let collectDrag = (connect, monitor) => {
	return { 
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
};

let collectDrop = (connect, monitor) => {
	return { 
		connectDropTarget: connect.dropTarget(),
	};
};

class SprintsTaskPanel extends Component{
	constructor(props){
		super(props);
	},
	let title = (
		<h3>this.props.task.taskName</h3>
	);
	
	render(){
	
		const { isDragging, connectDragSource, connectDropTarget } = this.props;
		/**use the prop isDragging inside an inline style rule to make the element opacity change when it’s being dragged*/
		const opacity = isDragging ? 0.4 : 1;
		const style = {opacity: opacity};
		/** this part of the DOM will be used to represent your component while it’s being dragged and as dropTarget.*/
		return connectDropTarget(connectDragSource(
			<Col xs={5} sm={5} md={5} lg={5} className="sprintsTaskPanel">
				<Panel header={title} bsStyle="default" className="taskPanelExtra-space">
					{/* /taskpanel-body  */}
					<ListGroup>
						<ListGroupItem><p className="text-muted">{this.props.task.taskDescription}}</p></ListGroupItem>
						<ListGroupItem>
							<Grid>
								<Row>
									<span><Label bsStyle="default">{this.props.task.developer}</Label>&nbsp;</span>
									<span><Label bsStyle="default">{this.props.task.storyPoints}</Label></span>
								</Row>
							</Grid>
						</ListGroupItem>
					</ListGroup>		
					{/* /taskpanel-body  */}
				</Panel>
			</Col>
		);		
	}	
};

SprintsTaskPanel.propTypes = {
	_id: PropTypes.string.isRequired,
	taskName: PropTypes.string.isRequired,
	taskDescription: taskDescriptionPropType,
	developer: PropTypes.string.isRequired,
	storyPoints: PropTypes.number.isRequired,
	taskPanelCallbacks: PropTypes.object.isRequired,
	connectDragSource: PropTypes.func.isRequired,
	isDragging: PropTypes.bool.isRequired,
	connectDropTarget: PropTypes.func.isRequired,
};

const dragHighOrderSprintsTaskPanel = DragSource(constants.SPRINTSTASKPANEL, taskPanelDragSpec, collectDrag)(SprintsTaskPanel);
const dragDropHighOrderSprintsTaskPanel = DropTarget(constants.SPRINTSTASKPANEL, taskPanelDropSpec, collectDrop)(dragHighOrderSprintsTaskPanel);
export default dragDropHighOrderSprintsTaskPanel;