import { createStore , applyMiddleware } from 'redux'//引入redux 生成器
import reducer from './reducer/index'//引入reducer
//引入redux-thunk
import reduxThunk from 'redux-thunk'
//创建并暴露出store 将redux-thunk传入store构造器中
export default createStore(reducer,applyMiddleware(reduxThunk))