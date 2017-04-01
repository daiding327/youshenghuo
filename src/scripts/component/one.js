import React from 'react';
import {Link} from 'react-router';
class One extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-my">
			<ul>
						<Link to="/kindindex" ref="kindindex" activeClassName="active">
							<li><a href=""><b>烹饪厨具</b><i className="yo-ico">&#xf0343;</i></a></li>
						</Link>
						<Link to="/kindindex" ref="kindindex" activeClassName="active">
							<li><a href=""><b>餐具</b><i className="yo-ico">&#xf0343;</i></a></li>
						</Link>
						<Link to="/kindindex" ref="kindindex" activeClassName="active">
							<li><a href=""><b>茶具餐饮</b><i className="yo-ico">&#xf0343;</i></a></li>
						</Link>
						<Link to="/kindindex" ref="kindindex" activeClassName="active">
							<li><a href=""><b>厨房配件</b><i className="yo-ico">&#xf0343;</i></a></li>
						</Link>
			</ul>
		</div>
	)	
  }
}

export default One;