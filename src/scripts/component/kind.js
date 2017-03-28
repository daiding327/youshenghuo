import React from 'react';
import {Link} from 'react-router'
class Kind extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-kind">
			<div className="kindlist">
				<ul>
						<Link to="kind/one" ref="one" activeClassName="active">
							<li><a href="">家纺用品</a></li>
						</Link>
			
					<li><a href="">家纺用品</a></li>
					<li><a href="">食品生鲜</a></li>
					<li><a href="">家用电器</a></li>
					<li><a href="">手机数码</a></li>
					<li><a href="">居家生活</a></li>
				</ul>
				<div>
					{this.props.children}
				</div>			
			</div>
			
		</div>
	)	
  }
}

export default Kind;