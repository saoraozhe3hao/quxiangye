Page({
  data: {

  },
  onLoad: function (options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '我的'
    })
  },
  verify: function (event) {
    wx.navigateTo({
      url: '../verify/verify'
    })
  },
  message: function (event) {
    wx.navigateTo({
      url: '../message/message'
    })
  },
  profit: function (event) {
    wx.navigateTo({
      url: '../profit/profit'
    })
  },
  personalInfo: function (event) {
    wx.navigateTo({
      url: '../personalInfo/personalInfo'
    })
  },
  collection: function(event){
    wx.navigateTo({
      url: '../collection/collection'
    })
  }
})