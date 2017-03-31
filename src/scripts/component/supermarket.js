import React from 'react'
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'

class Supermarket extends React.Component {
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
		<div className="m-supermarket">
			<Scroller
				scrollY={true}
				extraClass ='yo-scroller yo-scroller-fullscreen'
			>
				<div className="supermarket-head"><img src="images/1489046337138.jpg"/></div>
				<div className="supermarket-headbottom"><img src="images/1489045695452.jpg"/></div>
				<div className="supermarket3-item">
					{this.state.supermarket3}
				</div>
				<ul className="supermarket-happy">
					{this.state.superhappycall}
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
			console.log(res.supermarket3);
			var arr1=[];
			for(var k in res.supermarket3){
				arr1.push(<Link to="" className="bottom">
							<img className="img" src={res.supermarket3[k].img} />
							<p>{res.supermarket3[k].title}</p>
							<span>{res.supermarket3[k].price}</span>
						  </Link>)
			}
			this.setState({
				supermarket3:arr1
			})
		})
	fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			console.log(res.superhappycall);
			var arr2=[];
			for(var k in res.superhappycall){
				arr2.push(<li className="happy">
							<img className="img" src={res.superhappycall[k].img} />
							<div>
								<p>{res.superhappycall[k].title}</p>
								<span>{res.superhappycall[k].price}</span>
							</div>
						  </li>)
			}
			this.setState({
				superhappycall:arr2
			})
		})
    }
}

export default Supermarket;