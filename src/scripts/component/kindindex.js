import React from 'react'
import {Link} from 'react-router'
class Kindindex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '榜单'
    }
  }
  clickHandler(type){
	  this.setState({
		  title:this.refs[type].props.title
	  })
  }
  render() {
    return (
      <div className="m-kindindex">
			<ul id="ul">
					<li><Link to="kindindex/moren" ref="moren" activeClassName="active">默认</Link></li>
					<li><Link to="kindindex/moren" ref="moren" activeClassName="active">销量</Link></li>
					<li><Link to="kindindex/moren" ref="moren" activeClassName="active">价格</Link></li>
					<li><Link to="kindindex/moren" ref="moren" activeClassName="active"><i className="yo-ico">&#xe603;</i></Link></li>
			</ul>
			<div className="bot">
				
					{this.props.children}
					
				
			</div>
	  </div>
    )
  }

  
}

export default Kindindex