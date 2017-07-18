"use strict";
import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import addTaskActionsCreator from '../actions/TaskActionCreators/addTaskActionsCreator';
import editTaskActionsCreator from '../actions/TaskActionCreators/editTaskActionsCreator';
import deleteTaskActionsCreator from '../actions/TaskActionCreators/deleteTaskActionsCreator';
import SideNavigation from '../sideNavigation/components/SideNavigation';
import AdminCentralView from './AdminCentralView/AdminCentralView';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
/**
	AdminLayout is same as ScrumBoard Layout except that:
	 - <NavbarScrumBoard /> has an "Admin" link showing up on the left of Log out link
	 - <SideNavigation /> has "Users" link showing up on top of releaseBacklog
	 - <ReleaseBacklogHeader /> has <AdminReleaseBacklogHeaderFeatures /> showing up
*/
class AdminLayout extends Components{
	constructor(props){
		super(props);
		this.state={
			taskFormButtonText:"Save task";
		};
	},
	/**mapDispatchToProps() receives the dispatch() method and returns callback props that you want 
	to inject into the presentational component*/
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
			}			            
		};
	};
	setTaskFormButtonText2Edit(){
		this.setState({taskFormButtonText:"Edit"});
	},
	
	render(){
		return(
			<Grid>
				<Row>
					<Col xs={3} sm={3} md={3} lg={3} className="adminSideNavigation">
						<SideNavigation showAdminSideNavigationFeatures={this.props.showAdminSideNavigationFeatures}/>
					</Col>
					<Col xs={9} sm={9} md={9} lg={9} className="adminCentralView">
						<AdminCentralView openAdminAddTaskFormModal=this.props.openAdminAddTaskFormModal
								          openAdminEditTaskFormModal=this.props.openAdminEditTaskFormModal
								          closeAdminTaskFormModal=this.props.closeAdminTaskFormModal>
								<ReactCSSTransitionGroup transitionName="adminCentralView"
                                                 transitionEnterTimeout={600}
                                                 transitionLeaveTimeout={600}
												 transitionAppear={true}
                                                 transitionAppearTimeout={600}>
									{/*React Router will automatically set the children props to whichever is the appropriate 
										component based on the current route*/}
									{React.cloneElement(this.props.children, this.props)}
								</ReactCSSTransitionGroup>
							</AdminCentralView>
						
					</Col>
				</Row>
			</Grid>		
		);
	}	
};

AdminLayout.propTypes =  {
	showAdminSideNavigationFeatures:PropTypes.bool.isRequired,
	openAdminAddTaskFormModal:PropTypes.func.isRequired,
	openAdminEditTaskFormModal:PropTypes.func.isRequired,
	closeAdminTaskFormModal:PropTypes.func.isRequired,
};
const AdminLayout = connect(null, mapDispatchToProps)(AdminCentralView);
export default AdminLayout;