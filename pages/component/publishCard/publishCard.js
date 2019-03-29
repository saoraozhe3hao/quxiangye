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
    publishDetail: function (event) {
      wx.navigateTo({
        url: '../../publish/publishDetail/publishDetail' + '?id=' + event.currentTarget.id
      })
    }
  }
})