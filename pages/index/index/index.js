//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    location: '全国'
  },
  onLoad: function() {
    wx.showShareMenu();
  },
  category: function(event) {
    wx.navigateTo({
      url: '../category/category' + '?category=' + event.currentTarget.id
    })
  },
  location: function() {
    wx.navigateTo({
      url: '../location/location'
    })
  },
  product: function(event) {
    wx.navigateTo({
      url: '../../product/product' + '?id=' + event.currentTarget.id
    })
  }
})