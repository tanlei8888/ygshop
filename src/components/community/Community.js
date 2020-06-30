import React, { Component } from 'react'
import './Community.scss'
export default class Community extends Component {
    state = {
        changeHeader:{
            title:'社区',
            classname:[
                'icon icon-return',
                'icon icon-add'
            ]
        }
    }
    render() {
        return (
            <div className='ygshop-community'>
                <div className='jinxiHeader'>
                    <div className='headerCaidan' onClick={this.changeHeader}>
                        <i className={this.state.changeHeader.classname[0]}
                        ></i>
                    </div>
                    <div className='headerTitle'>
                        {this.state.changeHeader.title}
                    </div>
                    <div className='headerSerach'>
                        <i className={this.state.changeHeader.classname[1]}></i>
                    </div>
                </div>
                <div className='HeaderContainer'></div>
                <div className='communityList'>
                    <div className='communityList-item'>
                        <div className='userInfo'>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/user-img0.jpg" alt=""/>
                            <span>我是郭小帅</span>
                        </div>
                        <div className='text'>
                        [潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....
                        </div>
                        <div className='productImgs'>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_01.png" alt=""/>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_02.png" alt=""/>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_03.png" alt=""/>
                        </div>
                        <div>刚刚</div>
                    </div>
                    <div className='communityList-item'>
                        <div className='userInfo'>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/user-img0.jpg" alt=""/>
                            <span>我是郭小帅</span>
                        </div>
                        <div className='text'>
                        [潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....
                        </div>
                        <div className='productImgs'>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_01.png" alt=""/>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_02.png" alt=""/>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_03.png" alt=""/>
                        </div>
                        <div>12.30</div>
                    </div>
                </div>
            </div>
        )
    }
}
