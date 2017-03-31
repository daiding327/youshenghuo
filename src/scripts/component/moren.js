import React from 'react';

class Moren extends React.Component {
  constructor (props) {
    super(props)
    this.state={
    	list:[]
    }
  }
  
  render() {
	return (
		<div className="box">
			{this.state.list} 
			
		</div>
	)	
  }
	componentDidMount(){
	  	fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			var arr=[];
			for(var k in res.guo){
				arr.push(
						<div className="small">
							<img src={res.guo[k].img} alt=""/>
							<p>
								<h3>{res.guo[k].title}</h3>
								<span>￥{res.guo[k].price}.00<span>{res.guo[k].sales}人评价</span></span>
							</p>
						</div>
					)
			}
			this.setState({
				list:arr
			})
		})	
	} 
}


export default Moren;