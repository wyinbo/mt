<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in classicList" :key="item.type">
        <m-select :name="item.title" :list="item.sub_list"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item) in areaList" :key="item.type">
        <m-select :name="item.title" :list="item.sub_list"/>
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from '@/api/index.js'
export default {
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          sub_list: [
            {
              name: "日本菜",
              id: "Japan"
            },
            {
              name: "饮品店",
              id: "drink"
            },
            {
              name: "火锅",
              id: "hot_pot"
            },
            {
              name: "小吃快餐",
              id: "snack"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy_hotel"
            },
            {
              name: "低星酒店",
              id: "low_hotel"
            }
          ]
        },
        {
          title: "周边游",
          type: "play",
          sub_list: [
            {
              name: "景点",
              id: "spot"
            },
            {
              name: "动植物园",
              id: "zoo"
            },
            {
              name: "酒景套餐",
              id: "combo"
            }
          ]
        },
        {
          title: "休闲娱乐",
          type: "amusement",
          sub_list: [
            {
              name: "DIY手工坊",
              id: "diy"
            },
            {
              name: "KTY",
              id: "ktv"
            }
          ]
        },
        {
          title: "生活服务",
          type: "life",
          sub_list: [
            {
              name: "鲜花",
              id: "flower"
            },
            {
              name: "母婴亲子",
              id: "qinzi"
            }
          ]
        },
        {
          title: "时尚购",
          type: "fashion",
          sub_list: [
            {
              name: "潮流衣服",
              id: "clothes"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",
          sub_list: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        },
        {
          title: "武侯区",
          sub_list: [
            {
              name: "航空路",
              id: 130000
            },
            {
              name: "火车站",
              id: 13333
            }
          ]
        },
        {
          title: "成华区",
          sub_list: [
            {
              name: "红星路",
              id: 140000
            },
            {
              name: "经二路",
              id: 14444
            }
          ]
        },
        {
          title: "金牛区",
          sub_list: [
            {
              name: "火车北站",
              id: 150000
            },
            {
              name: "经一路",
              id: 15555
            }
          ]
        },
         {
          title: "锦江区",
          sub_list: [
            {
              name: "火车西",
              id: 160000
            },
            {
              name: "三圣乡",
              id: 16666
            }
          ]
        },
      ]
    };
  },
  //后端请求数据不完全，等数据完整后清除下面两行注释，即可更改数据
  created(){
    api.getClassicList().then(res =>{
      // this.classicList = res.data.data 
    })
    api.getAreaList().then(res =>{
      // this.areaList = res.data.data
    })
  },
  components: {
    MSelect
  }
};
</script>

<style scoped>
</style>