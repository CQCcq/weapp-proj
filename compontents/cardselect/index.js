// logs.js
Component({
  properties: {
    cartList: { // 属性名
      type: Array,
      value: ''
    },
    myProperty2: String // 简化的定义方式
  },
  data: {
  }, // 私有数据，可用于模板渲染
  methods: {
    onSelectItem: function(detail){
      this.triggerEvent('routelink', detail,{bubbles:false,composed:false,capturePhase:false}) // 只会触发
    }
  }
})
