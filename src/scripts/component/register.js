/*import React from 'react';
import ReactDOM from 'react-dom'

class Register extends React.Component {
	constructor(props) {
		super(props)
		this.register = this.register.bind(this);


	}
	register() {
		var userID = this.refs.userID.value;
		//console.log(userID)
		var password = this.refs.password.value;

		if (!(/^1[34578]\d{9}$/.test(userID))) {
			alert("请输入正确手机号码")
		} else {
			var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID=" + userID + "&password=" + password;
			fetch(url)
				.then(response => response.json())
				.then(response => {
					console.log(response)
					if (response == 1) {
						alert("注册成功!即将跳转到登入页面!");
						//window.location.href = "#/home"
						window.location.href = "#/login"

					}

				})
		}



	}
	render() {
		return (
			<div>

				<div className="yo-header">
					<h2 className="title">
						注册
					</h2>
					<span className="regret yo-ico"></span>
					<span className="affirm">设置</span>
				</div>



			<div className="box-register-box">
			
				<div className="register-txt box-register">用户名：<input type="text"  ref="userID" placeholder="手机号码"/></div>


				<div className="pwd box-register"> 密码：<input type="password" ref="password" placeholder="密码"/></div>
				<div className="box-register btn-register"><input className="register-register" type="button" value="注册" onClick={this.register}/></div>

			</div>
			</div>

		)
	}
	componentDidMount() {



	}
}
export default Register;*/