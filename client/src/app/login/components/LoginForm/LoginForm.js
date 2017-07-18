"use strict";
import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, Col, FormControl} from 'react-bootstrap';
import checkEmailValidity from '../../coolReusableFunctions/checkEmailValidity';
import logInUserActionsCreator from '../actions/LogInUserActionsCreators/logInUserActionsCreator';

class LoginForm extends Component{
	getInitialState(){
		return {
			value:''
		};
	},
	getEmailValidationState(){
		let emailValid = checkEmailValidity.checkEmail(this.state.value);
		if(emailValid === true){
			return 'success';
		}else{
			return 'error';
		};
	},
	handleChange(e){
		this.setState({value:e.target.value});
	},
	handleSubmit(e){
		e.preventDefault();
		this.props.dispatch(logInUserActionsCreator(this.state));
		this.props.history.pushState(null,'/releaseBacklog');
	},
	render(){
		return(
			<Form horizontal onSubmit={this.handleSubmit}>
				<FormGroup controlId="formHorizontalEmail" 
				           validationState={this.getEmailValidationState}>
					<Col sm={6} md={6} lg={6}>
						<FormControl type="email" 
									 placeholder="email" 
									 value={this.state.value} 
									 onChange={this.handleChange}/>
						<HelpBlock>Help text with validation state.</HelpBlock>
					</Col>
				</FormGroup>
				{' '}
				<FormGroup controlId="formHorizontalPassword" >
					<Col sm={6} md={6} lg={6}>
						<FormControl type="password" 
						             placeholder="password" 
									 value={this.state.value} 
									 onChange={this.handleChange}/>
					</Col>
				</FormGroup>				
				{' '}
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit">SignIn</Button>
					</Col>
				</FormGroup>
			</Form>
		);
	};
};
LoginForm.propTypes = {
	dispatch: PropTypes.func.isRequired,
};
export default LoginForm;