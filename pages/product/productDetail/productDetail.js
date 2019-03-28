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
      url: '../seller/sellerDetail/sellerDetail' + '?sellerId=' + 0
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