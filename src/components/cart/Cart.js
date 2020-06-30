import React, { Component } from 'react'
import './Cart.scss'
export default class Cart extends Component {
    state = {
        changeHeader:{
            title:'购物车',
            classname:[
                'icon icon-return',
                ''
            ]
        }
    }
    render() {
        return (
            <div className='ygshop-cart'>
                <div className='jinxiHeader'>
                    <div className='headerCaidan' onClick={this.changeHeader}>
                        <i className={this.state.changeHeader.classname[0]}
                        ></i>
                    </div>
                    <div className='headerTitle'>
                        {this.state.changeHeader.title}
                    </div>
                    <div className='headerSerach'>
                        编辑
                    </div>
                </div>
                <div className='HeaderContainer'></div>
                <div className='cartslist'>
                    <div className='cartsItem'>
                        <div className='cartsItem-top'>
                            <i className="icon icon-radio"></i>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/sjlogo.png" alt=""/>
                            <span>海绵包包</span>
                        </div>
                        <div className='itemDetail'>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/cp_gg.png" alt=""/>
                            <div className='itemDetail-middle'>
                                <p>首款海绵包包</p>
                                <p>颜色<span>黑色</span></p>
                                <p className='price'>¥ 68.00</p>
                            </div>
                            <div className='itemDetail-right'>
                                <i className="icon icon-sub"></i>
                                <span>1</span>
                                <i className="icon icon-add"></i>
                            </div>
                        </div>
                    </div>
                    <div className='cartsItem'>
                        <div className='cartsItem-top'>
                            <i className="icon icon-radio"></i>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/sjlogo.png" alt=""/>
                            <span>海绵包包</span>
                        </div>
                        <div className='itemDetail'>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/cp_gg.png" alt=""/>
                            <div className='itemDetail-middle'>
                                <p>首款海绵包包</p>
                                <p>颜色<span>黑色</span></p>
                                <p className='price'>¥ 68.00</p>
                            </div>
                            <div className='itemDetail-right'>
                                <i className="icon icon-sub"></i>
                                <span>1</span>
                                <i className="icon icon-add"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cart-pay'>
                    <div className='pay-left'>
                        <span>合计：</span>
                        <span>¥ 136.00</span>
                    </div>
                    <div className='pay-right'>
                        <span>去结算</span>
                    </div>
                </div>
            </div>
        )
    }
}
