import React from 'react'
import {Link} from 'react-router'
class Kindindex extends React.Component {
  constructor (props) {
    super(props)
    
  }

  render() {
    return (
      <div className="m-kindindex">
			<ul id="ul">
					<li><Link to="kindindex/moren" ref="moren" activeClassName="active">默认</Link></li>
					<li><Link to="kindindex/sales" ref="sales" activeClassName="active">销量<span></span></Link></li>
					<li><Link to="kindindex/jiage" ref="jiage" activeClassName="active">价格<span></span></Link></li>
					<li><Link to="kindindex/random"  activeClassName="active"><i className="yo-ico">&#xe60b;</i></Link></li>
			</ul>
			<div className="bot">
					{this.props.children}
			</div>
	  </div>
    )
  }

  
}

export default Kindindex