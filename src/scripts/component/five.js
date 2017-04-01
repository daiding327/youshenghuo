import React from 'react';
import {Link} from 'react-router';
class Five extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-my">
			<ul>
				<Link to="/kindindex" ref="kindindex" activeClassName="active">
					<li><a href=""><b>手机</b><i className="yo-ico">&#xf0343;</i></a></li>
				</Link>
				<Link to="/kindindex" ref="kindindex" activeClassName="active">
					<li><a href=""><b>数码配件</b><i className="yo-ico">&#xf0343;</i></a></li>
				</Link>
				<Link to="/kindindex" ref="kindindex" activeClassName="active">
					<li><a href=""><b>数码音响</b><i className="yo-ico">&#xf0343;</i></a></li>
				</Link>
			</ul>
		</div>
	)	
  }
}

export default Five;