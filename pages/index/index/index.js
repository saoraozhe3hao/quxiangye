//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    location: '全国'
  },
  goto: function(event) {
    wx.navigateTo({
      url: '../category/category' + '?category=' + event.target.id
    })
  },
  location: function(){
    wx.navigateTo({
      url: '../location/location'
    })
  },
  onLoad: function() {}
})