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
  moreEvaluate: function(event){
    wx.navigateTo({
      url: '../evaluate/evaluate' + '?productId=' + this.options.id
    })
  },
  bespeak: function(event){
    wx.navigateTo({
      url: '../order/bespeak/bespeak' + '?productId=' + this.options.id
    })
  }
})