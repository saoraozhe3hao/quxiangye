Page({
  data: {
    types: ['未提供服务','联系不上','与描述差距太大','其他'],
    type: 0,
    orderId: ''
  },
  onLoad: function (options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '申请退款'
    });
    this.setData({
      orderId: options.orderId
    });
  },
  typeChange: function(event){
    this.setData({
      type: event.detail.value
    });
  },
  submit: function(){

  }
})