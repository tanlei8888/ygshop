import axios from 'axios'
// const instance = axios.create({
//     baseURL: process.env.REACT_APP_URL
//   });
//设置默认请求头
axios.defaults.baseURL = 'http://s.linweiqin.com/api/s/'
//设置请求拦截
axios.interceptors.request.use(function(config){
    let userInfo = JSON.parse(localStorage.getItem('userinfo'))||{}
    let oauth_token = userInfo.oauth_token
    // console.log(oauth_token);
    if(oauth_token&&config.data){ //如果是get请求是没有data参数的
        config.data.oauth_token = oauth_token;
    }
    // console.log(config);
    return config
},function(err){
    return Promise.reject(err)
})
//设置响应拦截
axios.interceptors.response.use(function(res){
    return res.data
},function(err){
    return Promise.reject(err)
})


//导出axios
export default axios;