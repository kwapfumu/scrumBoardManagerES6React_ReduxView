"use strict";
import React, { Component, PropTypes } from 'react';
import NavbarScrumBoard from './navbar/components/NavbarScrumBoard';
import ContentDisplayArea from './contentDisplayArea/components/ContentDisplayArea';
import FooterScrumBoard from './footer/components/FooterScrumBoard';

class ScrumBoardAppLayout extends Component{
	constructor(props){
		super(props);
		/**no need to be in redux state koz not fetched from server*/
		this.state={
			isAdmin: false,
			isLoggedIn: false,
			showAdminNavbarFeatures: false,
		};
	},
	
	
	
	render() {
		return (
			<div className="scrumBoardAppContainer">				
				<NavbarScrumBoard isAdmin={this.state.isAdmin} 
				                  isLoggedIn={this.state.isLoggedIn} 
								  showAdminFeatures={this.state.showAdminNavbarFeatures}/>
				<ContentDisplayArea isAdmin={this.state.isAdmin} 
				                    isLoggedIn={this.state.isLoggedIn} />		
				<FooterScrumBoard />
			</div>
		);
	};
};

ScrumBoardAppLayout.propTypes = {
	isAdmin: PropTypes.bool.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	showAdminFeatures: PropTypes.bool.isRequired
};

export default ScrumBoardAppLayout;