import React, { Component } from 'react'
import './My.scss'
export default class My extends Component {
    render() {
        return (
            <div className='ygshop-my'>
                <div className='my-bg'>
                    <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/user_bg.png" alt=""/>
                    <img src="" alt=""/>
                    <div className='userImg'>
                        <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/user-img0.jpg" alt=""/>
                    </div>
                </div>
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
