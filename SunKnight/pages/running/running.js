//获取应用实例
var app = getApp();

Page({
  data:{
    //倒数页面数据
    counting: 3,
    countingHidden: true, 
    animationData: {},   

    //控制是否显示按钮
    startHidden: false,
    continueHidden: true,
    pauseHidden: true,

    distance: "2.54",
    time: "00.01.08",
    speed: "3'22''",
    status: "default",

    initialTime: 0,
    currentTime: 0,
    prev_total: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //var myDate = new Date();
    var that = this;
   
    
  },
  changeTime: function(){
      //根据状态来判断是否执行
      if(this.data.status == "pause"){
        return
      }
      else{
        //根据当前时间计算跑步的持续时间
        var checkTime = function(i){
          if(i<10){
            i = "0" + i;
          }
          return i;
        };
        var setTime = function(time){
          this.setData({
            time: time
          })
        }; 
        var currentTime = Math.floor(new Date()/1000);
        var duration = currentTime - this.data.initialTime+this.data.prev_total ;
        var s = checkTime(duration % 60);
        var m = checkTime(Math.floor(duration / 60 )%60);
        var h = checkTime(Math.floor(duration/ 3600));
        var time = h + ":" + m +":"+s;
        setTime.call(this, time);
      }
      
  },

  startRunning: function(){
    var that = this;
    var initialTime = Math.floor(new Date()/1000);
    this.setData({
      initialTime: initialTime,
      status: "running",
      pauseHidden: false,
      startHidden: true,
    });
    
    var intervalId = setInterval(that.changeTime, 1000);
    this.setData({
      intervalId: intervalId
    })
  },
  //暂停跑步
  pauseRunning: function(){
    var currentTime = Math.floor(new Date()/1000);
    var duration = currentTime - this.data.initialTime;
    this.setData({
        prev_total: this.data.prev_total + duration,
        status: "pause",
        pauseHidden: true,
        continueHidden: false
    })
  },
  //继续跑步
  continueRunning: function(){
    //重置initialTime
    this.setData({
      initialTime: Math.floor(new Date()/1000),
      status: "running",
      continueHidden: true,
      pauseHidden: false
    })
  },
  //完成跑步
  finishRunning: function(){
    var currentTime = Math.floor(new Date()/1000);
    var duration = currentTime - this.data.initialTime + this.data.prev_total;
    this.setData({
      status: "finished"
    })
    clearInterval(this.data.intervalId);
    wx.navigateTo({
      url: '../finish/finish'
    })
    
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    //页面显示
    //倒数动画
    // var animation = wx.createAnimation({
    //     duration:500,
    //     timingFunction:"ease",
    // });
    // this.animation = animation;
    // var count = 3;
    //设定动画
    //animation.opacity(1).step();
    //执行动画
    //this.setData({
    //  animationData:animation.export()
    //})
    
    // var that = this;
    // setTimeout(function(){
    //   animation.opacity(1).step();
    //   that.setData({
    //     animationData:animation.export()
    //   })
    // }, 500)
      
      // count --;
      // console.log(count);
      // this.setData({
      //   counting: count
      // })
    
    


    
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})