Page({
  data: {

  },
  onLoad: function (options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '我的发布'
    });
  },
  publish: function(){
    wx.navigateTo({
      url: '../publish/publish'
    })
  }
})