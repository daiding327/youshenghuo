import React from 'react'
import {Link} from 'react-router'
import Carousel from '../../component_dev/carousel/src'
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'

class Xiang extends React.Component {
  constructor (props) {
    super(props)
	this.state={
		list:[<div/>]
	} 
  }
 
  render() {
    return (
      <div className="m-xiang">
		  <header>
			<div className="font"><i className="yo-ico">&#xe630;</i></div>
			<div className="info">商品详情</div>
			<div className="font"><i className="yo-ico">&#xe60e;</i></div>
		  </header>
		  <Scroller
			scrollY={true}
			extraClass ='yo-scroller yo-scroller-fullscreen'
		  >
			<Carousel delay={3}>
				{this.state.list} 
			</Carousel>
			
			
			
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
							<i className="yo-ico">&#xe652;</i>
							<b>收藏</b>
						</Link>
					</li>
					<li className="jiarugou">
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
  }
  
}

export default Xiang