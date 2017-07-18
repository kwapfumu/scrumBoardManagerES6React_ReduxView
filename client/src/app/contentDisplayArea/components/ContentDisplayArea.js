"use strict";
import React, { Component, PropTypes } from 'react';
import AnyLoggedInUserLayout from '../anyLoggedInUserLayout/components/AnyLoggedInUserLayout';
import AdminLayout from '../admin/components/AdminLayout';
import HomeLayout from '../home/components/HomeLayout';
//renders either Home or admin or any loggedin user component
class ContentDisplayArea extends Component {
	constructor(props){
		super(props);
		this.state={
			showModal: false,
			showAdminSideNavigationFeatures: false
		};
	},
	
	closeTaskForm() {
		this.setState({ showModal: false });
	},
	
	openAddTaskForm(){
		this.setState({ showModal: true });
	},	
	
	openEditTaskForm(aTaskId){
		this.setState({ showModal: true });		
	},
	
	render(){
		if (this.props.isLoggedIn === true && this.props.isAdmin === false){
			return (
				<AnyLoggedInUserLayout showAdminSideNavigationFeatures={this.state.showAdminSideNavigationFeatures}/>
			);
		}else if (this.props.isLoggedIn === true && this.props.isAdmin === true){
			return (
				<AdminLayout showModal={this.state.showModal}
							 showAdminSideNavigationFeatures={!this.state.showAdminSideNavigationFeatures}
							 openAdminAddTaskFormModal={this.openAddTaskForm.bind(this)} 
				             openAdminEditTaskFormModal={this.openEditTaskForm.bind(this)}
							 closeAdminTaskFormModal={this.closeTaskForm.bind(this)} />
			);
		}else {
			return ( 
				<HomeLayout />
			);
		}
	}
};

ContentDisplayArea.propTypes = {
	isAdmin: PropTypes.bool.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};

export default ContentDisplayArea;