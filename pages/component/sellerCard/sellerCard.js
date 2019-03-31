Component({
  properties: {

  },
  data: {
  },
  lifetimes: {
    attached() { },
    moved() { },
    detached() { },
  },
  pageLifetimes: {
    show() { },
    hide() { },
    resize() { },
  },
  methods: {
    sellerDetail: function (event) {
      wx.navigateTo({
        url: '../../seller/sellerDetail/sellerDetail' + '?sellerId=' + event.target.dataset.id
      })
    }
  }
})