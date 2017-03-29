import React from 'react';

class Four extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-my">
			<ul>
				<li><a href=""><b>生活电器</b><i className="yo-ico">&#xf0343;</i></a></li>
				<li><a href=""><b>厨房电器</b><i className="yo-ico">&#xf0343;</i></a></li>
				<li><a href=""><b>个护健康</b><i className="yo-ico">&#xf0343;</i></a></li>
			</ul>
		</div>
	)	
  }
}

export default Four;