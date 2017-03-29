import React from 'react';

class Five extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-my">
			<ul>
				<li><a href=""><b>手机</b><i className="yo-ico">&#xf0343;</i></a></li>
				<li><a href=""><b>数码配件</b><i className="yo-ico">&#xf0343;</i></a></li>
				<li><a href=""><b>数码音响</b><i className="yo-ico">&#xf0343;</i></a></li>
			</ul>
		</div>
	)	
  }
}

export default Five;