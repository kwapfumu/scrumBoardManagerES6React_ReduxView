'use strict';
/**sideNavigation component for scrumBoardManager app done with react-bootstrap**/
import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {  NavItem } from 'react-bootstrap';

const AdminSideNavigationFeatures = (props) => (
	<LinkContainer to="/users">
		<NavItem eventKey={1}>Users</NavItem>
	</LinkContainer>
);

AdminSideNavigationFeatures.propTypes = {

};
export default AdminSideNavigationFeatures;

