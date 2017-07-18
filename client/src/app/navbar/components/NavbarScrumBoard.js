"use strict";
import React, { Component, PropTypes } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import AnyLoggedInUserNavbarFeatures from 'AnyLoggedInUserNavbarFeatures';
import HomeNavbarFeatures from 'HomeNavbarFeatures';

class NavbarScrumBoard extends Components {
	constructor(props){
		super(props);
	},
	
	handleSelect(selectedEventKey,wtvEvent ){
		
	},
	
	
	function NavbarFeatures2Render(props){
		if(this.props.isLoggedIn === true && this.props.isAdmin === true){
			/**when loggedIn as Admin*/
			return (
				<AnyLoggedInUserNavbarFeatures showAdminFeatures={this.props.showAdminFeatures}/>
			);
		}else if(this.props.isLoggedIn === true && this.props.isAdmin === false){
			/**when loggedIn as regular user*/
			return (
				<AnyLoggedInUserNavbarFeatures />
			);
		}else {
			/**when no one is loggedIn*/
			return (
				<HomeNavbarFeatures />
			);
		}
	},
	
	render(){
		return (
			<Navbar staticTop collapseOnSelect>
				<Navbar.Header Navbar.Toggle>
					<IndexLinkContainer to="/">
						<Navbar.Brand>Scrum Board manager</Navbar.Brand>
					</IndexLinkContainer>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse onSelect={this.handleSelect}>					
			        <NavbarFeatures2Render />
				</Navbar.Collapse>
			</Navbar>
		);
	}
};

NavbarScrumBoard.propTypes = {
	isAdmin: PropTypes.bool.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	showAdminFeatures: PropTypes.bool.isRequired
};

export default NavbarScrumBoard;