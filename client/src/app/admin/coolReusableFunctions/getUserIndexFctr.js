"use strict";
import ScrumBoardStore from '../../../ScrumBoardStore';
import babel-polyfill;

const getUserIndexFctr = function getUserIndexFctr(){
	let usersArray =[];
	Object.assign(usersArr, ScrumBoardStore.getState().users);
	return{
		getUserIndex: function getUserIndex(someUserId){
			let aUserIndex = usersArray.findIndex((aUser) => aUser._id === someUserId );
			return aUserIndex;
		};
	};
};

export default getUserIndexFctr;