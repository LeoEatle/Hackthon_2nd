//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //监控按钮状态
    runHidden: false,
    planHidden: true,

    //监控是否有制订计划
    ifPlanned: false,
    //好友头像的urls
    friendsNumber: 23,
    urls:[
      "../imgs/avator/2.png",
      "../imgs/avator/3.png",
      "../imgs/avator/4.png",
      "../imgs/avator/5.png",
      "../imgs/avator/6.png"
    ],
    //计划详情
    planDistance: 2.54,

    //完成详情
    ifFinished: false,
    finishDistance: 0,
    finishTime: 0,
    finishCalorie: 0,

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
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      icaonPath: '../images/car.png',
      rotate: 10
    }, {
      latitude: 23.099298,
      longitude: 113.324129,
      iconPath: '../images/car.png',
      rotate: 90
    }]

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
  onLoad: function () {
    //console.log('onLoad');
    var that = this;
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // });
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //console.log(res.speed);
        //console.log(res.accuracy);
          that.setData({
            location:{
              latitude: res.latitude,
              longitude: res.longitude,
              speed : res.speed,
              accuracy : res.accuracy
            },
            makers:{
              latitude: res.latitude,
              longitude: res.longitude
            }
          })
          var latitude = res.latitude; 
          var longitude = res.longitude; 
          var speed = res.speed; 
          var accuracy = res.accuracy; 
      }
    });
    
  }
})
