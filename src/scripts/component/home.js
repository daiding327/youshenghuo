import React from 'react';
import Carousel from '../../component_dev/carousel/src'
import {Link} from 'react-router'

class Home extends React.Component {
  constructor (props) {
    super(props)
	this.state={
		list:[<div/>],
		categery:[<div/>],
		baihuo1:[<div/>],
		baihuo2:[<div/>],
		tuijian:[<div/>]
	}
    
  }
  
  render() {
	return (
		<div className="m-home">
			<div className="swiper">
				<Carousel delay={3} dots={false}>
					{this.state.list} 
				</Carousel>
				
			</div>
			<div className="u-categery">
				{this.state.categery}
			</div>
			<Link to="/supermarket" className="supermarket">
				<img src="./images/more.jpg"/>
			</Link>
			<div className="baihuo">
				<img className="bu-top" src="images/1488980649202.jpg"/>
				{this.state.baihuo1}
				<img className="bu-bottom" src="images/1488980695836.jpg"/>
				{this.state.baihuo2}
			</div>
			<div className="tuijian">热门推荐</div>
			<div className="tuijian-item">
				{this.state.tuijian}
			</div>
		</div>
	)	
  }
  componentDidMount(){
	  fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			var arr=[];
			for(var k in res.swiper){
				arr.push(<li className="item"><Link to={res.swiper[k].lujing}><img className="img" src={res.swiper[k].img} /></Link></li>)
			}
			this.setState({
				list:arr
			})
		})
		fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			console.log(res.kind);
			var arr2=[];
			for(var k in res.kind){
				arr2.push(<Link to="/jiadian"><img className="img" src={res.kind[k]} /></Link>)
			}
			this.setState({
				categery:arr2
			})
		})
		fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			console.log(res.supermarket1);
			var arr3=[];
			for(var k in res.supermarket1){
				arr3.push(<Link to="/supermarket" className="top"><img className="img" src={res.supermarket1[k]} /></Link>)
			}
			this.setState({
				baihuo1:arr3
			})
		})
		fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			console.log(res.supermarket2);
			var arr4=[];
			for(var k in res.supermarket2){
				arr4.push(<Link to="/supermarket" className="bottom"><img className="img" src={res.supermarket2[k]} /></Link>)
			}
			this.setState({
				baihuo2:arr4
			})
		})
		fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			console.log(res.tuijian);
			var arr5=[];
			for(var k in res.tuijian){
				arr5.push(<Link to="" className="bottom" onClick={this.props.change}>
							<img className="img" src={res.tuijian[k].img} />
							<p>{res.tuijian[k].title}</p>
							<span>{res.tuijian[k].price}</span>
						  </Link>)
			}
			this.setState({
				tuijian:arr5
			})
		})
  }
}

export default Home;