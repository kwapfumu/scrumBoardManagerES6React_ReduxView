"use strict";
import React, { Component, PropTypes } from 'react';
import {PageHeader} from 'react-bootstrap';
import AdminReleaseBacklogHeaderFeatures from '../../admin/components/AdminReleaseBacklogHeaderFeatures';

/*ReleaseBacklogHeader renders a react-bootstrap pageheader with admin features when admin user */
const ReleaseBacklogHeader = (props) => {
	if(props.isAdmin){
		return(
			<PageHeader>Releasebacklog <small><AdminReleaseBacklogHeaderFeatures openAddTaskForm={props.openAdminAddTaskFormModal}/></small></PageHeader>
		);
	}else{
		return(
			<PageHeader>Releasebacklog</PageHeader>
		);
	};
};

ReleaseBacklogHeader.propTypes = {
	isAdmin:PropTypes.bool.isRequired,
	openAdminAddTaskFormModal: PropTypes.func.isRequired,
};

export default ReleaseBacklogHeader;