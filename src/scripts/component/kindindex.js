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
			<ul>

					<li><Link to="kindindex/moren" ref="moren" activeClassName="active">默认</Link></li>
				
				
				<li className="befo">销量</li>
				<li className="befo">价格</li>
				<li className="befo"><i className="yo-ico">&#xe603;</i></li>
			</ul>
			<div className="bot">
				
					{this.props.children}
					
				
			</div>
	  </div>
    )
  }

  
}

export default Kindindex