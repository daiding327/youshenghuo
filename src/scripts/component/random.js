import React from 'react';
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'
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