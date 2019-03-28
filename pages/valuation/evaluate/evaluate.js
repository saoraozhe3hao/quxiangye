Page({
  data: {
    score: 10
  },
  onLoad: function (query) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '评价'
    });
  },
  sliderChange: function(event){
    this.setData({
      score: event.detail.value
    });
  },
  submit: function(event){
    
  }
})