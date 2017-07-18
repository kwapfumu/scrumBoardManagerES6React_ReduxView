"use strict";
import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class HomeNavbarFeatures extends Components{
	render(){
		return(
			<Nav pullRight>	
				<LinkContainer to="/login">
					<NavItem eventKey={1}>Login</NavItem>				
				</LinkContainer>
				<LinkContainer to="/signup">
					<NavItem eventKey={2}>Sign up</NavItem>
				</LinkContainer>
			</Nav>
		);
	}
};

HomeNavbarFeatures.propTypes = {
	
};

export default HomeNavbarFeatures;