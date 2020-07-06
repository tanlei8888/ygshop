import React, { Component } from 'react'
// import store from '../../store/index'
import './productDetail.scss'
import axios from '../../utils/axios'
export default class ProductDetail extends Component {
    state = {
        product:{},
        changeHeader:{
            title:'产品详情',
            classname:[
                'icon icon-return',
                ''
            ]
        }
    }
    pid = '';
    changeHeader = (params) => {
        this.props.history.push('/')
    }
    componentDidMount(){
        // let product = store.getState().products.filter(item=>{
        //     return item.pid === +this.props.match.params.id
        // })
        this.pid = this.props.match.params.id || "";
        // 2. 发请求获取详细的产品的数据
        axios.get("getProductDetail", {
            params: {
                pid:this.pid
            }
        }).then(res => {
            console.log(res);
            // 3. 将数据存到 state 中
            this.setState({
                product: res.wdata
            })
        }).catch(err => console.log(err));
    }
    pay = (params) => {
        // 跳转到支付页面
        this.props.history.push("/pay/"+params)
    }
    addToCart=(params) => {
        axios.post("updateCarts",{
            productNumber:1,pid:this.pid,action:"add"
        }).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    render() {
        return (
            <div className='producDetail'>
                <div className='jinxiHeader'>
                    <div className='headerCaidan' onClick={this.changeHeader}>
                        <i className={this.state.changeHeader.classname[0]}
                        ></i>
                    </div>
                    <div className='headerTitle'>
                        {this.state.changeHeader.title}
                    </div>
                    <div className='headerSerach'>
                    </div>
                </div>
                <div className='HeaderContainer'></div>
                <div className='producDetail-content'>
                   <img src={this.state.product.product_url} alt=""/>
                   <div className='producInfo'>
                        <p className='productName'>{this.state.product.product_name}</p>
                        <p className='productPrice'>¥{this.state.product.product_price} </p>
                   </div>
                </div>
                <div className='producDetail-footer'>
                    <div className='footer-left'>
                       <div>
                        <img src="http://img5.imgtn.bdimg.com/it/u=1816948731,4203604980&fm=26&gp=0.jpg" alt=""/>
                       </div>
                    </div>
                    <div className='footer-right'>
                       <div className='add' onClick={this.addToCart}>加入购物车</div>
                       <div className='pay' onClick={this.pay.bind(this,this.pid)}>立即购买</div>
                    </div>
                </div>
            </div>
        )
    }
}
