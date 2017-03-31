import React from 'react';

class Random extends React.Component {
  constructor (props) {
    super(props)
    this.state={
    	salelist:[]
    	
    }
  }
  
  render() {
	return (
		<div className="box">
			{this.state.salelist} 
			
		</div>
	)	
  }

	componentDidMount(){	  	
		fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			var add=[];	
			var sale=[];
			for(var k in res.guo){
				add.push(res.guo[k]);	
				var randomsort = function (obj1, obj2) {
				    var val1 = obj1.price;
				    var val2 = obj2.price;
				        return Math.random()>0.5 ? -1 : 1;  
				//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1  
				}  
			}	
			add.sort(randomsort)
				for(var i in add){
					sale.push(
						<div className="small">
							<img src={add[i].img} alt=""/>
							<p>
								<h3>{add[i].title}</h3>
								<span>￥{add[i].price}.00<span>{add[i].sales}人评价</span></span>
							</p>
						</div>
					)
				}  
			this.setState({
				salelist:sale
			})	
		})		
	}
}


export default Random;