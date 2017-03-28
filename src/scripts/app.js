require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,IndexRoute,IndexRedirect,hashHistory} from 'react-router'

import Index from './component/index.js'
import Kind from './component/kind.js'
import Cart from './component/cart.js'
import Home from './component/home.js'
import My from './component/my.js'
import One from './component/one.js'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/home"></IndexRedirect>
			<Route path="home" component={Home}></Route>
			<Route path="kind" component={Kind}>
				<Route path="one" component={One}></Route>
			</Route>
			<Route path="cart" component={Cart}></Route>
			<Route path="my" component={My}></Route>
		</Route>
	</Router>,
	document.getElementById('root')
)