<template>
  <div :class="['choose-wrap',disabled? 'disabled' : '']" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active':showWrapperActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(listData,index) in renderList" :key="index">
            <span
              :class="{'mt-item':true,'active':item.name == value}"
              v-for="(item,index) in listData"
              :key="index"
              @click="changeValue(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list", "value", "title", "showWrapperActive",'disabled','className'],
  computed: {
    renderList: function() {
      var col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (var i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    }
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation(); //这个是阻止事件冒泡的，因为当你触发点击事件的时候两个函数都会触发，所以加个阻止冒泡；
      // this.showWrapperActive = true;
      if(!this.disabled){
        this.$emit("change_active", true);
      }
     
    },
    documentClick() {
      this.$emit("change_active", false);
      // this.showWrapperActive = false;
      // console,log('document-click')
    },
    changeValue(item) {
      this.$emit("change", item);
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/select.scss";
</style>