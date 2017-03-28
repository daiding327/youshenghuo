import React from 'react';
import Carousel from '../../component_dev/carousel/src'

class Home extends React.Component {
  constructor (props) {
    super(props)
	this.state={
		list:[<div/>]
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
		</div>
	)	
  }
  componentDidMount(){
	  fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			console.log(res.swiper);
			var arr=[];
			for(var k in res.swiper){
				arr.push(<li className="item"><img className="img" src={res.swiper[k]} /></li>)
			}
			this.setState({
				list:arr
			})
		})
  }
}

export default Home;