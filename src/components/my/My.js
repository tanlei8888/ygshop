import React, { Component } from 'react'
import './My.scss'
import axios from '../../utils/axios'
import { withRouter } from 'react-router-dom'
class My extends Component {
    state = {
        isLogin:false,
    }
    login = (params) => {
        this.props.history.push('/login')
    }
    outLogin = (params) => {
        axios.post('logout',{}).then(res=>{
            console.log(res.msg);
            if(res.ret === 0){
                this.setState({
                    isLogin:false
                })
            }
        }).catch(err=>{
            console.log('err:' + err);
        })
    }
    componentDidMount(){
        let userInfo = JSON.parse(localStorage.getItem("userinfo"))||{};
        let isLogin = userInfo.oauth_token ? true :false;
        this.setState({
            isLogin
        })

    }
    render() {
        return (
            <div className='ygshop-my'>
                {
                    this.state.isLogin ?
                    <div className='my-bg'>
                        <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/user_bg.png" alt=""/>
                        <img src="" alt=""/>
                        <div className='userImg'>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/user-img0.jpg" alt=""/>
                        </div>
                        <div className='outLogin' onClick={this.outLogin}>
                            退出登录
                        </div>
                    </div> :
                    <div className='my-login'>
                        <div className='login' onClick={this.login}>登录</div>
                    </div>
                }
                
                <div className='my-order'>
                    <div className='order-left'>
                        <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/indent.png" alt=""/>
                        <span>我的订单</span>
                    </div>
                    <div className='order-right'>
                        <span>查看所有订单</span>
                    </div>
                </div>
                <div className='my-navs'>
                    <div className='navs-item'>
                    <i className="icon icon-pay"></i>
                        <p>代付款</p>
                    </div>
                    <div className='navs-item'>
                        <i className="icon icon-recieve"></i>
                        <p>代收货</p>
                    </div>
                    <div className='navs-item'>
                        <i className="icon icon-recieve-good"></i>
                        <p>已收货</p>
                    </div>
                    <div className='navs-item'>
                        <i className="icon icon-cancel"></i>
                        <p>已取消</p>
                    </div>
                    <div className='navs-item'>
                        <i className="icon icon-aftersale"></i>
                        <p>售后</p>
                    </div>
                </div>
                <div className='my-system'>
                    <div className='system-item'>
                       <div className='system-item-left'>
                           <div>
                           <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/collct.png" alt=""/>
                           </div>
                       
                            <span>我的收藏</span>
                       </div>
                       <div className='system-item-right'>
                            
                       </div>
                    </div>
                    <div className='system-item'>
                       <div className='system-item-left'>
                           <div>
                           <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/service.png" alt=""/>
                           </div>
                       
                            <span>联系客服</span>
                       </div>
                       <div className='system-item-right'>
                            
                       </div>
                    </div>
                    <div className='system-item'>
                       <div className='system-item-left'>
                           <div>
                           <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/about.png" alt=""/>
                           </div>
                       
                            <span>关于我们</span>
                       </div>
                       <div className='system-item-right'>
                            
                       </div>
                    </div>
                   
                    <div className='system-item'>
                       <div className='system-item-left'>
                            <div>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/set.png" alt=""/>
                            </div>
                            <span>设置</span>
                       </div>
                       <div className='system-item-right'>
                            
                       </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default withRouter(My)