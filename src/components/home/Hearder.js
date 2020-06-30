import React, { Component } from 'react'
export default class Hearder extends Component {
    state = {
        changeHeader:{
            title:'京西商城',
            classname:[
                'icon icon-menu',
                'icon icon-soso'
            ]
        }
    }
    changeHeader = () => {
        console.log(this.props)
        // this.props.jumpIndex(this.state.changeHeader)
    }
    render() {
        return (
            <div>
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
                <style>
                    {
                        `
                        .jinxiHeader {
                            position: fixed;
                            top: 0;
                            width: 100%;
                            z-index: 101;
                            background-color: #ee394a;
                            color: #fff;
                            display: flex;
                            height: 1.33333333rem;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 0.2rem;
                            font-size: 0.69333333rem;
                          }
                          .HeaderContainer{
                            height: 1.33333333rem;
                          }
                        `
                    }
                </style>
            </div>
        )
    }
}
