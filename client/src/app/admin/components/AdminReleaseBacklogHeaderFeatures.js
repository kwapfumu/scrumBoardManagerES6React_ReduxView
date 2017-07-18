"use strict";
import React, { Component, PropTypes } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';

const AdminReleaseBacklogHeaderFeatures = (props) => (
		<ButtonToolbar>
			<Button bsStyle="primary" bsSize="small" onClick={props.openAddTaskForm}>add task</Button>
		</ButtonToolbar>
);

AdminReleaseBacklogHeaderFeatures.propTypes = {
	openAddTaskForm: PropTypes.func.isRequired,
};
export default AdminReleaseBacklogHeaderFeatures;

