var app = getApp()
Page({
  data: {
    navbar: ['约饭', '约球', '约图书馆'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
}) 