// pages/weather/weather.js
var app = getApp();//获取当前小程序实例，方便使用全局方法和属性
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur_id: app.curid,
    basic: "",
    now: "",
    suggestion: ""
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
    var that = this;
    wx.showToast({ title: '加载中', icon: 'loading', duration: 10000 })//设置加载模态框
    that.getnow(function (d) {//获取到数据的回调函数
      wx.hideToast();
      d.now.cond.src = "http://files.heweather.com/cond_icon/" + d.now.cond.code + ".png";
      that.setData({ basic: d.basic, now: d.now })//更新数据，视图将同步更新
    })
    that.getsuggestion(function (d) {
      that.setData({ suggestion: d.suggestion })//更新数据
    })
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