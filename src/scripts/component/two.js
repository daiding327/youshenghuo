import React from 'react';

class Two extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-my">
			<ul>
				<li><a href=""><b>床上用品</b><i className="yo-ico">&#xf0343;</i></a></li>
				<li><a href=""><b>洗护用品</b><i className="yo-ico">&#xf0343;</i></a></li>
			</ul>
		</div>
	)	
  }
}

export default Two;