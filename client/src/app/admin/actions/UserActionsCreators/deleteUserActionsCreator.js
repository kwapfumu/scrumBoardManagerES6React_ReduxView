"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';

/**ActionCreators are functions that create actions*/
/**Redux Thunk middleware allows you to write action creators that return a function instead of 
an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a 
certain condition is met. The inner function receives the store methods 'dispatch' and 'getState'
as parameters.*/
function deleteUserActionsCreator(){
	return {
		deleteUserRequestActionCreator: function deleteUserRequestActionCreator(aUserId){
			return {
				type:types.DELETE_USER,
				payload:{
					aUserId2Delete: aUserId,
					isSaving:true,					
				}
			};
		},
		deletedUserActionCreator: function deletedUserActionCreator(){
			return {
				type: types.DELETE_USER_SUCCESS,
				payload: {
					isSaving:false,										
				}		
		},
		deleteUserFailedActionCreator: function deleteUserFailedActionCreator(){
			return {
				type: types.DELETE_USER_ERROR, 
				payload:{
					aUserId2Delete:0
					isSaving:false,
				}
			};
		},
		deleteUser: function deleteUser(aUserId) {
				return (dispatch) => {
					dispatch(this.deleteUserRequestActionCreator(aUserId));
					return fetch(`${api.API_URL}/admin/users/:${aUserId}/deleteUser`, {
						method: 'DELETE',
						headers: api.API_HEADERS
					}).then(fetchResponseHandlerFctr.checkHttpErrorStatus(response))
					  .then((response) => response.json())
					  .then((json) => {
						dispatch(this.deletedUserActionCreator());
						console.log('deleted user with _id' + json);
					  })
					  .catch((error) => {
						 dispatch(deleteUserFailedActionCreator());
					     console.log('Error deleting User', error);
		              });	
		        };	
		};
		
	};
};
export default deleteUserActionsCreator;