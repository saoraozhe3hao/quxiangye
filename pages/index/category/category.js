const app = getApp()

Page({
  data: {
    location: '全国'
  },
  onLoad: function () {
   
  },
  location: function () {
    wx.navigateTo({
      url: '../location/location'
    })
  },
})
