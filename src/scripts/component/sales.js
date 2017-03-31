import React from 'react';
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'
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
			<Scroller
					scrollY={true}
					className="flex"
					ref="scroller"
					usePullRefresh={true}
					onRefresh={() => {
						// 刷新数据 start
						// ...
						// 刷新数据 end

						this.refs.scroller.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后
					}}
					useLoadMore={true}
					onLoad={() => {
							// 加载数据 start
						// ...
						// 加载数据 end

						this.refs.scroller.stopLoading(true); // 这个调用也可以放在异步操作的回调里之后
					}}
				>
			{this.state.salelist} 
			</Scroller>
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
				for(var i=0;i<10;i++){
					sale.push(
						<div className="small">
							<Link to="/xiang"  activeClassName="active">
								<img src={add[i].img} alt=""/>
								<p>
									
									<h3>{add[i].title}</h3>
									<span>￥{add[i].price}.00<span>{add[i].sales}人评价</span></span>
									
								</p>
							</Link>
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