import React from 'react'
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'

class Supermarket extends React.Component {
  constructor (props) {
    super(props)
    this.state={
		supermarket3:[<div/>],
		superhappycall:[<div/>]
		
	}
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