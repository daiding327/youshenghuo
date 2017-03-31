
import React from 'react'
import {
	Router,
	Route,
	Link,
	IndexRoute,
	IndexRedirect,
	hashHistory
} from 'react-router'
class My extends React.Component {
  constructor (props) {
    super(props)
    this.register = this.register.bind(this);
    this.state = {
				username: '',
				isshow: "false",

			}

			this.exit = this.exit.bind(this)

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

  exit() {
			localStorage.removeItem("username");
			this.refs.loginchakan1.style.display = "block";
			this.refs.loginchakan2.style.display = "block";

			this.setState({
				username: '',
				isshow: "true",

			})
		}
  render() {
	return (
		<div className="m-my">
				  <div className="user">
		              <div className="h">
		                <i className="yo-ico">&#xe629;</i>
		              </div>
				   </div>

                
                 <div className="box-register-box">
			
				<div className="register-txt box-register"><span className="a">用户名:</span><input type="text" className="boxa" ref="userID" placeholder="手机号码"/></div>


				<div className="pwd box-register"><span className="b">密码：</span><input type="password" className="boxb" ref="password" placeholder="密码"/></div>
				<div className="box-register btn-register"><input className="register-register" type="button" value="注册" onClick={this.register}/></div>

			    </div>
            
				            <div className="input">
		        				<Link to="/login" className="login"><span className="c">登录</span></Link>
		        				
		        
		                    </div>
  			</div>
              

       

		
	)	
  }

     
       
     componentDidMount() {
           

       
}


}

export default My;



