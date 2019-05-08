// 录音对象
const recorderManager = wx.getRecorderManager();

function sendRecord(src) {
  var obj = {
    //服务器地址
    // url: "http://192.168.1.103:9088/baiduAI2/recognition"

    url: "http://39.97.116.177:9088/baiduAI2/recognition",


    filePath: src,
    name: "fffile",
    header: {
      'Content-Type': 'application/json'
    },
    success: function (result) {
      console.log('hellos', result);
      var data = JSON.parse(result.data);
      // msg 为最终语音识别的字符串
      var msg = data.result;
      console.log('hello', msg);
      var audioSrc = data.audioSrc;
      // 获取当前页面对象
      var page = getCurrentPages()[0];
      page.setData({ msg: msg, src: audioSrc });
    },
    fail: function (err) {
      console.log('iserr', err);
    }
  };
  wx.uploadFile(obj)
}

// 结束录音的时候触发 
recorderManager.onStop((res) => {
  // 获取文件路径-提交到后台-后台发送到百度
  sendRecord(res.tempFilePath);
})

recorderManager.onError((res) => {
  console.log("error", res);
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "",
    poster: '',
    name: '自己的录音',
    author: 'yonga',
    src: ""
  },
  // 按下按钮的时候触发
  startrecorderHandel() {
    // 开始录音
    console.log('开始录音');
    recorderManager.start({
      duration: 60000,//百度最多支持60s语音
      sampleRate: 16000,
      //encodeBitRate: 48000,
      numberOfChannels: 1,//必须指定录音通道数
      format: 'mp3'
    });
  },
  // 松开按钮的时候触发-发送录音
  sendrecorderHandel() {
    // 结束录音
    console.log('结束录音');
    recorderManager.stop();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.authorize({
      scope: 'record'
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