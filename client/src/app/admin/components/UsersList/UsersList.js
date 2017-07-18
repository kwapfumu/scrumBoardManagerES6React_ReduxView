"use strict";
import React, { Component, PropTypes } from 'react';
import {Col, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import deleteUserActionsCreator from '../../actions/UserActionsCreators/deleteUserActionsCreator';

class UsersList extends Component{
	constructor(props){
		super(props);
	},
	render(){
		let usersList = this.props.users.map((aUser) => {
				return <ListGroupItem key={aUser._id}>
							<strong>{aUser.name}</strong></br>
							<span className="text-muted">{aUser.email}</span>
							<a onClick={this.props.dispatch(deleteUserActionsCreator.deleteUser(aUser._id))} className="trash"><span><Glyphicon glyph="trash" className="pull-right"/></span></a>
						</ListGroupItem>
			});
		return (
			<Col xs={9} sm={9} md={9} lg={8} id="usersListView">
				<ListGroup>
					{usersList}					
				</ListGroup>
			</Col>
			
		);
	}
};

UsersList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.object),
	dispatch: PropTypes.func.isRequired,
};

export default UsersList;