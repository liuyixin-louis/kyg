// pages/gonggu/gonggu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dropDownMenuTitle: ['学科选择'],
  data1: [{
      id: 0,
      title: '自然语言处理',
      childModel: [{
          id: '0-1',
          title: '文本标注'
        },
        {
          id: '0-2',
          title: '语义识别'
        }
      ]
    },
    {
      id: 1,
      title: '计算机视觉',
      childModel: [{
          id: '1-1',
          title: '图像分割'
        },
        {
          id: '1-2',
          title: '目标检测'
        }
      ]
    }
  ],
  data4: [{
    id: 1,
    title: '智能排序'
  }, {
    id: 2,
    title: '发布时间'
  }, {
    id: 3,
    title: '距离优先'
  }],
  goutu_record: [
    {
      "goutu_record":"0",
      "pic":"https://www.edrawsoft.cn/images/mindmaster/xueshulw.png",
      "name":"基于分解策略的多目标优化算法",
      "tiezi_number":123,
      "introduce":"构图所用时长：32s，准确率：90%"
    },
  ],
  },

  silly:function(event){

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