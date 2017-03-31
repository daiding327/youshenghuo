import React from 'react'
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'

class Lunone extends React.Component {
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
      <div className="m-lunone">
		  <Scroller
			scrollY={true}
			extraClass ='yo-scroller yo-scroller-fullscreen'
		  >
			<div className="one-head"><img src="images/1488976644570.jpg"/></div>
			<div className="one-headbottom"><img src="images/1488972089446.jpg"/></div>
			<div className="one-itemone"><img src="images/1489020562373.jpg"/></div>
			<div className="one-itemtwo"><img src="images/1488972119122.jpg"/></div>
			<div className="one-itemthree"><img src="images/1488972130712.jpg"/></div>
			<div className="one-itemfour"><img src="images/1488972138428.jpg"/></div>
			<div className="one-itemfive"><img src="images/1488972148729.jpg"/></div>
			<div className="one-itemsix"><img src="images/1488972157337.jpg"/></div>
			<div className="one-itemseven"><img src="images/1488972174756.jpg"/></div>
			<div className="one-itemeight"><img src="images/1488972190149.jpg"/></div>
			<div className="one-itemnine"><img src="images/1488972201709.jpg"/></div>
			<div className="one-itemten"><img src="images/1488972210342.jpg"/></div>
			
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
    
  }
  
}

export default Lunone