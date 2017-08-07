"use strict";
import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import fetchTasksActionsCreators from '../actions/FetchTasksActionCreators/fetchTasksActionsCreators';
import CreateTaskAlert from './CreateTaskAlert';
import SearchForm from './SearchForm';
import ReleaseBacklogHeader from './ReleaseBacklogHeader';
import BacklogPanel from './BacklogPanel';


/** ReleaseBacklogLayout renders CreateTaskAlert,SearchForm, ReleaseBacklogHeader and BacklogPanel components
// Passes down filterText state and handleUserInput callback as props 
**/
class ReleaseBacklogLayout extends Component{
	constructor(props){
		super(props);
		this.state={
			alertVisible: true,
			backlogFilteredTasks = [],
			filterText: '',			
		};
	},
	//returns number of created task when this component mounts
	getNumberOfCreatedTasks(){
		let numberOfTasks = this.props.allBacklogTasks.length;
		return numberOfTasks;
	},
	//changes the alertVisible state to show CreateTaskAlert if appropriate
	handleAlertShow() {
		if(this.getNumberOfCreatedTasks === 0){
			this.setState({alertVisible: true});
		}else{
			this.setState({alertVisible: false});
		};		
	},
	//dispatches fetchTasks when releaseBacklogLayout is mounted to the DOM & shows CreateTaskAlert if appropriate
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchTasksActionsCreators.fetchTasks());
		this.handleAlertShow();
	},
	
	/*componentDidUpdate(prevProps) {
		if (this.props.backlogTasks !== prevProps.backlogTasks) {
			const { dispatch } = this.props
			dispatch(fetchTasksActionsCreators.fetchTasks());
		}
	},*/
	/**changes the state on user input in SearchForm**/
	handleUserInput(searchTerm){
		this.setState({filterText:searchTerm});
	},
	handleAlertDismiss() {
		this.setState({alertVisible: false});
	},
	/**gets an array of filtered tasks according to user input**/
	getFilteredTasks(){		
		let filteredTasks = [];
		Object.assign(filteredTasks,this.props.allBacklogTasks.filter((task) => { task.taskName === {this.state.filterText}}););
		this.setState({backlogFilteredTasks: filteredTasks});
	},
	render() {
		return (
			<div className="releaseBacklogContainer">
				{/* alert display area  */}
					<Grid className="alertContainer">
						<Row>
							<Col xs={6} sm={4} md={4} lg={4} smOffset={3} mdOffset={5} lgOffset={5} >    
								{/* alertbox  */}
								<CreateTaskAlert isAdmin={this.props.isAdmin}
								                 alertVisible={this.state.alertVisible}								                 
												 handleOnDismiss={this.handleAlertDismiss.bind(this)}/>						
								{/* /alertbox  */}
							</Col>
						</Row>			
					</Grid>
				{/* /alert display area  */}
				{/* Any user backlog View  */}
				<Grid className="BacklogContainer">
					<Row>
						{/* searchbox */}
						{/*whenever the user changes the search form, you update the state to reflect the user input. 
						Since components should only update their own state, ReleaseBacklogLayout will pass a callback(handleUserInput()) 
						to SearchForm that will fire whenever the state should be updated.*/}
						<SearchForm filterText={this.state.filterText} 
						            onUserInput={this.handleUserInput.bind(this)}
									searchReleaseBacklogByTaskname={this.getFilteredTasks.bind(this)}/>
						{/* /searchbox */}
					</Row>
					<Row>
						{/* releaseBacklog header */}
						<ReleaseBacklogHeader isAdmin={this.props.isAdmin}
											  openAdminAddTaskFormModal={this.props.openAdminAddTaskFormModal}/>						   
						{/* BacklogPanel */}
						<BacklogPanel allBacklogTasks={this.props.allBacklogTasks}
						              backlogFilteredTasks={this.props.backlogFilteredTasks}
									  filterText={this.state.filterText}
									  openAdminEditTaskFormModal={this.props.openAdminEditTaskFormModal}
									  taskCallbacks={this.props.taskCallbacks}/>
					</Row>			
				</Grid>
				{/* /Any user backlog View  */}
			</div>
		);
	}
};

ReleaseBacklogLayout.propTypes = {
	isAdmin:PropTypes.bool.isRequired,
	allBacklogTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	dispatch: PropTypes.func.isRequired,
	openAdminAddTaskFormModal: PropTypes.func.isRequired,
	openAdminEditTaskFormModal: PropTypes.func.isRequired,
	taskCallbacks: PropTypes.object.isRequired,
	
};

export default ReleaseBacklogLayout;