// pages/jiaoliu/jiaoliu.js

const citys = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dropDownMenuTitle: ['学科选择'],
    xueke: [{
        title: '自然语言处理',
        childModel: [{
            title: '文本标注'
          },
          {
            title: '语义识别'
          }
        ]
      },

      {
        title: '计算机视觉',
        childModel: [{
            title: '图像分割'
          },
          {
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
    taolunqu_array: [
      {
        "taolunqu_id":"0",
        "pic":"https://www.tianqiweiqi.com/wp-content/uploads/2019/05/6-4-cnn.png",
        "name":"卷积神经网络讨论小组",
        "tiezi_number":123,
        "introduce":"让我们一起来讨论CNN把~"
      },
    ],
    columns: [
      {
        values: Object.keys(citys),
        className: 'column1',
      },
      {
        values: citys['浙江'],
        className: 'column2',
        defaultIndex: 2,
      },
    ],
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    picker.setColumnValues(1, citys[value[0]]);
  },
  bindPickerChange_hx: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    hx_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
    console.log('自定义值:', this.data.hx_select);
   },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
        tihuoWay: name,
        select: false
    })
},
into_taolunqu:function(event){
    wx.navigateTo({
      url: '../taolunqu/taolunqu',
    })
},
into_liaotian:function(event){
  wx.navigateTo({
    url: '../liaotianshi/liaotianshi',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const this_ = this;
    wx.request({
      url: 'http://localhost:5000/get_xueke',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        this_.setData({
          xueke:res.data.res
        })
      }
    })
  },
  bindShowMsg() {
    this.setData({
        select:!this.data.select
    })
},f0:function(event){
  console.log(this.data.count);
  this.setData({
    count : this.data.count + 1
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