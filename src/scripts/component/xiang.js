import React from 'react'
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
import Modal from '../../component_dev/modal/src/'
import Carousel from '../../component_dev/carousel/src'

class Xiang extends React.Component {
  constructor (props) {
    super(props)
	this.change=this.change.bind(this)
	this.changecity=this.changecity.bind(this)
	this.tui=this.tui.bind(this)
	this.tiao=this.tiao.bind(this)
	this.changecolor=this.changecolor.bind(this)
	this.jia=this.jia.bind(this)
	this.hide=this.hide.bind(this)
	this.state={
		list:[<div/>],
		item:{
			"title":"大润窑 汝窑8头茶具",
			"price":"￥199.00",
			"caizhi":"茶餐材质：汝窑",
			"city":"江苏苏州市昆山市",
			"mian":"支持10免运费"
		},
		flag:false,
		flag5:false,
		city:[<div/>],
		title:"江苏苏州市昆山市",
		show:false,
		xianshi:"请先登录哦"
	} 
  }
  hide(){
	  this.setState({
		  show:!this.state.show
	  })
  }
  jia () {
	   var userID=localStorage.userID;
	   if(userID){
		   var url="http://datainfo.duapp.com/shopdata/updatecar.php?userID=userID&goodsID=12&number=1";
		  fetch(url)
		  .then(response=>response.json())
			.then(res=>{
				console.log(res);
				this.setState({
					xianshi:"加入购物车成功",
					show:!this.state.show
				})
			})
	   }else{
		   this.setState({
				xianshi:"请先登录哦",
				show:!this.state.show
			})
		  // window.location.href="#/my"
		   
	   }
	  
  }
  change () {
	  this.setState({
		  flag:!this.state.flag
	  })
  }
  changecolor (){
	  this.setState({
		  flag5:!this.state.flag5
	  })
  }
  tui () {
	  window.location.href="#/home"
  }
  tiao () {
	  window.location.href="#/my"
  }
  changecity (e) {
	  var aaa=e.target.innerHTML;
	  this.setState({
		  title:aaa,
		  flag:!this.state.flag
	  })
  }
  render() {
    return (
      <div className="m-xiang">
		<Modal
			show={this.state.show}
		>
			<p onClick={this.hide}>{this.state.xianshi}</p>
		</Modal>
		  <header>
			<div className="font" onClick={this.tui}><i className="yo-ico">&#xe630;</i></div>
			<div className="info">商品详情</div>
			<div className="font" onClick={this.tiao}><i className="yo-ico">&#xe60e;</i></div>
		  </header>
		  <Scroller
			scrollY={true}
			extraClass ='yo-scroller yo-scroller-fullscreen'
		  >
			<Carousel delay={3}>
				{this.state.list} 
			</Carousel>
			<div className="xiang-title">
				<p>{this.state.item.title}</p>
				<span>{this.state.item.price}</span>
			</div>
			<div className="xiang-caizhi">
				<span>已选</span>
				<span className="cai">{this.state.item.caizhi}</span>
				<span><i className="yo-ico">&#xf0343;</i></span>
			</div>
			<div className="xiang-dizhi">
				<span>送至</span>
				<span className="cai" onClick={this.change}>{this.state.title}</span>
				<span><i className="yo-ico">&#xe612;</i></span>
			</div>
			<div className="xiang-fei">
				<span>运费</span>
				<span className="cai"><span className="bao">包</span>{this.state.item.mian}</span>
			</div>
			<div className="xiang-pingjia">
				<span>商品评价</span>
				<span className="cai">0人评论<i className="yo-ico">&#xf0343;</i></span>
			</div>
			<div className="xiang-wu">
				<span>暂无商品评论</span>
			</div>
		  </Scroller>
		  <footer>
				<ul>
					<li>
						<Link to="/cart" activeClassName="active">
							<i className="yo-ico">&#xe601;</i>
							<b>购物车</b>
						</Link>
					</li>
					<li>
						<Link to="" activeClassName="active">
							<i className="yo-ico" onClick={this.changecolor} style={{color:this.state.flag5==false?'#000':'yellow'}}>&#xe652;</i>
							<b>收藏</b>
						</Link>
					</li>
					<li className="jiarugou" onClick={this.jia}>
						<Link to="" activeClassName="active">
							<b>加入购物车</b>
						</Link>
					</li>
					<li className="lijigou">
						<Link to="/my"  activeClassName="active">
							<b>立即购</b>
						</Link>
					</li>
					
				</ul>
			</footer>
			<div className="container" style={{display:this.state.flag==false ? 'none' : 'block'}}>
				<div className="city-head">
					<span className="qu" onClick={this.change}>取消</span>
					<span>请选择省</span>
				</div>
				<Scroller
					scrollY={true}
					extraClass ='yo-scroller yo-scroller-fullscreen'
				>
				{this.state.city}
				</Scroller>
			</div>
	  </div>
    )
  }

  componentDidMount() {
      fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			var arr=[];
			for(var k in res.xiang){
				arr.push(<li className="item"><Link to=""><img className="img" src={res.xiang[k]} /></Link></li>)
			}
			this.setState({
				list:arr
			})
		})
	fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			var arr1=[];
			for(var k in res.cityitem){
				arr1.push(<li className="cityitem" onClick={this.changecity}>{res.cityitem[k]}</li>)
			}
			this.setState({
				city:arr1
			})
		})
  }
  
}

export default Xiang;