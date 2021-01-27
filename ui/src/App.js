import React from "react"
import { HashRouter as HashRouter, Switch } from 'react-router-dom'
// import { history } from './utils'

import './styles/global.scss'
import 'typicons.font/src/font/typicons.css'

import AppRoute from './components/routes';
import BaseLayout from './components/layouts/basic';
import EmptyLayout from './components/layouts/basic';

import Home from './views/home/home'
import NotFound from './views/errors/404'

function App() {
	return (
		<HashRouter>
			<Switch>
				<AppRoute exact layout={BaseLayout} path="/" component={Home} />
				<AppRoute exact layout={EmptyLayout} component={NotFound} />
			</Switch>
		</HashRouter>
		)
}

export default App;
