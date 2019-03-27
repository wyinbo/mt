<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in isHotPlaceList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in  searchList " :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      isHotPlaceList: [],
      searchList: [],
      suggestList: []
    }
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.searchWord
    },
    isSearchList: function () {
      return this.isFocus && this.searchWord
    }
  },
  created(){
    //如果希望可以在创建这个组件的就获取，可以写在这
   api.SearchHotWords().then(res =>{
      this.isHotPlaceList = res.data.data;
      this.suggestList = res.data.data;
      
    })
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    },
    input(){
      var val = this.searchWord;
      api.getSearchList().then(res =>{
        this.searchList = res.data.data.list.filter((item,index) => {
          return item.indexOf(val) > -1 //这里大于-1就是说嘛存在这个关键字
        });
      })
    }
  },
  mounted(){
    //如果是希望等到dom结构创建完成之后获取数据的话可以写在这里
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/public/header/search.scss";
</style>
