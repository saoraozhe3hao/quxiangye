Page({
  data: {
    startDate: '2019-09-01',
    endDate: '2019-09-01',
    stayOver: 1,
    hotel: true,
    provide: false,
    activityImg: [],
    foodImg: [],
    stayOverImg: []
  },
  onLoad: function(options) {
    wx.showShareMenu();
    wx.setNavigationBarTitle({
      title: '发布'
    });
  },
  dateChange: function(event) {
    this.setData({
      date: event.detail.value
    });
  },
  stayOverChange: function(event) {
    this.setData({
      stayOver: event.detail.value
    });
  },
  checkboxChange: function(event) {
    this.setData({
      provide: event.detail.value.includes('2')
    });
  },
  chooseImg: function(event) {
    wx.chooseImage({
      sizeType: ['compressed'],
      success: (res) => {
        let data = {};
        data[event.target.dataset.type] = this.data[event.target.dataset.type].concat(res.tempFilePaths)
        this.setData(data);
      }
    })
  },
  preview: function(event) {
    wx.previewImage({
      current: event.target.dataset.src,
      urls: this.data[event.target.dataset.type]
    })
  },
  remove: function(event) {
    let data = {};
    this.data[event.target.dataset.type].splice(event.target.dataset.index, 1);
    data[event.target.dataset.type] = this.data[event.target.dataset.type];
    this.setData(data);
  },
  publish: function(event) {

  }
})