import React, { Component } from 'react'
import './Cart.scss'
import axios from '../../utils/axios'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { getCartProductAction } from '../../store/actionCreator'
class Cart extends Component {
   constructor(props){
       super(props)
        this.state = {
            changeHeader:{
                title:'购物车',
                classname:[
                    'icon icon-return',
                    ''
                ]
            },
            product:[],
            priceAll:0
        }
   }
   pid = '';
    addProduct_number = (pid) => {
        axios.post('updateCarts',{
            action:'add',
            productNumber:1,
            pid
        }).then(res=>{
            // console.log(res);
            console.log(res.msg);
            if(res.ret === 0)
            this.props.getCartProduct()
        }).catch(err=>{
            console.log('err'+err);
        })
    }
    subProduct_number = (pid) => {
        // let product = this.state.product
        axios.post('updateCarts',{
            action:'reduce',
            productNumber:1,
            pid
        }).then(res=>{
            console.log(res.msg);
            if(res.ret === 0)
            this.props.getCartProduct()
        }).catch(err=>{
            console.log('err'+err);
        })
    }
    pay (params) {
        // 跳转到一个单独的支付页面
        this.props.history.push("/pay/"+this.props.product[0].pid);

    }
    componentDidMount(){
        this.props.getCartProduct()
        this.pid = this.props.match.params.id || "";
    }
    render() {
        this.price = 0
        console.log(this.props.product);
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
                        
                    </div>
                </div>
                <div className='HeaderContainer'></div>
                <div className='cartslist'>
                    {
                        this.props.product.map((item,i)=>{
                           return (
                            <div className='cartsItem' key={item.ucid}>
                                <div className='cartsItem-top'>
                                    <div>
                                    <i className="icon icon-radio-check"></i>
                                    </div>
                                    <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/sjlogo.png" alt=""/>
                                    <p>{item.product_name}</p>
                                </div>
                                <div className='itemDetail'>
                                    <img src={item.product_url} alt=""/>
                                    <div className='itemDetail-middle'>
                                        <p>{item.product_name}</p>
                                        <p>颜色<span>黑色</span></p>
                                        <p className='price'>¥ {item.product_price}</p>
                                    </div>
                                    <div className='itemDetail-right'>
                                        <i className="icon icon-sub"
                                        onClick={this.subProduct_number.bind(this,item.pid)}
                                        ></i>
                                        <span>{item.product_number}</span>
                                        <i className="icon icon-add"
                                        onClick={this.addProduct_number.bind(this,item.pid)}
                                        ></i>
                                    </div>
                                </div>
                            </div>
                           )
                        })
                    }
                </div>
                <div className='cart-pay'>
                    <div className='pay-left'>
                        <span>合计：</span>
                <span>¥  {this.props.product.map(item=>{
                    this.price += +item.product_price*item.product_number
                    return this.price 
                })}</span>
                    </div>
                    <div className='pay-right' onClick={this.pay.bind(this)}>
                        <span>去结算</span>
                    </div>
                </div>
            </div>
        )
    }
}
//将store中的数据传递到组件的Props中
const mapStateToProps = (state) => {
    return {
        product:state.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCartProduct :()=> {
            dispatch(getCartProductAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Cart))