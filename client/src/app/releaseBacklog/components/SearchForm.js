"use strict";
import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup,  Button, HelpBlock } from 'react-bootstrap';

/**SearchForm component(pure component, receives 2 props from the parent:) 
   filterText (string) and onUserInput (callback function)
   =>should be working
 **/
class SearchForm extends Component{	
	constructor(props) {
		super(props);
		this.state={
			value: this.props.filterText,
			helpText:'',
		};
	},
	
	getValidationState() {
		const length = this.state.value.length;
		if (length > 5) return {
			'success';			
		}else if (length > 10) return {
			'warning';
			this.setState({helpText:'task name should be no longer than 15 characters'});
		}else if (length > 15) return {
			'error';
			this.setState({helpText:'task name should be no longer than 15 characters'});
		};
	},
		
	//Receiving the callback as a prop and calling in the onChange
	//limit the user input to 15 characters:
	handleChange(e){
		this.props.onUserInput(e.target.value.substr(0, 15));
	},	
	handleKeypress(e){
		if(e.charCode === 13){
			this.props.dispatch(searchReleaseBacklogByTasknameActionCreator(this.state.value));
		};
	},
	handleSearchButtonClick(){
		this.props.dispatch(searchReleaseBacklogByTasknameActionCreator(this.props.filterText));
	},
	handleSubmit(){
		this.props.dispatch(searchReleaseBacklogByTasknameActionCreator(this.props.filterText));
	},
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<FormGroup bsSize="sm" controlId="searchFormValidation" validationState={this.getValidationState()}>
					<FormControl.Feedback />
					<InputGroup id="searchBox">
						<FormControl type="search" 
									 placeholder="Search by taskName..." 
									 {/*notifies when user input changes,eachtime input value changes handleChange will be 
									 called*/}
									 onChange={this.handleChange.bind(this)}
									 onKeyPress={this.handleKeypress.bind(this)}/>
						<InputGroup.Button>
							<Button bsStyle="default" 
							        onClick={this.handleSearchButtonClick.bind(this)}><Glyphicon glyph="search" /></Button>
						</InputGroup.Button>
					</InputGroup>
					<HelpBlock>{this.state.helpText}</HelpBlock>
				</FormGroup>
			</form>
		);
	}
};

SearchForm.propTypes = {
	onUserInput: PropTypes.func.isRequired,
	filterText: PropTypes.string.isRequired
};

export default SearchForm;