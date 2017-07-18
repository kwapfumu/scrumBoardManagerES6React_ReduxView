"use strict";
import React, { Component, PropTypes } from 'react';
import {Navbar} from 'react-bootstrap';

class Greeting extends Components{
	render(){
		return(
			<Navbar.Text pullRight>
				Hello, { this.props.currentUserName }
			</Navbar.Text>
		);
	}
};

Greeting.propTypes = {
	currentUserName: PropTypes.string.isRequired
};

export default Greeting;