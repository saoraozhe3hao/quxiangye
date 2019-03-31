Page({
  data: {

  },
  onLoad: function(options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '我的收藏'
    })
  },
  verify: function(event) {
  }
})