
Page({
  data: {
    recents: ['西安','陕西','渭南'],
    province: 0,
    provinces: ['全国', '北京', '天津', '上海', '重庆', '河北', '山西', '辽宁', '吉林', '黑龙江', '江苏',
      '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '海南', '四川', '贵州', '云南',
      '陕西', '甘肃', '青海', '内蒙古', '广西', '西藏', '宁夏', '新疆'
    ],
    cities: ['宁夏', '银川', '石嘴山', '吴忠', '固原', '中卫']
  },
  onLoad: function() {

  },
  provinceChange: function(event){
    this.setData({
      province: event.detail.value
    })
  },
  back: function(event){
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    prevPage.setData({
      location: event.target.id
    })
    wx.navigateBack()

  }
})