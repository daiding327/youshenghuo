
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
     this.state = {
      title: '榜单',
	  flag:true
    }
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
		<div className="m-my">

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
  			
              

       <footer>
			<ul>
				<li>
					<Link to="/home" ref="home" onClick={this.clickHandler2.bind(this,"home")} title="首页" activeClassName="active">
						<i className="yo-ico">&#xe6ee;</i>
						<b>首页</b>
					</Link>
				</li>
				<li>
					<Link to="/kind"  ref="kind" onClick={this.clickHandler1.bind(this,"kind")}  activeClassName="active">
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
           

       
}


}

export default My;



