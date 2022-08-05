<template>
  <div class="goods-container">
    <!-- 左侧图片和复选框区域 -->
    <div class="left">
      <!-- 复选框 -->
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="id"
          :checked="checked"
          @change="onCheckBoxChange"
        />
        <!-- 将商品图片包裹于 label 之中，点击图片可以切换“复选框”的选
中状态 -->
        <label class="custom-control-label" :for="id">
          <img :src="thumb" alt="商品图片" class="thumb" />
        </label>
      </div>
      <!-- <img src="" alt="商品图片" class="thumb" /> -->
    </div>

    <!-- 右侧信息区域 -->
    <div class="right">
      <!-- 商品名称 -->
      <div class="top">>{{ title }}</div>
      <div class="bottom">
        <!-- 商品价格 -->
        <div class="price">￥{{ price.toFixed(2) }}</div>
        <!-- 商品数量 -->
        <div class="count">
          <!-- 使用 es-counter 组件 -->
          <EsCounter :num="count" :min="1" @numChange="getNumber"></EsCounter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 导入 counter 组件
import EsCounter from '../es-counter/EsCounter.vue'
export default {
  name: 'EsGoods',
  components: {
    // 注册 counter 组件
    EsCounter
  },

  props: {
    // 唯一的 key 值
    id: {
      type: [String, Number], // id 的值可以是“字符串”也可以是“数值”
      required: true
    },
    // 1. 商品的缩略图
    thumb: {
      type: String,
      required: true
    },
    // 2. 商品的名称
    title: {
      type: String,
      required: true
    },
    // 3. 单价
    price: { type: Number, required: true },
    // 4. 数量
    count: {
      type: Number,
      required: true
    },
    // 5. 商品的勾选状态
    checked: {
      type: Boolean,
      required: true
    }
  },
  emits: ['stateChange', 'countChange'],

  methods: {
    // 监听复选框选中状态变化的事件
    onCheckBoxChange(e) {
      // e.target.checked 是最新的勾选状态
      // console.log(e.target.checked)
      // 向外发送的数据是一个对象，包含了 { id, value } 两个属性
      this.$emit('stateChange', {
        id: this.id,
        value: e.target.checked
      })
    },
    // 监听数量变化的事件
    getNumber(num) {
      // console.log(num)
      // 触发自定义事件，向外传递数据对象 { id, value }
      this.$emit('countChange', {
        // 商品的 id
        id: this.id,
        // 最新的数量
        value: num
      })
    }
  }
}
</script>
<style lang="less" scoped>
.goods-container {
  display: flex;
  padding: 10px;
  // 左侧图片的样式
  // 最终生成的选择器为 .goods-container + .goods-container
  // 在 css 中，（+）是“相邻兄弟选择器”，表示：选择紧连着另一元素后的元素，二者具有相同的父元素。
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  .left {
    margin-right: 10px;
    // 商品图片
    .thumb {
      display: block;
      width: 100px;
      height: 100px;
      background-color: #efefef;
    }
  }
  // 右侧商品名称、单价、数量的样式
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .top {
      font-weight: bold;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
.custom-control-label::before,
.custom-control-label::after {
  top: 3.4rem;
}
</style>
