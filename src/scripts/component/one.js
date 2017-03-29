import React from 'react';

class One extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-my">
			<ul>
				<li><a href=""><b>烹饪厨具</b><i className="yo-ico">&#xf0343;</i></a></li>
				<li><a href=""><b>餐具</b><i className="yo-ico">&#xf0343;</i></a></li>
				<li><a href=""><b>茶具餐饮</b><i className="yo-ico">&#xf0343;</i></a></li>
				<li><a href=""><b>厨房配件</b><i className="yo-ico">&#xf0343;</i></a></li>
			</ul>
		</div>
	)	
  }
}

export default One;