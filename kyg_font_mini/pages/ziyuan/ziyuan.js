// pages/jiaoliu/jiaoliu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {fileList: [],
    dropDownMenuTitle: ['学科选择'],
    xueke: [{
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
    ziyuan_array: [
      {
        "taolunqu_id":"0",
        "pic":"https://images-na.ssl-images-amazon.com/images/I/41DySaoRS7L._SX367_BO1,204,203,200_.jpg",
        "name":"《动态多目标优化算法》",
        "introduce":"多目标优化领域必读经典之作"
      },
    ]
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
afterRead(event) {
  const { file } = event.detail;
  // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  wx.uploadFile({
    url: 'https://localhost:5000/upload', // 仅为示例，非真实的接口地址
    filePath: file.path,
    name: 'file',
    formData: { user: 'test' },
    success(res) {
      // 上传完成需要更新 fileList
      const { fileList = [] } = this.data;
      fileList.push({ ...file, url: res.data });
      this.setData({ fileList });
    },
  });
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