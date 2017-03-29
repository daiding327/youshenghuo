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
import Two from './component/two.js'
import Three from './component/three.js'
import Four from './component/four.js'
import Five from './component/five.js'
import Six from './component/six.js'
import Kindindex from './component/kindindex.js'
import Moren from './component/moren.js'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/home"></IndexRedirect>
			<Route path="home" component={Home}></Route>
			<Route path="kind" component={Kind}>
				<IndexRedirect to="one"></IndexRedirect>
				<Route path="one" component={One}></Route>
				<Route path="two" component={Two}></Route>
				<Route path="three" component={Three}></Route>
				<Route path="four" component={Four}></Route>
				<Route path="five" component={Five}></Route>
				<Route path="six" component={Six}></Route>
			</Route>
			<Route path="cart" component={Cart}></Route>
			<Route path="my" component={My}></Route>
			<Route path="kindindex" component={Kindindex}>
				<Route path="moren" component={Moren}></Route>
			</Route>
		</Route>
	</Router>,
	document.getElementById('root')
)