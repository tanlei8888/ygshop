import React, { Component } from 'react'

export default class swiper extends Component {
    state = {
        currentId: 0
    }
    //挂载时
    componentDidMount() {
        //开启定时器
        this.bannersMove()
    }
    componentWillUnmount(){
        //退出页面停止定时器 优化性能 防止内存泄漏
        clearInterval(this.time)
    }
    //current判断函数
    currentIdIF = (params) => {
        //如果到了最后一张过后变为第一张
        if (this.state.currentId > this.props.bannerList.length - 1) {
            this.setState({ currentId: 0 })
        }
        //如果第一张再网上则跳到最后一张
        if (this.state.currentId < 0) {
            this.setState({ currentId: this.props.bannerList.length - 1 })
        }
    }
    //轮播开始函数
    bannersMove = () => {
        this.time = setInterval(() => {
            this.setState({
                currentId: this.state.currentId + 1
            })
            //添加判断函数
            this.currentIdIF()
        }, 3000);
    }
    //点击导航点
    currentTab = (params) => {
        this.setState({
            currentId: params
        })
    }
    //滑动开始
    touchStart = (e) => {
        clearInterval(this.time)
        //获取到移动初始的坐标
        this.startSteep = e.touches[0].pageX
        // console.log(e.touches[0].pageX);
    }
    //滑动结束
    touchEnd = (e) => {
        //获取到屏幕十分之一的宽度
        let cWidth = document.documentElement.clientWidth / 10
        //如果滑动的距离超过屏幕的十分之一判定为翻页
        if (Math.abs(this.startSteep - e.changedTouches[0].pageX) >= cWidth) {
            //如果起始点比结束坐标点还大的话就是下一张
            if (this.startSteep > e.changedTouches[0].pageX) {
                this.setState({ currentId: this.state.currentId + 1 }, () => {
                    //因为setState是异步的 必须在setState的回调函数里添加判断会实时更新currentId
                    this.currentIdIF()
                })
            } else {
                //如果起始点比结束坐标点还小的话就是上一张
                this.setState({ currentId: this.state.currentId - 1 }, () => {
                    this.currentIdIF()
                })
            }
        }
        //再重新开启定时器
        this.bannersMove()
        // console.log(e.changedTouches[0].pageX);
    }
    render() {
        return (
            <div>
                {/* 轮播图开始 */}
                <div className='jinxiBanner'>
                    <ul className='jinxiBannerList' onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
                        {
                            this.props.bannerList.map((item, i) => {
                                return (
                                    <li
                                        className={this.state.currentId === i ? 'jinxiBannerItem show'  : 'jinxiBannerItem hidden'}
                                        key={item.loopimg_title}>
                                        <img className='img' src={item.loopimg_url} alt="" />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='jinxiBannerTab'>
                        {
                            this.props.bannerList.map((item, i) => {
                                return (
                                    <div
                                        className={this.state.currentId === i ? 'active' : ''}
                                        key={i}
                                        onClick={this.currentTab.bind(this, i)}
                                    ></div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* 轮播图结束 */}
            </div>
        )
    }
}
