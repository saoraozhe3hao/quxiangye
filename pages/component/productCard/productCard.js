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
    productDetail: function (event) {
      wx.navigateTo({
        url: '../../product/productDetail/productDetail' + '?id=' + event.currentTarget.id
      })
    }
  }
})