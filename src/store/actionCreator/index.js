//导入常量
import { GET_BANNER , GET_PRODUCS , CHANGE_HEADER ,GET_CARTPRODUCT} from '../actionType'
import axios from '../../utils/axios'
//获取轮播图数据
const getBannerList = (data) => ({
      type:GET_BANNER,
      data  
  })
//获取商品数据
const getProducs = (data) => ({
      type:GET_PRODUCS,
      data
})
//修改header数据
const changeHeader = (data) => ({
      type:CHANGE_HEADER,
      data
})
//获得购物车商品
const getCartProduct = (data) => ({
      type:GET_CARTPRODUCT,
      data
})
const getCartProductAction = () => {
  return (dispatch)=>{
    axios.post('getCarts',{}).then(res=>{
        const data = res.wdata;
        const action = getCartProduct(data)
        dispatch(action)
    }).catch(err=>{
      console.log(err);
    })
  }
}
const getListAction = () => {
  return (dispatch)=>{
      axios.post('/getIndexLoopimg').then(res => {
        // console.log(res)
        const data = res.wdata
        const action = getBannerList(data)
        dispatch(action)
    }).catch(err=>{
      console.log(err);
    })
    
      axios.post('/getHotProducts').then(res=>{
        // console.log(res);
        const data = res.wdata 
        const action  = getProducs(data)
        dispatch(action)
    }).catch(err=>{
      console.log(err);
    })
  }
}
//导出方法
export { getBannerList , getListAction , getProducs ,changeHeader ,getCartProduct ,getCartProductAction}