// pages/taolunqu/taolunqu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dropDownMenuTitle: ['筛选'],
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
    tiezi_array:[
      {
        "tiezi_id":"0",
        "title":"如何理解“感受野”这个概念？",
        "content_abstart":"有什么比较形象的类比吗？我很困惑",
        "pic":"https://pic2.zhimg.com/80/v2-a7a8f5b74d66f7b5389f9c17a1417c09_720w.jpg",
  
      }
    ]
  },
  into_tiezi_detail:function(event){
    wx.navigateTo({
      url: '../tiezi_detail/tiezi_detail',
    })
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