import React from 'react';
import {Link} from 'react-router'
import Scroller from '../../component_dev/scroller/src'

class Kind extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-kind">
			<Scroller
				scrollY={true}
				extraClass ='yo-scroller yo-scroller-fullscreen'
			>
				<div className="kindlist">
					<ul>	
							<Link to="kind/one" ref="one" activeClassName="active">
								<li>厨房用品</li>
							</Link>
							<Link to="kind/two" ref="two" activeClassName="active">
								<li>家纺用品</li>
							</Link>
							<Link to="kind/three" ref="three" activeClassName="active">
								<li>食品生鲜</li>
							</Link>
							<Link to="kind/four" ref="four" activeClassName="active">
								<li>家用电器</li>
							</Link>
							<Link to="kind/five" ref="five" activeClassName="active">
								<li>手机数码</li>
							</Link>
							<Link to="kind/six" ref="six" activeClassName="active">
								<li>居家生活</li>
							</Link>
				
				
						
					</ul>
					<div>
						{this.props.children}
					</div>			
				</div>
			</Scroller>	
		</div>
	)	
  }
}

export default Kind;