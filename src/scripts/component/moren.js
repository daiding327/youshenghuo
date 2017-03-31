import React from 'react';
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'
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
			{this.state.list} 
			</Scroller>
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
							<Link to="/xiang"  activeClassName="active">
							<img src={res.guo[k].img} alt=""/>
							<p>
								<h3>{res.guo[k].title}</h3>
								<span>￥{res.guo[k].price}.00<span>{res.guo[k].sales}人评价</span></span>
							</p>
							</Link>
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