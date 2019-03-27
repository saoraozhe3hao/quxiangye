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
    product: function (event) {
      wx.navigateTo({
        url: '../../product/product' + '?id=' + event.currentTarget.id
      })
    }
  }
})