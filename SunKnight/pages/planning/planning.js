Page({
  data: {
    array: ["初级","中级","高级"],
    index: 0,
    date_beg: "2016-09-01",
    date_end: "2016-10-10",
    urls: [
      "../imgs/plan/1.png",
      "../imgs/plan/2.png",
      "../imgs/plan/3.png"
    ],
    selectedUrl: "../imgs/plan/1.png",
    moneys: [
      "../imgs/money/20.png",
      //"../imgs/money/20yes.png",
      "../imgs/money/30.png",
      //"../imgs/money/30yes.png",
      "../imgs/money/40.png",
      //"../imgs/money/40yes.png",
      "../imgs/money/60.png",
      //"../imgs/money/60yes.png",
    ],
    moneyStatus: [
      1,
      0,
      0,
      0
    ],
    selectedMoney: "../imgs/money/20.png"
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      selectedUrl: this.data.urls[e.detail.value]
    })
  },
  bindMoneyTap: function(e){
    console.log(e);
    var id = e.target.id;

    var newMoneys = [
      "../imgs/money/20.png",
      //"../imgs/money/20yes.png",
      "../imgs/money/30.png",
      //"../imgs/money/30yes.png",
      "../imgs/money/40.png",
      //"../imgs/money/40yes.png",
      "../imgs/money/60.png",
      //"../imgs/money/60yes.png",
    ];
    newMoneys[id] = newMoneys[id].split(".png")[0]+"yes"+".png";
    var newMoneyStatus = [0,0,0,0];
    newMoneyStatus[id] = 1;
    

    this.setData({
      moneys : newMoneys,
      moneyStatus: newMoneyStatus
    })
  }

})
