Page({
  data: {
    date: '2019-09-01'
  },
  onLoad: function (options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '订单详情'
    })
  },
  down: function(){
    wx.showModal({
      title: '提示',
      content: '确定要下架？',
      success(res) {
        if (res.confirm) {
          console.log('下架')
        } else if (res.cancel) {
          console.log('不下架')
        }
      }
    })
  },
  dateChange: function (event) {
    this.setData({
      date: event.detail.value
    });
  },
  valuation: function(){
    wx.navigateTo({
      url: '../../valuation/valuation/valuation' + '?productId=' + this.options.id
    })
  },
  appointment: function(){
    wx.navigateTo({
      url: '../../publish/appointment/appointment' + '?productId=' + this.options.id
    })
  }
})