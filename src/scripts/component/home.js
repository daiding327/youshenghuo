import React from 'react';
import Carousel from '../../component_dev/carousel/src'
import {Link} from 'react-router'

class Home extends React.Component {
  constructor (props) {
    super(props)
	this.state={
		list:[<div/>],
		categery:[<div/>]
	}
    
  }
  
  render() {
	return (
		<div className="m-home">
			<div className="swiper">
				<Carousel delay={3} dots={false}>
					{this.state.list} 
				</Carousel>
				<div className="u-categery">
					{this.state.categery}
				</div>
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
				arr.push(<li className="item"><img className="img" src={res.swiper[k]} /></li>)
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
  }
}

export default Home;