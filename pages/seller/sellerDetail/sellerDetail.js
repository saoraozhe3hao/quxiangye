Page({
  data: {
    current: 'product'
  },
  onLoad: function (query) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '趣导'
    });
  },
  tipOff: function(event){
    wx.navigateTo({
      url: '../../seller/tipOff/tipOff' + '?sellerId=' + 0
    })
  },
  switch: function(event){
    this.setData({
      current: event.target.id
    });
  }
})