import React, { Component } from 'react'
import  './TabBar.scss'
import { withRouter } from 'react-router-dom'
class TabBar extends Component {
    state = {
        currentTab:'home'
    }
    // componentDidMount(){
    //     console.log(this.state.currentTab)
    //     console.log(this.props)
    //     console.log(this.props.history.location.pathname)
    //     let currentTab = this.props.history.location.pathname.split('/')[1]
    //     // if(currentTab === '' || currentTab === 'community' || currentTab === 'cart' || currentTab === 'my'){
    //         if(currentTab === ''){
    //             currentTab = 'home'
    //         }
    //         this.setState({
    //             currentTab
    //         })
    //     // }else{
    //     //     // this.setState({
    //     //     //     currentTab:'home'
    //     //     // })
    //     // }
        
    // }
    handleTabchange = (params) => {
        // console.log(this.props);
        // console.log(params);
        // console.log(this.state.currentTab);
        let jump = {
            'home':{
                path:'/'
            },
            'community':{
                path:'/community'
            },'cart':{
                path:'/cart'
            },'my':{
                path:'/my'
            }
        }
        this.props.history.push(jump[params].path)
        this.setState({
            currentTab:params
        })
    }
    render() {
        return (
            <div className='ygshop-tabbar'>
                <div className='tabbar-content'>
                    {this.props.children}
                </div>
                <div className='tabbar-footer'>
                    <div 
                    className='tabbar-footer-item'
                    onClick={this.handleTabchange.bind(this,'home')}
                    >
                        <i className={this.state.currentTab==='home'?'icon icon-home-o':'icon icon-home'}></i>
                        <p>首页</p>
                    </div>
                    <div 
                    className='tabbar-footer-item'
                    onClick={this.handleTabchange.bind(this,'community')}>
                        <i className={this.state.currentTab==='community'?'icon icon-community':'icon icon-community-o'}></i>
                        <p>社区</p>
                    </div>
                    <div 
                    className='tabbar-footer-item'
                    onClick={this.handleTabchange.bind(this,'cart')}
                    >
                        <i className={this.state.currentTab==='cart'?'icon icon-cart-o':'icon icon-cart'}></i>
                        <p>购物车</p>
                    </div>
                    <div 
                    className='tabbar-footer-item'
                    onClick={this.handleTabchange.bind(this,'my')}
                    >
                        <i className={this.state.currentTab==='my'?'icon icon-my-o':'icon icon-my'}></i>
                        <p>我的</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(TabBar)