import React from 'react';

class Three extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-my">
			<ul>
				<li><a href=""><b>茗茶</b><i className="yo-ico">&#xf0343;</i></a></li>
				<li><a href=""><b>生鲜</b><i className="yo-ico">&#xf0343;</i></a></li>
			</ul>
		</div>
	)	
  }
}

export default Three;