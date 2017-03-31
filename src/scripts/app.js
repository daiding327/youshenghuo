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
import Sales from './component/sales.js'
import Jiage from './component/jiage.js'
import Random from './component/random.js'

import Supermarket from './component/supermarket.js'
import Lunone from './component/lunone.js'
import Jiadian from './component/categery.js'
import Xiang from './component/xiang.js'

import Login from './component/login.js'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Index}>
				<IndexRedirect to="/home"  bgcolor="rgba(0,0,0,0.3)"></IndexRedirect>
				<Route path="home"  bgcolor="rgba(0,0,0,0.3)" component={Home}></Route>
				<Route path="kind" bgcolor="rgba(255,92,80,1)" component={Kind}>
					<IndexRedirect to="one"></IndexRedirect>
					<Route path="one" component={One}></Route>
					<Route path="two" component={Two}></Route>
					<Route path="three" component={Three}></Route>
					<Route path="four" component={Four}></Route>
					<Route path="five" component={Five}></Route>
					<Route path="six" component={Six}></Route>
				</Route>
				<Route path="cart" component={Cart}></Route>
				<Route path="kindindex" component={Kindindex}>
					<IndexRedirect to="moren"></IndexRedirect>
					<Route path="moren" component={Moren}></Route>
					<Route path="sales" component={Sales}></Route>
					<Route path="jiage" component={Jiage}></Route>
					<Route path="random" component={Random}></Route>
				</Route>
			</Route>
			<Route path="cart" component={Cart}></Route>
			<Route path="my" component={My}></Route>


			  <Route path="login" component={Login}> 
			</Route>    

			<Route path="/lunone" component={Lunone}></Route>
			<Route path="jiadian" component={Jiadian}></Route>
			<Route path="supermarket" component={Supermarket}></Route>
			<Route path="xiang" component={Xiang}></Route>
		</Router>
		</Provider>,

	document.getElementById('root')
)