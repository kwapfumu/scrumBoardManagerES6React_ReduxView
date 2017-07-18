"use strict";
import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Greeting from './Greeting';
import AdminNavbarFeatures from './AdminNavbarFeatures';

class AnyLoggedInUserNavbarFeatures extends Components{
	render(){
		if(this.props.showAdminFeatures){
			return (
				<Nav>
					<LinkContainer to="/releaseBacklog">
						<NavItem eventKey={1}>ReleaseBacklog</NavItem>
					</LinkContainer>
					<LinkContainer to="/currentSprint">
						<NavItem eventKey={2}>Current sprint</NavItem>				
					</LinkContainer>
				</Nav>
				<Greeting currentUserName={this.props.getCurrentUserName}/>
				<Nav pullRight>
					<AdminNavbarFeatures />
					<LinkContainer to="/logout">
						<NavItem eventKey={4}>Logout</NavItem>
					</LinkContainer>
				</Nav>
			);
		} else {
			return (
				<Nav>
					<LinkContainer to="/releaseBacklog">
						<NavItem eventKey={1}>ReleaseBacklog</NavItem>
					</LinkContainer>
					<LinkContainer to="/currentSprint">
						<NavItem eventKey={2}>Current sprint</NavItem>				
					</LinkContainer>
				</Nav>
				<Greeting currentUserName={this.props.getCurrentUserName}/>
				<Nav pullRight>
					<LinkContainer to="/logout">
						<NavItem eventKey={4}>Logout</NavItem>
					</LinkContainer>
				</Nav>
			);
		}
	}
};

AnyLoggedInUserNavbarFeatures.propTypes = {
	getCurrentUserName:PropTypes.func.isRequired,
	showAdminFeatures: PropTypes.bool.isRequired
};

export default AnyLoggedInUserNavbarFeatures;