import React from 'react';
import {Link} from 'react-router'
class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.tiaozhuan=this.tiaozhuan.bind(this)
	this.reduce=this.reduce.bind(this)
	this.add=this.add.bind(this)
	this.state={
		flag:false,
		list:[<div/>],
		value:1
	}
  }
  reduce () {
	  var num=this.state.value;
	  if(num>0){
		  num--;
	  }else{
		  num=0
	  }
	  
	  this.setState({
		  value:num
	  })
  }
  add () {
	  var num=this.state.value;
		  num++;
	  this.setState({
		  value:num
	  })
  }
  componentWillMount(){
	  var userID=localStorage.userID;
	  if(userID){
		  var url="./data/data.json";
		  fetch(url)
		  .then(response=>response.json())
			.then(res=>{
				console.log(res.cart);
				this.setState({
				  flag:true,
				  list:res.cart
			  })
			})
		  
	  }else{
		  this.setState({
			  flag:false
		  })
	  }
  }
  render() {
	return (
		<div className="m-cart">
			<div className="goodswu" style={{display:this.state.flag==false?'block':'none'}}>
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
			<div className="goodscun"  style={{display:this.state.flag==false?'none':'block'}}>
				<div className="cart-head">我的购物车</div>
				<div className="goods-item">
					<img src={this.state.list.img}/>
					<div>
						<p>{this.state.list.title}</p>
						<div className="jiage">
							<span>{this.state.list.price}</span>
							<div><span onClick={this.reduce}>-</span><input type="text" value={this.state.value}/><span onClick={this.add}>+</span></div>
						</div>
					</div>
				</div>
				<div className="jiesuan">
					<div className="jie-jia">
						<p >合计:<span>￥{this.state.value*199}.00</span></p>
						<p>优惠:<span>￥0</span></p>
					</div>
					<div className="jie-tiao">
						结算({this.state.value})
					</div>
				</div>
			</div>

		</div>
	)	
  }
	tiaozhuan () {
		window.location.href="#/my"
	}	

}

export default Cart;