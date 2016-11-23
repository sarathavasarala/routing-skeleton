import React from 'react'
import {render} from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import './bootstrap.min.css'
import './main.scss'

const Website = () => {
	return (
			<Router history={ browserHistory }>
				<Route path = "/" component = {App}>
					<IndexRoute component={Home}/>
					<Route path = "/about" getComponent={(nextState, callback) => {
                        require.ensure([], function(require) {
                            callback(null, require('./About').default);
                        })
                    }}/>
					<Route path = "/profile"  getComponent={(nextState, callback) => {
                        require.ensure([], function(require) {
                            callback(null, require('./Profile').default);
                        })
                    }}/>
				</Route>
			</Router>
		)
}

render(<Website/>, document.getElementById('react-container'))