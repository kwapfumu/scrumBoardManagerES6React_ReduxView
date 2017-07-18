"use strict";
import React, { Component, PropTypes } from 'react';
import {Col, Modal} from 'react-bootstrap';
import AdminTaskForm from '../AdminTaskForm/AdminTaskForm';

class AdminTaskFormModal extends Component{
	constructor(props){
		super(props);
	},
	render(){
		return(
			<section>
				<Col xs={8} sm={8} md={8} lg={8}>
					<div className="static-modal">
						<Modal.Dialog show={this.props.showModal} onHide={this.props.closeAdminTaskFormModal}>
							<Modal.Header closeButton>
								<Modal.Title>{this.props.modalTitle}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<AdminTaskForm draftTask={this.props.draftTask}
								               handleChange={this.handleChange.bind(this)}
											   handleSubmit={this.handleSubmit.bind(this)}
											   {/*handleClose={this.handleClose.bind(this)} */} />
							</Modal.Body>
							<Modal.Footer>
								<Button type="button" bsStyle="default" bsSize="small" onClick={this.props.closeAdminTaskFormModal}>Cancel</Button>
								<Button type="submit" bsStyle="warning" bsSize="small" onClick={this.props.saveTask}>{this.props.taskFormButtonText}</Button>
							</Modal.Footer>
						</Modal.Dialog>
					</div>
				</Col>
			</section>
		);
	}
};

AdminTaskFormModal.propTypes = {
	showModal:PropTypes.bool.isRequired,
	modalTitle:PropTypes.string.isRequired,
	draftTask:PropTypes.object.isRequired,
	closeAdminTaskFormModal:PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	saveTask:PropTypes.func.isRequired,
};

export default AdminTaskFormModal;