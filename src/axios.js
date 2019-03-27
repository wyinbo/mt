import axios from 'axios'

axios.defaults.baseURL = 'http://api.duyiedu.com';
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    config.params = {
        ...config.params,//这行的意思是把之前传过来的值放在这，然后拼接上后面的数据
        appkey:'wuyinbo_1552613492916'
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });




  export default axios;