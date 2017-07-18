"use strict";
import fetch from 'isomorphic-fetch';
import * as types from '../../../constants/constants';

 const draftTaskActionsCreators = function draftTaskActionsCreators(){
	return {
		createDraftTaskActionCreator: function createDraftTaskActionCreator(aTask){
			return {
				type: types.CREATE_DRAFT_TASK,
				payload:{aTask}
			};
		},
		updateDraftTaskActionCreator: function updateDraftTaskActionCreator(field,value){
			return {
				type: types.UPDATE_DRAFT_TASK,
				payload:{field,value}
			};
		};
	};
	
};

export default draftTaskActionsCreators;
