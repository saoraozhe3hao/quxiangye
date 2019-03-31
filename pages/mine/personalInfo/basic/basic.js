Page({
  data: {

  },
  onLoad: function(options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '基本信息'
    })
  },
  save: function (event) {
  }
})