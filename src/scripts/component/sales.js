import React from 'react';

class Sales extends React.Component {
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
				var compare = function (obj1, obj2) {
				    var val1 = obj1.sales;
				    var val2 = obj2.sales;

				   if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
			            val1 = Number(val1);
			            val2 = Number(val2);
			        }
			        if (val1 > val2) {
			            return -1;
			        } else if (val1 < val2) {
			            return 1;
			        } else {
			            return 0;
			        } 
				} 
				add.sort(compare)
			}			 	
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


export default Sales;