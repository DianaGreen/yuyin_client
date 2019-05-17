
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wdPic: '/images/temperature.png',
    wdData: '— —',
    sdPic: '/images/humidity.png',
    sdData: '— —',
    airPic: '/images/air.png',
    airData: '— —',
    rainPic: '/images/rain.png',
    rainData: '— —',
    gasPic: '/images/gas.png',
    gasData: '— —',
    firePic: '/images/fire.png',
    fireData: '— —',
  },
  getDeviceHandel(){
    const that = this;
    wx.request({
      url: "http://39.97.116.177:9088/baiduAI2/getdevice", // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          wdData: res.data.data.wdData,
          sdData: res.data.data.sdData,
          airData: res.data.data.airData,
          rainData: res.data.data.rainData,
          gasData: res.data.data.gasData,
          fireData: res.data.data.fireData,
        })
      }
    })
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
    this.getDeviceHandel();
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