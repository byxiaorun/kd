// pages/kdcx/kdcx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cx: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    var gs = e.gs;
    var kd = e.kd;
    if (gs == 0) {
      var cx = ' https://m.kuaidi100.com/result.jsp?nu=' + kd;
      console.log('快递公司:自动识别')
    } else if (gs == 1) {
      var cx = ' https://m.kuaidi100.com/index_all.html?type=shunfeng&postid=' + kd;
      console.log('快递公司:顺丰快递')
    } else if (gs == 2) {
      var cx = ' https://m.kuaidi100.com/index_all.html?type=shentong&postid=' + kd;
      console.log('快递公司:申通快递')
    } else if (gs == 3) {
      var cx = ' https://m.kuaidi100.com/index_all.html?type=yuantong&postid=' + kd;
      console.log('快递公司:圆通快递')

    } else if (gs == 4) {
      var cx = ' https://m.kuaidi100.com/index_all.html?type=zhongtong&postid=' + kd;
      console.log('快递公司:中通快递')
    } else if (gs == 5) {
      var cx = ' https://m.kuaidi100.com/index_all.html?type=yunda&postid=' + kd;
      console.log('快递公司:韵达快递')
    }
    this.setData({
      cx: cx
    });
    console.log(cx);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})