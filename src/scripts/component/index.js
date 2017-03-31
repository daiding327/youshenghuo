import React from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Index extends React.Component {
  constructor (props) {
    super(props)
    
  }
   
  render() {
    return (
      <div className="m-index">
		<header style={{background:this.props.bgcolor}}>
			<div className="u-header">
				<Link to="/kind">
					<i  className="yo-ico">&#xe60b;</i>
				</Link>
				<div>
					<i  className="yo-ico">&#xe504;</i>
					<input type="text" placeholder="搜索商品"/>
				</div>
				<Link to="/my">
					<i className="yo-ico">&#xe649;</i>
				</Link>
			</div>
		</header>

		
		<section>
			{this.props.children}
		</section>
		<footer>
			<ul>
				<li>
					<Link to="/home" activeClassName="active">
						<i className="yo-ico">&#xe6ee;</i>
						<b>首页</b>
					</Link>
				</li>
				<li>
					<Link to="/kind"  activeClassName="active">
						<i className="yo-ico">&#xe6bb;</i>
						<b>分类</b>
					</Link>
				</li>
				<li>
					<Link to="/cart" activeClassName="active">
						<i className="yo-ico">&#xe601;</i>
						<b>购物车</b>
					</Link>
				</li>
				<li>
					<Link to="/my"  activeClassName="active">
						<i className="yo-ico">&#xe629;</i>
						<b>我的</b>
					</Link>
				</li>
				
			</ul>
		</footer>
	  </div>
    )
  }

  componentDidMount() {
    let bgcolor = this.props.routes[1].bgcolor
    this.props.onChange({
      type: 'changecolor',
      bgcolor: bgcolor
    })
  }
  
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

//export default Index









