import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './containers/Home/Home';
import About from './containers/About/About';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</Switch>
	</Router>
);
export default Routes;
