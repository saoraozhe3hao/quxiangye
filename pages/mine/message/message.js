Page({
  data: {

  },
  onLoad: function(options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '信息中心'
    })
  },
  send: function(event) {
  }
})