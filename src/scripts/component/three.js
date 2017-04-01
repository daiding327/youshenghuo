import React from 'react';
import {Link} from 'react-router';
class Three extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-my">
			<ul>
				<Link to="/kindindex" ref="kindindex" activeClassName="active">
							<li><a href=""><b>茗茶</b><i className="yo-ico">&#xf0343;</i></a></li>
				</Link>
				<Link to="/kindindex" ref="kindindex" activeClassName="active">
							<li><a href=""><b>生鲜</b><i className="yo-ico">&#xf0343;</i></a></li>
				</Link>
			</ul>
		</div>
	)	
  }
}

export default Three;