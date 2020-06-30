//导入Type常量
import { GET_BANNER ,GET_PRODUCS , CHANGE_HEADER} from '../actionType'


const defaultState = {
   bannerList:{
       banner:[]
   },
//    hearder:{
//     title:'京西商城',
//     classname:[
//         'iconfont icon-caidan',
//         'iconfont icon-icon-test'
//     ]
//     },
    products:[]
}

//创建并暴露一个对外函数 返回state
export default (state = defaultState,action)=>{
    let newData = JSON.parse(JSON.stringify(state))
    //当action被派发时(dispatch),会触发
    if(action.type === GET_BANNER){
        //进行深复制
        console.log(action);
        newData.bannerList.banner = action.data
        // console.log(newData.bannerList);
    }
    if(action.type === GET_PRODUCS){
        // console.log(action);
        newData.products = action.data
    }
    if(action.type === CHANGE_HEADER){
        console.log(action.data);
        newData.hearder = action.data
        state.hearder = action.data
    }
    return newData
}