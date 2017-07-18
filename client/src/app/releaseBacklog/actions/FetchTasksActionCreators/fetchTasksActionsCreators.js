"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';
import * as api from '../../../constants/ApiConstants';
import fetchResponseHandlerFctr from '../../../fetchResponseHandlerFctr';

function fetchTasksActionsCreators(){
	return {
		/**ActionCreators are functions that create actions*/
		requestTasks: function requestTasks(){
			return {
				type: types.FETCH_TASKS,
				payload:{
					isFetching: true,
					didInvalidate: false
				}
			};	
		},
		/**when the network request comes through, we will dispatch FETCH_TASKS_SUCCESS*/
		receivedTasks: function receivedTasks(json) {
			return { 
				type: types.FETCH_TASKS_SUCCESS, 
				payload: {
					isFetching: false,
					backlogTasks:json.data.children.map((child) => child.data)
					//receivedAt: Date.now()
				}				
			};
		},
		fetchTasksFailed: function fetchTasksFailed() {
			return { 
				type: types.FETCH_TASKS_ERROR, 
				payload: {
					isFetching: false,
					didInvalidate:true					
				} 
			};
		},
		
		fetchTasks: function fetchTasks() {
			//returns a function(that accepts `dispatch` so we can dispatch later) instead of an action
			return (dispatch) => { 
				dispatch(this.requestTasks());
				return fetch(`${api.API_URL}/releaseBacklog`, {headers:api.API_HEADERS})
						.then(fetchResponseHandlerFctr.checkHttpErrorStatus(response))
						.then((response) => response.json())
						.then((json) => dispatch(this.receivedTasks(json)))
						.catch((error) => {
							dispatch(this.fetchTasksFailed());
							console.log('Error fetching data', error);
						});	
			};
		};

	};
};
export fetchTasksActionsCreators;