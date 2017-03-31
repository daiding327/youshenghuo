import React from 'react';
import {Link} from 'react-router'
class Cart extends React.Component {
  constructor (props) {
    super(props)
    	this.tiaozhuan=this.tiaozhuan.bind(this)
  }
  
  render() {
	return (
		<div className="m-cart">

			<h2>我的购物车</h2>
			<div className="tishi">
				<button onClick={this.tiaozhuan}>登 录</button>
				<span>登录后可同步购物车里的商品哦</span>
			</div>
			<div className="center">
				<img src="images/cart.png" alt="" />
				<h3>您的购物车空空如也，快去装满它！</h3>
				<Link to="kindindex/moren" ref="moren" activeClassName="active">
					<button>去逛逛</button>
				</Link>
			</div>	

			

		</div>
	)	
  }
	tiaozhuan () {
		window.location.href="#/my"
	}	

}

export default Cart;