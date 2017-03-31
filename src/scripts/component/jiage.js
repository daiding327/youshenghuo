import React from 'react';
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'
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
			{this.state.pricelist} 
			</Scroller>
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
							<Link to="/xiang"  activeClassName="active">
							<img src={ass[i].img} alt=""/>
							<p>
								<h3>{ass[i].title}</h3>
								<span>￥{ass[i].price}.00<span>{ass[i].sales}人评价</span></span>
							</p>
							</Link>
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