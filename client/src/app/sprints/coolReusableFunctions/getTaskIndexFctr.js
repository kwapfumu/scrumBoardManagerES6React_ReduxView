"use strict";
import Store from '../../../Store';
import babel-polyfill;

const getTaskIndexFctr =  function getTaskIndexFctr(){
	let tasksArray =[];
	Object.assign(tasksArray, Store.getState().backlogTasks);
	return{
		getTaskIndex:function getTaskIndex(someTaskId){
			return{
				let aTaskIndex = tasksArray.findIndex((aTask) => aTask._id === someTaskId);
				return aTaskIndex;
			};
		};
	};
};

export default getTaskIndexFctr;