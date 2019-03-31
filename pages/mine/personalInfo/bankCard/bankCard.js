Page({
  data: {

  },
  onLoad: function (options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '银行卡'
    })
  },
  save: function (event) {

  }
})