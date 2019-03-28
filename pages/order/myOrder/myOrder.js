Page({
  data: {

  },
  onLoad: function (options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '我的订单'
    })
  },
  switch: function(event){

  },
  orderDetail: function(event){
    wx.navigateTo({
      url: '../../order/orderDetail/orderDetail' + '?orderId=' + event.currentTarget.id
    })
  },
  refund: function(event){
    wx.navigateTo({
      url: '../refund/refund' + '?orderId=' + event.currentTarget.id
    })
  },
  evaluate: function(event){
    wx.navigateTo({
      url: '../../valuation/evaluate/evaluate' + '?orderId=' + event.currentTarget.id
    })
  }
})