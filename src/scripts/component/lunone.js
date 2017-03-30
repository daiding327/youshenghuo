import React from 'react'
import {Link} from 'react-router'

class Lunone extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '榜单'
    }
  }
  
  render() {
    return (
      <div className="m-lunone">
		<div className="one-head"><img src="images/1488976644570.jpg"/></div>
		<div className="one-headbottom"><img src="images/1488972089446.jpg"/></div>
		<div className="one-itemone"><img src="images/1489020562373.jpg"/></div>
		<div className="one-itemtwo"><img src="images/1488972119122.jpg"/></div>
		<div className="one-itemthree"><img src="images/1488972130712.jpg"/></div>
		<div className="one-itemfour"><img src="images/1488972138428.jpg"/></div>
		<div className="one-itemfive"><img src="images/1488972148729.jpg"/></div>
		<div className="one-itemsix"><img src="images/1488972157337.jpg"/></div>
		<div className="one-itemseven"><img src="images/1488972174756.jpg"/></div>
		<div className="one-itemeight"><img src="images/1488972190149.jpg"/></div>
		<div className="one-itemnine"><img src="images/1488972201709.jpg"/></div>
		<div className="one-itemten"><img src="images/1488972210342.jpg"/></div>
	  </div>
    )
  }

  componentDidMount() {
    
  }
  
}

export default Lunone