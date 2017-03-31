
import React from 'react';
import {
	Router,
	Route,
	Link,
	IndexRoute,
	IndexRedirect,
	hashHistory
} from 'react-router'
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      title: '榜单',
	  flag:true
    }
		this.login = this.login.bind(this)

	}
	login() {
		var userID = this.refs.username.value;

		var password = this.refs.pwd.value;
		if (userID == "" || password == "") {
			alert("请完善您的信息")
		} else {
			var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID=" + userID + "&password=" + password;
			fetch(url)
				.then(response => response.json())
				.then(response => {
					if (response == 0) {
						alert("用户名不存在!");
					} else if (response == 2) {
						alert("用户名密码不符!");
					} else if (response) {
						userID = response.userID;
						console.log(typeof userID)
						localStorage.setItem("userID", userID);
						window.location.href = "/#/home"
							// window.location.href = "http://localhost:9000/#/my?userID" + userID
					}



				})
		}

	}
	 clickHandler(type){
	  this.setState({
		  title:this.refs[type].props.title
	  })
  }
  clickHandler1(type){
	  this.setState({
		  flag:false
	  })
  }
  
  clickHandler2(type){
	  this.setState({
		  flag:true
	  })
  }

	render() {

		return (
			<div className="login">
				<header style={{background:this.state.flag==false ? 'rgba(255,92,80,1)' : 'rgba(0,0,0,0.3)'}}>
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
					
				  <div className="i"><img src="../images/1489468346157.jpg"/></div>
					
				
				<div className="box-login-box">
					<div className="login-txt box-login">
		<span className="a">用户名：</span> < input type = "text"
		ref = "username" className="boxa"/ >
					</div>
				
				<div className="pwd box-login"><span className="b">密码：</span><input type="password"  ref="pwd" className="boxb"/></div>
			<div className="box-login btn-login"><input  className="login-login" type="button"  value="登录" onClick={this.login}/></div>
				
			</div>
</div>
		)
	}
}
export default Login;