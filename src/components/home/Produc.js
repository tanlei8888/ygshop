import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Produc extends Component {
    jumpDetail = (pid) => {   
        this.props.history.push(`/productDtail/${pid}/`)
    }
    render() {
        // console.log(this.props.products);
        return (
            <div>
                <div className='jinxiProduc'>
                    <h3>精选促销</h3>
                    <ul className='ProducList'>
                        {
                            this.props.products.map((item,i)=>{
                                return (
                                    <li key={item.pid} className='ProducItem'
                                    onClick={this.jumpDetail.bind(this,item.pid)}
                                    >
                                        <img src={item.product_url} alt=""/>
                                        <p>{item.product_name}</p>
                                        <p className='price'>{'¥' + item.product_price}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(Produc)
