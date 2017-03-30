import React from 'react'
import {Link} from 'react-router'

class Categery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      xinbangyang:[<div/>],
	  happycall:[<div/>]
    }
  }
  
  render() {
    return (
      <div className="m-categery">
		<div className="categery-head"><img src="images/1489042105406.jpg"/></div>
		<div className="categery-headbottom"><img src="images/1489042079099.jpg"/></div>
		<div className="xinbangyang-item">
			{this.state.xinbangyang}
		</div>
		<div className="categery-one"><img src="images/1489043434293.jpg"/></div>
		<ul className="categery-happy">
			{this.state.happycall}
		</ul>
	  </div>
    )
  }

  componentDidMount() {
    fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			console.log(res.xinbangyang);
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
			console.log(res.happycall);
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