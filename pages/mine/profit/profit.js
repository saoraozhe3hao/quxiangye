Page({
  data: {

  },
  onLoad: function(options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '收益'
    })
  },
  withdraw: function(event) {
    wx.showToast({
      title: '一个月只能申请一次',
      icon: 'none',
      duration: 2000
    })
  }
})