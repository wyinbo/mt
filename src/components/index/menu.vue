<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.items">
        <h4 :key="index">{{item.title}}</h4>

        <span v-for="(v,i) in item.items" :key="v + '' +i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      curDetail: null,
      menuList: [
        {
          name: "美食",
          type: "food",
          items: [
            {
              title: "美食",
              items: [
                "代金券",
                "甜点饮品",
                "火锅自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "涮香菜",
                "川湘菜",
                "江浙菜",
                "香锅烧鱼",
                "粤港菜",
                "中式烧烤/烤串",
                "西北菜",
                "咖啡酒吧茶馆",
                "云贵菜",
                "东南亚菜",
                "海鲜素食",
                "台湾/客家菜/创意菜",
                "汤/粥/炖菜",
                "蒙餐",
                "新疆菜",
                "其他美食",
                "京菜",
                "鲁菜"
              ]
            }
          ]
        },
        {
          name: "外卖",
          type: "takeout",
          items: [
            {
              title: "外卖",
              items: ["美团外卖"]
            }
          ]
        },
        {
          name: "酒店",
          type: "hotel",
          items: [
            {
              title: "酒店星级",
              items: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        },
        {
          name: "榛果民宿",
          type: "homestay",
          items: [
            {
              title: "热门城市",
              items: ["上海","北京", "南京","深圳","杭州","成都","大连","陕西"]
            }
          ]
        },
        {
          name: "猫眼电影",
          type: "movie",
          items: [
            {
              title: "热映电影",
              items: ["惊奇队长","比悲伤更悲伤的故事", "绿皮书","我的英雄学院：两位英雄","驯龙高手3","狂暴熊市","阿丽塔：战斗无影","过春天",'流浪地球','夏目友人帐']
            },
            {
              title: '热门影院',
              items: ["耀莱成龙国际影院","大地影院", "保利国际影城","万达影城","博纳国际影城","CGV影城","橙天嘉禾影城","金逸影城",'中影国际影城','新华国际影城']
            }
          ]
        },
        {
          name: "机票/火车票",
          type: "airport",
          items: [
            {
              title: "机票",
              items: ["国内机票","国际/港澳台机票"]
            },
            {
              title: "火车票",
              items: ["火车票"]
            }
          ]
        },
        {
          name: "休闲娱乐/KTV",
          type: "airport",
          items: [
            {
              title: "休闲娱乐",
              items: ["足疗按摩","洗浴汗蒸", "酒吧","密室逃脱","轰趴馆","茶馆","私人影院","DIY手工坊","采摘/农家乐","网吧网咖","游乐游艺","VR","桌面游戏","真人CS"]
            },
            {
              title: "KTV",
              items: ["KTV"]
            }
          ]
        },
        {
          name: "生活服务",
          type: "life",
          items: [
            {
              title: "生活服务",
              items: ["衣物/皮具洗护","家政", "搬家运输","送水","充值缴费","服饰","居家维修","手机维修"]
            }
          ]
        },
         {
          name: "丽人/美发/医学美容",
          type: "hair",
          items: [
            {
              title: "丽人",
              items: ["美发","美甲美瞳", "美容美体","医学美容","瑜伽舞蹈","瘦身纤体","祛痘","纹身"]
            }
          ]
        },
        {
          name: "结婚/婚纱摄影/婚宴",
          type: "marry",
          items: [
            {
              title: "结婚",
              items: ["婚纱摄影","旅拍", "个性写真","婚宴","婚庆公司","婚纱礼服","西服定制","婚戒首饰"]
            }
          ]
        },
         {
          name: "亲子/儿童乐园/幼教",
          type: "offspring",
          items: [
            {
              title: "儿童乐园",
              items: ["婴儿游泳","其它亲子游乐" ]
            },
            {
              title:'幼儿教育',
              items:['早教中心','少儿英语','智力开发','托班/幼儿园','幼儿教育','其他幼儿教育']  
            },
             {
              title:'亲子摄影',
              items:['儿童摄影','孕妇写真','上门拍','其他亲子摄影']  
            },
             {
              title:'孕产护理',
              items:['月子会所','产后恢复','妇幼医院','孕产用品']  
            }
          ]
        },
        {
          name: "运动健身/健身中心",
          type: "sport",
          items: [
            {
              title: "运动健身",
              items: ["健身中心","武术馆", "游泳馆","羽毛球馆","溜冰场","射箭馆","篮球场","台球馆"]
            }
          ]
        },
         {
          name: "家装/建材/家居",
          type: "furniture",
          items: [
            {
              title: "装修设计",
              items: ["半包装修","全包装修", "清包装修"]
            },
             {
              title: "装修建材",
              items: ["地板","瓷砖石材", "橱柜",'灯饰照明','厨卫洁具','油漆涂料','集成吊顶','门窗']
            },
            {
              title: "家具家居",
              items: ["家具","床上用品/家纺", "家居饰品",'智能家居']
            },
            {
              title: "家装卖场",
              items: ["建材卖场","家居卖场", "灯饰卖场"]
            },
          ]
        },
        {
          name: "学习培训/音乐培训",
          type: "study",
          items: [
            {
              title: "音乐培训",
              items: ["钢琴","吉他", "小提琴",'古筝','架子鼓','声乐','二胡']
            },
             {
              title: "职业培训",
              items: ["美容化妆","会计", "IT",'厨艺','管理培训','司法考试','公务员培训','其他职业培训']
            },
            {
              title: "外语培训",
              items: ["英语","日语", "汉语",'韩语','德语','西班牙语','印度语','古希腊语']
            },
            {
              title: "美术培训",
              items: ["绘画","书法", "其他美术"]
            },
          ]
        },
        {
          name: "医疗健康/爱车/宠物",
          type: "health",
          items: [
            {
              title: "医疗健康",
              items: ["医院","齿科口腔", "体验中心",'药店','中医','其他健康服务']
            },
             {
              title: "爱车",
              items: ["洗车","租车", "加油站",'维修保养','驾校','汽车美容','陪练','汽车保险','停车场','汽车用品']
            },
            {
              title: "宠物",
              items: ["宠物店","宠物医院"]
            }
          ]
        },
        {
          name: "酒吧/密室逃脱",
          type: "bar",
          items: [
            {
              title: "玩乐",
              items: ["KTV","酒吧", "密室逃脱",'游乐游艺','网吧网咖','私人影院','其他吃喝玩乐']
            }
          ]
        },
      ]
    };
  },
  //这个created()没有启用是由于后端请求的数据太少了，造成网页不美观，但是方法都已经完成，后端数据一改变，取消下面一行的注释并且删除menuList里面的数据即可，不删也行，后端的数据会覆盖掉的
  created(){
    api.getMenuList().then(res =>{
        // this.menuList = res.data.data;  
    })
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave(){
        var self =this;
        this.timer = setTimeout(() => {
            self.curDetail =null;
        }, 200);
      
    },
    detailEnter(){
        clearTimeout(this.timer);
    },
    detailLeave(){
        this.curDetail = null;
    }
  }
};
</script>

<style scoped>
</style>