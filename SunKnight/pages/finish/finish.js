var app = getApp();
Page({
  data:{
    //控制modal
    modalHidden: false,
    //计划详情
    planDistance: 2.54,
    
    isFinished: false,
    finishDistance: "0",
    finishTime: "0",
    finishCalorie: "0",

    location: {
      latitude: 23.099994,
      longitude: 113.324520,
      speed: 0,
      accuracy: 0
    },
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: '爱范儿',
      desc: '我现在的位置'
    }],
  },
  modalTap: function(e) {
    this.setData({
      modalHidden: false
    })
  },
  modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
  },
  //绑定进入跑步菜单
  tapRunning: function(){
    this.setData({
      runHidden: false,
      planHidden: true
    })
  },
  //绑定进入计划菜单
  tapPlanning: function(){
    this.setData({
      runHidden: true,
      planHidden: false
    })
  },
  //绑定开始跑步按钮函数
  startRunning: function() {
    wx.navigateTo({
      url: '../running/running'
    })
  },

  //绑定开始计划函数
  startPlanning: function(){
    this.setData({
      ifPlanned: true
    })
    wx.navigateTo({
      url: '../planning/planning'
    })
  },
  //绑定进入ranking
  enterRanking: function(){
    wx.navigateTo({
      url: '../ranking/ranking'
    })
  },
  //绑定进入me
  enterMe: function(){
    wx.navigateTo({
      url: '../me/me'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})