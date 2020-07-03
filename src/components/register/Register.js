import React, { Component } from 'react'
import './Register.scss'
import axios from '../../utils/axios'
import {withRouter} from 'react-router-dom'
class Register extends Component {
    state = {
        hasCode:JSON.parse(localStorage.getItem('hasCode')) || false,
        phone:'',
        password:'',
        code:'',
        count:60,
        code_msg:'发送验证码'
    }
    timeId = null;
    countTimeId = null;
    jumpLogin = (params) => {
        this.props.history.push('/login')
    }
    getCode = () => {
        let is_valid = this.checkPhone(this.state.phone) ? true : false;
        if(is_valid){
            if(!this.timeId){
                axios.get("getMobileCode?mobile=" + this.state.phone).then(res=>{
                    console.log(res);
                   if(res.ret === 0){
                        this.setState({
                            hasCode:true
                        })
                        localStorage.setItem('hasCode',JSON.stringify(true))
                   }
                }).catch(err=>console.log(err))
                this.timeId = setTimeout(() => {
                    this.timeId  = null;
                    clearInterval(this.countTimeId)
                    this.setState({
                        count:60
                    })
                }, 60*1000);
                this.countTimeId = setInterval(() => {
                    this.setState({
                        count: this.state.count - 1
                    })
                }, 1000);
            }
        }
    }
    //检查手机号是否正确
    checkPhone = (params) => {
        let phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (params.length === 11) {//手机号码
            if (phone.test(params)) {
                return true;
            }
        }
        return false
    }
    handleRegister =(params) => {
        let username = this.state.phone;
        let code = this.state.code;
        let password = this.state.password;
        if(!username||!code||!password){
            console.log("用户名或者验证码或者密码不能为空")
            return false;
        }
        axios.get('createUser',{params:{
            mobile:username,
            username:username,
            code:code,
            password:password
        }}).then(res=>{
            console.log(res);
            if(res.ret === 0 ){
                this.props.history.push("/login");
            }else{
                console.log( alert(res.msg) );
            }
        }).catch(err=>console.log(err))
    }
     // 获取电话号码
     savePhone = (e) => {
        console.log(e.target.value);
        this.setState({
            phone: e.target.value
        },()=>{
            console.log(this.state.phone);
        })
    }
    // 保存验证码
    saveCode=(e) => {
        this.setState({
            code:e.target.value
        },()=>{
            console.log(this.state.code);
        })
    }
    // 保存密码
    savePassword=(e) => {
        this.setState({
            password: e.target.value
        },()=>{
            console.log(this.state.password);
        })
    }
    render() {
        return (
            <div className='my-login'>
               <div className='userInput'>
                    <div className="userId">
                        <input 
                        value={this.state.phone} 
                        onChange={this.savePhone}
                        type="text" placeholder='账号'/>
                    </div>
                    <div className="userpwd">
                        <input 
                        value={this.state.password}
                        onChange={this.savePassword} type="password" placeholder='密码'/>
                    </div>
                    <div>
                        {
                            this.state.hasCode ?
                            <div className='hasCode'>
                                <input 
                                value={this.state.code} placeholder='验证码' 
                                onChange={this.saveCode}
                                type="number"/>
                                <span> {this.timeId ? this.state.count + "秒" : '验证码'}</span>
                            </div>
                            :
                            <div className='noCode'>
                                <input 
                                value={this.state.phone} 
                                onChange={this.savePhone}
                                placeholder='手机号' type="number"/>
                                <span onClick={this.getCode}>发送验证码</span>
                            </div>
                        }
                    </div>
                    <div onClick={this.handleRegister} className='loginBtn'>
                        <span >注册</span>
                    </div>
                    <div className='loginBtn'
                    onClick={this.jumpLogin}
                    >
                        <span>登录</span>
                    </div>
               </div>
            </div>
        )
    }
}
export default withRouter(Register)