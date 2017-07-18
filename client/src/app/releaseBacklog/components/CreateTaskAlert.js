"use strict";
/**CreateTaskAlert appears only when there are no tasks created yet.*/
import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const CreateTaskAlert = (props) => {
	if (props.isAdmin && props.alertVisible) {
		return (
			<Alert bsStyle="warning" onDismiss={props.handleOnDismiss}>
				<h4> No Tasks yet, why don't you <LinkContainer to="/newTask">create one</LinkContainer>?</h4>
			</Alert>
		);
	}else{
		return;
	};
};	

CreateTaskAlert.propTypes = {
	isAdmin:PropTypes.bool.isRequired,
	alertVisible:PropTypes.bool.isRequired,
	handleOnDismiss:PropTypes.func.isRequired,
};

export default CreateTaskAlert;