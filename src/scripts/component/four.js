import React from 'react';
import {Link} from 'react-router';
class Four extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-my">
			<ul>
				<Link to="/kindindex" ref="kindindex" activeClassName="active">
					<li><a href=""><b>生活电器</b><i className="yo-ico">&#xf0343;</i></a></li>
				</Link>
				<Link to="/kindindex" ref="kindindex" activeClassName="active">
					<li><a href=""><b>厨房电器</b><i className="yo-ico">&#xf0343;</i></a></li>
				</Link>
				<Link to="/kindindex" ref="kindindex" activeClassName="active">
					<li><a href=""><b>个护健康</b><i className="yo-ico">&#xf0343;</i></a></li>
				</Link>
			</ul>
		</div>
	)	
  }
}

export default Four;