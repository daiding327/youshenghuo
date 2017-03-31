
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

	render() {

		return (
			<div className="login">
				
					
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