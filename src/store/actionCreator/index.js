//导入常量
import { GET_BANNER , GET_PRODUCS ,CHANGE_HEADER} from '../actionType'
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
const getListAction = () => {
  return (dispatch)=>{
      axios.post('/getIndexLoopimg').then(res => {
        // console.log(res)
        const data = res.wdata
        const action = getBannerList(data)
        dispatch(action)
    })
    
      axios.post('/getHotProducts').then(res=>{
        // console.log(res);
        const data = res.wdata 
        const action  = getProducs(data)
        dispatch(action)
    })
  }
}
//导出方法
export { getBannerList , getListAction , getProducs ,changeHeader}