// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    cartList:[
      {
        index:1,
        title: "股东卡号管理",
        routerLink: "/pages/holdercardcode/index",
        detail: "添加管理你的股东"
      },{
        index:2,
        title: "微信解绑",
        routerLink: "/pages/wechatunbund/index",
        detail: "一键解绑方便快捷"
      }]
  },
  // 事件处理函数
  onLoad() {

  },
  onRouteLink:function(routeLink){
    let routeName = routeLink.detail.currentTarget.dataset
    wx.navigateTo({
      url: routeName.routelink,
      success:function(res){
        console.log("res====>",res);
      },
      fail:function(err){
        console.log("err====>",err);
      }
    })
  }
})
