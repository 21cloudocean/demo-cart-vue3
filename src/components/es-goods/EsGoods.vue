<template>
  <div class="goods-container">
    <!-- 左侧图片和复选框区域 -->
    <div class="left">
      <!-- 复选框 -->
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :id="id" />
        <!-- 将商品图片包裹于 label 之中，点击图片可以切换“复选框”的选
中状态 -->
        <label class="custom-control-label" :for="id">
          <img src="" alt="商品图片" class="thumb" />
        </label>
      </div>
      <!-- <img src="" alt="商品图片" class="thumb" /> -->
    </div>

    <!-- 右侧信息区域 -->
    <div class="right">
      <!-- 商品名称 -->
      <div class="top">xxxx</div>
      <div class="bottom">
        <!-- 商品价格 -->
        <div class="price">￥0.00</div>
        <!-- 商品数量 -->
        <div class="count">数量</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EsGoods',
  props: {
    // 唯一的 key 值
    id: {
      type: [String, Number], // id 的值可以是“字符串”也可以是“数值”
      required: true
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
