Page({
  data: {

  },
  onLoad: function (query) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '用户评价'
    });
  }
})