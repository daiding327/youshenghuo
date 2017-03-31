import React from 'react';

class Jiage extends React.Component {
  constructor (props) {
    super(props)
    this.state={
    	pricelist:[]
    }
  }
  
  render() {
	return (
		<div className="box">
			{this.state.pricelist} 
			
		</div>
	)	
  }

	componentDidMount(){	  	
		fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			var ass=[];	
			var aee=[];
			for(var k in res.guo){
				ass.push(res.guo[k]);	
				var compare1 = function (obj1, obj2) {
				    var val1 = obj1.price;
				    var val2 = obj2.price;

				   if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
			            val1 = Number(val1);
			            val2 = Number(val2);
			        }
			        if (val1 < val2) {
			            return -1;
			        } else if (val1 > val2) {
			            return 1;
			        } else {
			            return 0;
			        } 
				}
				ass.sort(compare1) 
			}	
				for(var i in ass){
					aee.push(
						<div className="small">
							<img src={ass[i].img} alt=""/>
							<p>
								<h3>{ass[i].title}</h3>
								<span>￥{ass[i].price}.00<span>{ass[i].sales}人评价</span></span>
							</p>
						</div>
					)
				}  
			this.setState({
				pricelist:aee
			})	
		})	
	}
	
}


export default Jiage;