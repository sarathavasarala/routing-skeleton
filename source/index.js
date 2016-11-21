import React from 'react'
import {render} from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import About from './About'
import './bootstrap.min.css'
import './main.scss'

const Hello = () => {
	return (
			<Router history={ browserHistory }>
				<Route path = "/" component = {App}>
					<IndexRoute component={Home}/>
					<Route path = "/about" component = { About }/>
				</Route>
			</Router>
		)
}

render(<Hello/>, document.getElementById('react-container'))