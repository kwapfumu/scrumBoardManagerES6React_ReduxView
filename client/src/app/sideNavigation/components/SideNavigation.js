'use strict';
/**sideNavigation component for scrumBoardManager app done with react-bootstrap**/
import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'; 
import SideNavSprintsList from './SideNavSprintsList';

class SideNavigation extends Component{
	constructor(props) {
		super(props);
		this.state = {
			showSprintsList: false
		};
	},
	
	handleSelect(selectedKey) {
		alert('selected ' + selectedKey);
	},
	
	/**toggles SideNavSprints component**/
	toggleSprintsList() {
		this.setState({showSprintsList: !this.state.showSprintsList});
	},
	
	
	render() {
		let sprintsList;
		if (this.state.showSprintsList) {
			sprintsList = (
				<SideNavSprintsList />//todo add appropriate props
			);
		};
		
		return (
			<div>
				<Nav bsStyle="pills" stacked justified pullLeft activeKey={2} onSelect={handleSelect}>
					<LinkContainer to="/users">
						<NavItem eventKey={1}>Users</NavItem>
					</LinkContainer>
					<LinkContainer to="/releaseBacklog">
						<NavItem eventKey={2}>ReleaseBacklog</NavItem>
					</LinkContainer>					
					<NavItem eventKey={3} 
					         className={this.state.showSprintsList ? "sprints_list sprints_list-is-open" : "sprints_list"}
							 onClick={this.toggleSprintsList.bind(this)}>Sprints
								<p>{sprintsList}</p>
					</NavItem>
				</Nav>
			</div>
		);
	}
};

export default SideNavigation;