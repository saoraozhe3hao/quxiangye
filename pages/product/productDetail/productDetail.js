Page({
  data: {
    id: ''
  },
  onLoad: function (query) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '服务'
    });
  },
  collect: function(event){
    
  },
  seller: function (event) {
    wx.navigateTo({
      url: '../../seller/sellerDetail/sellerDetail' + '?sellerId=' + 0
    })
  },
  preview: function(event){
    wx.previewImage({
      current: event.target.dataset.src, // 当前显示图片的http链接
      urls: ["https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=19032511","https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=19032512"]
    })
  },
  valuation: function(event){
    wx.navigateTo({
      url: '../valuation/valuation/valuation' + '?productId=' + this.options.id
    })
  },
  bespeak: function(event){
    wx.navigateTo({
      url: '../../order/bespeak/bespeak' + '?productId=' + this.options.id
    })
  }
})