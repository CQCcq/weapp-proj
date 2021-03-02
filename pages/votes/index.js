// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    cartList:[
      {
        index:1,
        title: "现场投票",
        routerLink: "/pages/sceneVote/index",
        detail: "现场投票方便便捷"
      },{
        index:2,
        title: "网络投票",
        routerLink: "/pages/networkVote/index",
        detail: "足不出户掌握所有投票"
      },{
        index:3,
        title: "投票查询",
        routerLink: "/pages/votequery/index",
        detail: "快速找到对应投票"
      }]
  },
  // 事件处理函数
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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
