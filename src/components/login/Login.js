import React, { Component } from 'react'
import './Login.scss'
import axios from '../../utils/axios'
import {withRouter} from 'react-router-dom'
class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    jumpRegister = (params) => {
        this.props.history.push('/register')
    }
    handleLogin = (params) => {
        let username = this.state.username;
        let password = this.state.password;
        if(!username || !password){
            console.log("账号或者密码不能为空！");
            return false;
        }
        let url = "loginCheck?username="+username+"&&password="+password;
        axios.get(url).then(res=>{
            console.log(res);
            localStorage.setItem("userinfo",JSON.stringify(res.wdata));
            if(res.ret === 0){
                this.props.history.push("/my");
            }else{
                console.log(res.msg);
            }
        }).catch(err=>console.log(err))
    }
    saveUserName=(e) => {
        this.setState({
            username: e.target.value
        })
    }
    savePassword=(e) => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (
            <div className='my-login'>
               <div className='userInput'>
                    <div className="userId">
                        <input 
                        value={this.state.username}
                        onChange={this.saveUserName}
                        type="text" placeholder='账号'/>
                    </div>
                    <div className="userpwd">
                        <input 
                        value={this.state.password}
                        onChange={this.savePassword}
                        type="password" placeholder='密码'/>
                    </div>
                    <div className='loginBtn'
                    onClick={this.handleLogin}
                    >
                        <span>登录</span>
                    </div>
                    <div className='loginBtn'
                    onClick={this.jumpRegister}
                    >
                        <span>注册</span>
                    </div>
               </div>
            </div>
        )
    }
}
export default  withRouter(Login)
