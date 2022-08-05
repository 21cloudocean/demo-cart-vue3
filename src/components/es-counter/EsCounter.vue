<template>
  <div class="counter-container">
    <!-- 数量 -1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onSubClick">
      -
    </button>
    <!-- 输入框 -->
    <input
      type="number"
      class="form-control form-control-sm ipt-num"
      v-model.number.lazy="number"
    />
    <!-- 数量 +1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onAddClick">
      +
    </button>
  </div>
</template>
<script>
export default {
  name: 'EsCounter',
  watch: {
    // 监听 number 数值的变化
    number(newVal) {
      // 1. 将输入的新值转化为整数
      const parseResult = parseInt(newVal)
      // 2. 如果转换的结果不是数字，或小于1，则强制 number 的值等于1
      if (isNaN(parseResult) || parseResult < 1) {
        this.number = 1
        return
      }
      // 3. 如果新值为小数，则把转换的结果赋值给 number
      if (String(newVal).indexOf('.') !== -1) {
        this.number = parseResult
        return
      }
      // console.log(this.number)
      // 触发自定义事件，把最新的 number 数值传递给组件的使用者
      this.$emit('numChange', this.number)
    }
  },
  props: {
    // 数量值
    num: {
      type: Number,
      default: 0
    },
    // 最小值
    min: {
      type: Number,
      // min 属性的值默认为 NaN，表示不限制最小值
      default: NaN
    }
  },
  data() {
    return {
      // 内部状态值【可读可写的数据】
      // 通过 this 可以访问到 props 中的初始值
      number: this.num
    }
  },
  emits: ['numChange'],

  methods: {
    // -1 按钮的事件处理函数
    onSubClick() {
      // 判断条件：min 的值存在，且 number - 1 之后小于 min
      if (!isNaN(this.min) && this.number - 1 < this.min) return
      this.number -= 1
    },
    // +1 按钮的事件处理函数
    onAddClick() {
      this.number += 1
    }
  }
}
</script>
<style lang="less" scoped>
.counter-container {
  display: flex;
  // 按钮的样式
  .btn {
    width: 25px;
  }
  // 输入框的样式
  .ipt-num {
    width: 34px;
    text-align: center;
    margin: 0 4px;
  }
}
</style>
