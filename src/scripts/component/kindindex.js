import React from 'react'
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'
import List from '../../component_dev/list/src'
class Kindindex extends React.Component {
  constructor (props) {
    super(props)
    
  }

  render() {
    return (
    	
      <div className="m-kindindex">
      	
			<ul id="ul">
					<li><Link to="kindindex/moren" ref="moren" activeClassName="active">默认</Link></li>
					<li><Link to="kindindex/sales" ref="sales" activeClassName="active">销量<span></span></Link></li>
					<li><Link to="kindindex/jiage" ref="jiage" activeClassName="active">价格<span></span></Link></li>
					<li><Link to="kindindex/random"  activeClassName="active"><i className="yo-ico">&#xe60b;</i></Link></li>
			</ul>
			
			<div className="bot yo-flex">
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
					{this.props.children}
				</Scroller>			
			</div>

			
	  </div>
	  
    )
  }

  
}

export default Kindindex