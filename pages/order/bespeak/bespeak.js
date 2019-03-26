Page({
  data: {
    date: '2019-09-01'
  },
  onLoad: function (options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '预约'
    })
  },
  dateChange: function(event){
    this.setData({
      date: event.detail.value
    });
  },
  submit: function(){

  }
})