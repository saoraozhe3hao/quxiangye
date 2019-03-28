const app = getApp()

Page({
  data: {
    location: '全国'
  },
  onLoad: function (query) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '分类'
    })
  },
  location: function () {
    wx.navigateTo({
      url: '../location/location'
    })
  }
})
