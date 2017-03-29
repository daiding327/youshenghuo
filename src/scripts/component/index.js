import React from 'react'
import {Link} from 'react-router'

class Index extends React.Component {
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
      <div className="m-index">
		<header>
			<div className="u-header">
				<i  className="yo-ico">&#xe60b;</i>
				<div>
					<i  className="yo-ico">&#xe504;</i>
					<input type="text" placeholder="搜索商品"/>
				</div>
				<i className="yo-ico">&#xe649;</i>
			</div>
		</header>
		<section>
			{this.props.children}	
		</section>
		<footer>
			<ul>
				<li>
					<Link to="/home" ref="home" onClick={this.clickHandler.bind(this,"home")} title="首页" activeClassName="active">
						<i className="yo-ico">&#xe6ee;</i>
						<b>首页</b>
					</Link>
				</li>
				<li>
					<Link to="/kind"  ref="kind" onClick={this.clickHandler.bind(this,"kind")} title="分类" activeClassName="active">
						<i className="yo-ico">&#xe6bb;</i>
						<b>分类</b>
					</Link>
				</li>
				<li>
					<Link to="/cart"  ref="cart" onClick={this.clickHandler.bind(this,"cart")} title="购物车" activeClassName="active">
						<i className="yo-ico">&#xe601;</i>
						<b>购物车</b>
					</Link>
				</li>
				<li>
					<Link to="/my"  ref="my" onClick={this.clickHandler.bind(this,"my")} title="我的" activeClassName="active">
						<i className="yo-ico">&#xe629;</i>
						<b>我的</b>
					</Link>
				</li>
				
			</ul>
		</footer>
		<Link to="/kindindex"  ref="kindindex" onClick={this.clickHandler.bind(this,"kindindex")} title="kinindex" activeClassName="active">
						
		</Link>
	  </div>
    )
  }

  componentDidMount() {
    //fetch('/api/list.php')
    //.then(response=>response.json())
    // function(response) {
    //   return response.json()
    // }
    //.then(res=>{
      // console.log(res);
     // this.setState({
      //  name: <div>{res.name}</div>
    //  })
    //})
  }
  
}

export default Index