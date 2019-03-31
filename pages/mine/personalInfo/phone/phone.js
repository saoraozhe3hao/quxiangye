Page({
  data: {
    countDown: 0
  },
  onLoad: function(options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '手机号'
    })
  },
  send: function(event){
    this.setData({
      countDown: 60
    });
    this.countDown();
  },
  countDown: function(){
    if(this.data.countDown <= 0){
      return;
    }
    setTimeout(()=>{
      this.setData({
        countDown: this.data.countDown - 1
      });
      this.countDown();
    }, 1000);
  },
  save: function (event) {

  }
})