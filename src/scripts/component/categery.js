import React from 'react'
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'

class Categery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '榜单',
	  flag:true
    }
  }
   clickHandler(type){
	  this.setState({
		  title:this.refs[type].props.title
	  })
  }
  clickHandler1(type){
	  this.setState({
		  flag:false
	  })
  }
  
  clickHandler2(type){
	  this.setState({
		  flag:true
	  })
  }
  
  render() {
    return (
      <div className="m-categery">
		  <Scroller
			scrollY={true}
			extraClass ='yo-scroller yo-scroller-fullscreen'
		  >
			<div className="categery-head"><img src="images/1489042105406.jpg"/></div>
			<div className="categery-headbottom"><img src="images/1489042079099.jpg"/></div>
			<div className="xinbangyang-item">
				{this.state.xinbangyang}
			</div>
			<div className="categery-one"><img src="images/1489043434293.jpg"/></div>
			<ul className="categery-happy">
				{this.state.happycall}
			</ul>
		  </Scroller>
		  <footer>
				<ul>
					<li>
						<Link to="/home" ref="home" onClick={this.clickHandler2.bind(this,"home")} title="首页" activeClassName="active">
							<i className="yo-ico">&#xe6ee;</i>
							<b>首页</b>
						</Link>
					</li>
					<li>
						<Link to="/kind"  ref="kind" onClick={this.clickHandler1.bind(this,"kind")}  activeClassName="active">
							<i className="yo-ico">&#xe6bb;</i>
							<b>分类</b>
						</Link>
					</li>
					<li>
						<Link to="/cart" activeClassName="active">
							<i className="yo-ico">&#xe601;</i>
							<b>购物车</b>
						</Link>
					</li>
					<li>
						<Link to="/my"  activeClassName="active">
							<i className="yo-ico">&#xe629;</i>
							<b>我的</b>
						</Link>
					</li>
					
				</ul>
			</footer>
	  </div>
    )
  }

  componentDidMount() {
    fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			var arr1=[];
			for(var k in res.xinbangyang){
				arr1.push(<Link to="" className="bottom">
							<img className="img" src={res.xinbangyang[k].img} />
							<p>{res.xinbangyang[k].title}</p>
							<span>{res.xinbangyang[k].price}</span>
						  </Link>)
			}
			this.setState({
				xinbangyang:arr1
			})
		})
	fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			var arr2=[];
			for(var k in res.happycall){
				arr2.push(<li className="happy">
							<img className="img" src={res.happycall[k].img} />
							<div>
								<p>{res.happycall[k].title}</p>
								<span>{res.happycall[k].price}</span>
							</div>
						  </li>)
			}
			this.setState({
				happycall:arr2
			})
		})
    }
}

export default Categery