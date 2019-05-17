

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curtainPic: '/images/curtain.png',
    lightPic: '/images/light.png',
    btnPic: '/images/button.png',
    lightData:'已开灯',
    curtainData:'窗帘已打开',
  },
  getLightHandel() {
    const that = this;
    wx.request({
      url: "http://39.97.116.177:9088/baiduAI2/getLight", // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          lightData: res.data.data.theLight
        })
      }
    })
  },
  getCurtainHandel() {
    const that = this;
    wx.request({
      url: "http://39.97.116.177:9088/baiduAI2/getCurtain", // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          curtainData: res.data.data.theCurtain,
        })
      }
    })
  },
  getLightCurtainHandel() {
    const that = this;
    wx.request({
      url: "http://39.97.116.177:9088/baiduAI2/getLightCurtain", // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        console.log(res.data.data.theLight)
        that.setData({
          lightData: res.data.data.theLight,
          curtainData: res.data.data.theCurtain,
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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
    this.getLightCurtainHandel();
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