var cityData = require('../../utils/city.js'); //引入城市信息
var shopData = require('../../utils/shop.js'); //引入shop信息
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [],
    px: ['最新发布', '推荐排序', '价格由低到高', '价格由高到低'], //排序列表内容
    dqopen: false, //点击地区筛选滑动弹窗显示效果，默认不显示
    dqshow: true, //用户点击闭关地区的弹窗设置，默认不显示
    pxopen: false, //排序筛选弹窗
    pxshow: true,
    isfull: false,
    city1: cityData.getCity(), //获取地区的下拉框筛选项内容
    city2: {}, //选择地区左边筛选框后的显示的第二部分内容部分
    city3: {}, //选择地区的中间内容部分后显示的第三内容
    city4: {}, //选择地区的中间内容部分后显示的第四内容
    select1: '', //地区选中后的第二个子菜单，默认显示下的子菜单
    select2: '', //地区选择部分的中间
    select3: '', //地区选择部分的右边
    dqname: "地区",
    pxIndex: 0, //排序内容下拉框，默认第一个
    adImages: [
      "../../images/ad/ad.jpg",
      "../../images/ad/ad.jpg",
      "../../images/ad/ad.jpg",
      "../../images/ad/ad.jpg"
    ],
    shop: shopData.getShop().shop
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  shopDetail: function(e) {
    var item = e.currentTarget.id;
    
    wx.navigateTo({
      url: '../shopDetail/shopDetail?item=' + item
    })
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

  },



  // 地区列表下拉框是否隐藏
  listdq: function(e) {
    if (this.data.qyopen) {
      this.setData({

        dqopen: false,
        pxopen: false,
        pxshow: true,
        qyshow: false,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        qyopen: true,
        pxopen: false,
        pxshow: true,
        qyshow: false,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }

  },

  // 排序下拉框是否隐藏
  listpx: function(e) {
    if (this.data.pxopen) {
      this.setData({
        nzopen: false,
        qyopen: false,
        pxshow: false,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.px,
        pxopen: true,
        qyopen: false,
        pxshow: false,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },





  // 地区第一栏选择内容
  selectleft: function(e) {
    console.log('用户选中的省份是：' + e.target.dataset.city);
    this.setData({
      city3: {},
      city2: this.data.city1[e.currentTarget.dataset.city],
      select1: e.target.dataset.city,
      select2: ''
    });
  },
  // 地区第二栏选择的内容
  selectcenter: function(e) {
    console.log('用户选中的市区是：' + e.target.dataset.city);
    this.setData({
      city3: this.data.city2[e.currentTarget.dataset.city],
      select2: e.target.dataset.city
    });
  },
  // 地区第三栏选择的内容
  selectright: function(e) {
    console.log(e.currentTarget.dataset.city);
    this.setData({
      select3: e.currentTarget.dataset.city,
    });
  },
  // 点击灰色背景隐藏所有的筛选内容
  hidebg: function(e) {
    this.setData({
      qyopen: false,
      pxopen: false,
      pxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0,
    })
  },
  // 地区清空筛选项
  quyuEmpty: function() {
    this.setData({
      select1: '',
      select2: '',
      select3: '-1'
    })
  },
  // 地区选择筛选项后，点击提交
  submitFilter: function() {
    console.log('选择的一级选项是：' + this.data.select1);
    console.log('选择的二级选项是：' + this.data.select2);
    console.log('选择的三级选项是：' + this.data.select3);
    // 隐藏地区下拉框
    this.setData({
      qyopen: false,
      pxopen: false,
      pxshow: true,
      qyshow: false,
      isfull: false,
      dqname: this.data.select2,
      shownavindex: 0
    })
  },

  // 排序内容下拉框筛选
  selectPX: function(e) {
    console.log('排序内容下拉框筛选的内容是' + e.currentTarget.dataset.index);
    this.setData({
      pxIndex: e.currentTarget.dataset.index,
      pxopen: false,
      qyopen: false,
      pxshow: false,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    });
    // console.log('当前' + this.data.pxIndex);
  },
})