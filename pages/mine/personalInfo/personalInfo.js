Page({
  data: {

  },
  onLoad: function(options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '个人信息'
    })
  },
  basic: function (event) {
    wx.navigateTo({
      url: './basic/basic'
    })
  },
  phone: function (event) {
    wx.navigateTo({
      url: './phone/phone'
    })
  },
  selfMedia: function (event) {
    wx.navigateTo({
      url: './selfMedia/selfMedia'
    })
  },
  bankCard: function (event) {
    wx.navigateTo({
      url: './bankCard/bankCard'
    })
  }
})