"use strict";
import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SideNavigation from '../../sideNavigation/components/SideNavigation';

const AnyLoggedInUserLayout = (props) => (
	<Grid>
		<Row>
			<Col xs={4} sm={4} md={2} lg={2}>
				<SideNavigation showAdminSideNavigationFeatures={props.showAdminSideNavigationFeatures}/>
			</Col>
			<Col xs={8} sm={8} md={10} lg={10}>
				{/*React Router will automatically set the children props to whichever is the appropriate 
				component based on the current route*/}
				{React.cloneElement(props.children, props)}
			</Col>
		</Row>
	</Grid>		
);

AnyLoggedInUserLayout.propTypes = {
	showAdminSideNavigationFeatures:PropTypes.bool.isRequired,
};

export default AnyLoggedInUserLayout;