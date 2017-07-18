'use strict';
//list that gets the number of sprints from somewhere
//list that gets current sprint using date.now();
//TODO: get sprints list from somewhere...
import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'; 

class SideNavSprintsList extends Component({	
	function alertClicked() {
		alert('You clicked the third ListGroupItem');
	},
	 function giveCurrentSprintName(){
	  
	 },
	render() {
		return (
			<ListGroup>
				<ListGroupItem href="#link1">Sprint 1</ListGroupItem>
				<ListGroupItem href="#link2">Link 2</ListGroupItem>
				<ListGroupItem onClick={alertClicked}>CurrentSprint</ListGroupItem>
			</ListGroup>
		);
	}
});

export default SideNavSprintsList;