"use strict";
// Do this once before any other code in your app
import 'babel-polyfill';
import React, { Component } from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ScrumBoardContainer from './ScrumBoardContainer';
import HomeLayout from './home/components/HomeLayout';
import AdminLayout from './admin/components/AdminLayout';
import UsersList from './admin/components/UsersList/UsersList';
import UserDetails from './admin/components/UserDetails/UserDetails';
import AdminEditUserForm from './admin/components/AdminEditUserForm/AdminEditUserForm';
import ReleaseBacklogContainer from './releaseBacklog/containers/ReleaseBacklogContainer';
import AdminCreateTaskForm from './admin/components/AdminCreateTaskForm/AdminCreateTaskForm';
import CurrentSprintContainer from './sprints/containers/CurrentSprintContainer';
import AdminEditTaskForm from './admin/components/AdminEditTaskForm/AdminEditTaskForm';
import ReleaseBacklogLayout from './releaseBacklog/containers/ReleaseBacklogLayout';
import AnyLoggedInUserLayout from './anyLoggedInUserLayout/components/AnyLoggedInUserLayout';

import LoginForm from './login/components/LoginForm/LoginForm';
import UrlNotFound from './reusableComponents/UrlNotFound';
import store from './store';

/**This is where it all starts. This main application file includes 
the React Router,primary views, and the router configuration.**/
let scrumBoardRoutes = (
	<Route path="/" component={ ScrumBoardContainer }>
		<IndexRoute component={HomeLayout} />
		{/*admin routes*/}
		<Route path="admin" component={AdminLayout}>
			<Route path="users" component={ UsersList } />
			<Route path="users/create" component={ AddUserForm } />
			<Route path="users/:userId" component={ UserDetails } />
			<Route path="users/:userId/edit" component={ AdminEditUserForm } />
			{/*<Route path="releaseBacklog" component={ ReleaseBacklogLayout } >*/}
			<Route path="releaseBacklog" component={ ReleaseBacklogContainer } >
				<Route path="newTask" component={ AdminCreateTaskForm } />				
				<Route path="currentSprint" component={ CurrentSprintContainer } />
			</Route>
			<Route path="releaseBacklog/:taskId/edit" component={ AdminEditTaskForm } />			
			<Route path="releaseBacklog/:taskId/deleteTask" component={ ReleaseBacklogLayout } />			
		</Route>
		{/*regularUser routes*/}
		<Route path="releaseBacklog" component={AnyLoggedInUserLayout} >
			{/*<IndexRoute component={ReleaseBacklogLayout}>*/}
			<IndexRoute component={ReleaseBacklogContainer}>			
			<Route path="currentSprint" component={ CurrentSprintContainer } />
			<Route path="myTasks" component={ MyTasksContainer } />
		</Route>
		{/*account*/}
		<Route path="login" component={ LoginForm } />
		<Route path="/signup" component={ SignupForm } />
		<Route path="logout" component={ HomeLayout } />
		<Route path="*" component={ UrlNotFound } />		
	</Route>
);

//pass the Router component with some routes to React DOM render method
render(
	 <Provider store={store}>
		<Router history={createBrowserHistory()}>{scrumBoardRoutes}</Router>
	</Provider>, document.getElementById('scrumBoardApp'));