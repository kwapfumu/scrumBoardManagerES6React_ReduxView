"use strict";
import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import 'babel-polyfill';
import SearchForm from './SearchForm';
import AdminReleaseBacklogHeaderFeatures from './AdminReleaseBacklogHeaderFeatures';
import BacklogTaskPanel from './BacklogTaskPanel';

/**BacklogPanel is a pure component that receives both allBacklogTasks and filterText as props.  The component is 
responsible for actualy filtering the allBacklogTasks before displaying them. It's considered a pure component because 
given the same allBacklogTasks and filterText props the output will always be the same.
=> should work...**/
class BacklogPanel extends Component{
	constructor(props){
		super(props);
	},
	/**gets an array of filtered tasks according to user input**/
	let backlogFilteredTasks = [];
	Object.assign(backlogFilteredTasks,this.props.allBacklogTasks.filter((task) => { task.taskName === {this.props.filterText}}););
	
	render() {		
		if(this.props.filterText === ''){
			let backlogPanelsOfTasks = this.props.allBacklogTasks.map((task) => {
				return <BacklogTaskPanel key={task._id} id={task._id} isAdmin={this.props.isAdmin}
										 {/*Receiving and Passing the taskCallbacks Prop*/}
										 taskCallbacks={this.props.taskCallbacks} 
										 {/* could use spread operator {...task}*/}
										 taskName={task.taskName} 
						                 taskDescription={task.taskDescription} 
						                 developer={task.developer},
						                 storyPoints={task.storyPoints} />
			});
		}else {
			let backlogPanelsOfTasks = this.props.backlogFilteredTasks.map((task) => {
				return <BacklogTaskPanel key={task._id} id={task._id}  isAdmin={this.props.isAdmin}
										 {/*Receiving and Passing the taskCallbacks Prop*/}
										 taskCallbacks={this.props.taskCallbacks}
										 taskName={task.taskName} 
						                 taskDescription={task.taskDescription} 
						                 developer={task.developer},
						                 storyPoints={task.storyPoints} 
										 openEditTaskForm = {this.props.openAdminEditTaskFormModal}/>
			});
		};
		
		return (
			<section className="backlogPanelSection">				
				{/* backlogPnel */}
				<Grid>
					<Row>
						<Panel>
							{/* Inner backlog panels/task panels  */}
							{backlogPanelsOfTasks}
							{/* /Inner backlog panels/task panels  */}
						</Panel>
					</Row>
				</Grid>
				{/* /backlogPnel */}    
			</section>
		);
	}
};

BacklogPanel.propTypes = {
	isAdmin:PropTypes.bool.isRequired,
	allBacklogTasks: PropTypes.arrayOf(PropTypes.object),
	filterText: PropTypes.string.isRequired,
	taskCallbacks: PropTypes.object,
	openAdminEditTaskFormModal: PropTypes.func.isRequired,
};

export default BacklogPanel;