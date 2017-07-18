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
			filterText: '',
			alertVisible: true,
		};
	},

	//dispatch fetchTasks when releaseBacklogLayout is mounted to the DOM
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(fetchTasksActionsCreators.fetchTasks());
	},
	
	/*componentDidUpdate(prevProps) {
		if (this.props.backlogTasks !== prevProps.backlogTasks) {
			const { dispatch } = this.props
			dispatch(fetchTasks());
		}
	},*/
	getNumberOfCreatedTasks(){
		let numberOfTasks = this.props.allBacklogTasks.length;
		return numberOfTasks;
	},
	/**changes the state on user input in SearchForm**/
	handleUserInput(searchTerm){
		this.setState({filterText:searchTerm});
	},
	handleAlertDismiss() {
		this.setState({alertVisible: false});
	},
	handleAlertShow() {
		if(this.getNumberOfCreatedTasks === 0){
			this.setState({alertVisible: true});
		}else{
			this.setState({alertVisible: false});
		};
		
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
								                 showCreateTaskAlert={this.handleAlertShow.bind(this)}
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
						to SearchForm that will fire whenever the state should be updated. You can use the onChange event on the inputs
						to be notified of it. On the ReleaseBacklogLayout, you create a local function to change the filterText state and
						pass this function down as a prop to the searchForm*/}
						<SearchForm filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
						{/* /searchbox */}
					</Row>
					<Row>
						{/* releaseBacklog header */}
						<ReleaseBacklogHeader isAdmin={this.props.isAdmin}
											  openAdminAddTaskFormModal={this.props.openAdminAddTaskFormModal}/>						   
						{/* BacklogPanel */}
						<BacklogPanel allBacklogTasks={this.props.allBacklogTasks}
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