// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kuaidi: ["自动识别","顺丰", "申通", "圆通", "中通", "韵达"],
    index: 0, //当前被选中的序号
    kd: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  kuaidiChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    console.log(this.data.index)
  },
  kdcx: function (e) {
    var kd = this.data.kd
    var gs = this.data.index
    if (kd == '') {
      wx.showModal({
        title: "错误",
        content: "快递单号不能为空",
      })
    }
    else {
      wx.navigateTo({
        url: '../kdcx/kdcx?gs=' + gs + '&kd=' + kd
      })
    }
    console.log(gs)
    console.log('快递单号：'+kd)
  },
  formSubmit: function (e) {
    var kd = e.detail.value.kd
    this.setData({
      kd: kd
    });
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})