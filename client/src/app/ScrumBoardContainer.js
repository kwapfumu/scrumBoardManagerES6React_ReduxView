"use strict";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';
import ScrumBoardAppLayout from './ScrumBoardAppLayout';


/**ScrumBoardContainer responsible for fetching data from the server**/
class ScrumBoardContainer extends Component {
	constructor(){
		super(...arguments);		
	},
	/**mapStateToProps that tells how to transform the current Redux store state into the props you want to 
	pass to a presentational component you are wrapping*/
	const mapStateToProps = (state, ownProps) => {
		return {
			scrumboardUsers: state.users
		};
	};
	
	/**mapDispatchToProps() receives the dispatch() method and returns callback props that you want 
	to inject into the presentational component*/
	const mapDispatchToProps = (dispatch, ownProps) => {
		return {			
			            
		};
	};
	
	render() {
		return (
			<ScrumBoardAppLayout />
		);		
	}
};
	
const ScrumBoardContainer = connect(mapStateToProps, mapDispatchToProps)(ScrumBoardAppLayout);
export default ScrumBoardContainer;
