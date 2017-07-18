"use strict";
import React, { Component, PropTypes } from 'react';
import { NavItem } from 'react-bootstrap';
import Greeting from './Greeting';

class AdminNavbarFeatures extends Components{
	render(){
		return(
			<NavItem eventKey={3} href="/admin">Admin</NavItem>
		);
	}
};

AdminNavbarFeatures.propTypes = {
	
};

export default AdminNavbarFeatures;