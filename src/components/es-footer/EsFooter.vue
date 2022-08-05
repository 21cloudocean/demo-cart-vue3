<template>
  <div class="footer-container">
    <!-- 全选按钮 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="fullCheck"
        :checked="isfull"
        @change="onCheckBoxChange"
      />
      <label class="custom-control-label" for="fullCheck">全选 </label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计：</span>
      <!-- 将 amount 的值保留两位小数 -->
      <span class="amount">￥{{ amount.toFixed(2) }}</span>
    </div>
    <!-- 结算按钮 -->
    <!-- disabled 的值为 true，表示禁用按钮 -->
    <button type="button" class="btn btn-primary" :disabled="total === 0">
      结算({{ total }})
    </button>
  </div>
</template>
<script>
export default {
  name: 'EsFooter',
  props: {
    // 已勾选商品的总价格
    amount: {
      type: Number,
      default: 0
    },
    // 已勾选商品的总数量
    total: { type: Number, default: 0 },
    // 全选按钮的选中状态
    isfull: {
      type: Boolean,
      default: false
    }
  },
  // 声明自定义事件
  emits: ['fullChange'],
  methods: {
    // 监听复选框选中状态的变化
    onCheckBoxChange(e) {
      // e.target.checked 是复选框最新的选中状态
      // console.log(e.target.checked)
      // 触发自定义事件
      this.$emit('fullChange', e.target.checked)
    }
  }
}
</script>
<style lang="less" scoped>
.footer-container {
  // 设置宽度和高度
  height: 50px;
  width: 100%;
  // 设置背景颜色和顶边框颜色
  background-color: white;
  border-top: 1px solid #efefef;
  // 底部固定定位
  position: fixed;
  bottom: 0;
  left: 0;
  // 内部元素的对齐方式
  display: flex;
  justify-content: space-between;
  align-items: center;
  // 设置左右 padding
  padding: 0 10px;
}
.amount {
  color: red;
  font-weight: bold;
}
.btn-primary {
  // 设置固定高度
  height: 38px;
  // 设置圆角效果
  border-radius: 19px;
  // 设置最小宽度
  min-width: 90px;
}
</style>
