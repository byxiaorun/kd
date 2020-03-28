// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //当前选项卡的编号
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: [],
    nickname: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;

    // 查看是否授权 
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称 
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) { // 获取到用户信息
    var userInfo = e.detail.userInfo
    var nickname = e.detail.userInfo.nickName
    this.setData({
      userInfo: userInfo,
      nickname:nickname,
    })
    console.log(userInfo)
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
  switchNav: function (e) { //点击切换
    if (this.data.currentTab == e.target.dataset.current) {
      //如果currentTab等于它自己，什么都不做
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      });
    }
  },
  tab_slide: function (e) { //滑动切换tab 
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  formSubmit: function (e) {
    console.log('用户名：' + e.detail.value.username);
    console.log('密码：' + e.detail.value.psw);
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