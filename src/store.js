import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    position:{},
    userName:'',
};

//这个mutation是来操作state的
const mutations = {
    setPosition(state,val){//val是要改变的地理位置，当前选中的
        state.position = val;
    },
    setUserName(state,val){
        state.userName = val;
    }
};


const actions = {
    setPosition({commit},val){
        //异步请求后端获取当前位置数据
        commit('setPosition',val)
    }
};


export default new Vuex.Store({
    state,
    mutations,
    actions
});