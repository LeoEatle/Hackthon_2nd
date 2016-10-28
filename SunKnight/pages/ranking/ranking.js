var app = getApp();
Page({
  data:{
    // text:"这是一个页面"
    avatorUrl: "../imgs/avator/5.png",
    nickName: "LeoEatle",
    rankingData: [{
      nickName: "Steven",
      avatorUrl: "../imgs/avator/2.png"        
    },
    {
      nickName: "Sam",
      avatorUrl: "../imgs/avator/3.png"        
    },
    {
      nickName: "Allen",
      avatorUrl: "../imgs/avator/4.png"        
    },
    {
      nickName: "Yang",
      avatorUrl: "../imgs/avator/5.png"        
    },
    {
      nickName: "Steven",
      avatorUrl: "../imgs/avator/6.png"        
    }]
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
    var that = this;
    wx.getUserInfo({
    success:function(res){
        var userInfo = res.userInfo;
        var nickName = userInfo.nickName;
        var avatarUrl = userInfo.avatarUrl;
        var gender = userInfo.gender; //性别 0：未知、1：男、2：女 
        var province = userInfo.province;
        var city = userInfo.city;
        var country = userInfo.country;
        that.setData({
            avatorUrl: avatarUrl,
            nickName: nickName
        })
    }
    })
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