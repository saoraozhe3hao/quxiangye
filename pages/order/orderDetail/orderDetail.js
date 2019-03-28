Page({
  data: {

  },
  onLoad: function (options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '订单详情'
    })
  }
})