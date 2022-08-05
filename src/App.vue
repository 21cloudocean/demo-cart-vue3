<template>
  <div class="app-container">
    <h1>App根组件</h1>
    <hr />
    <!-- 使用 es-header 组件 -->
    <!-- 为 es-header 组件指定 title 属性的值 -->
    <EsHeader title="购物车案例"></EsHeader>
    <!-- 使用 goods 组件 -->
    <EsGoods
      v-for="item in goodslist"
      :key="item.id"
      :id="item.id"
      :thumb="item.goods_img"
      :title="item.goods_name"
      :price="item.goods_price"
      :count="item.goods_count"
      :checked="item.goods_state"
      @stateChange="onGoodsStateChange"
      @countChange="onGoodsCountChange"
    ></EsGoods>
    <!-- 使用 es-footer 组件 -->
    <EsFooter
      :total="total"
      :amount="amount"
      @fullChange="onFullStateChange"
    ></EsFooter>
  </div>
</template>

<script>
// 导入 header 组件
import EsHeader from './components/es-header/EsHeader.vue'
// 导入 footer 组件
import EsFooter from './components/es-footer/EsFooter.vue'
// 导入 goods 组件
import EsGoods from './components/es-goods/EsGoods.vue'

export default {
  name: 'MyApp',
  components: {
    // 注册 header 组件
    EsHeader,
    // 注册 footer 组件
    EsFooter,
    // 注册 goods 组件
    EsGoods
  },
  data() {
    return {
      // 商品列表的数据
      goodslist: []
    }
  },
  methods: {
    // 请求商品列表的数据
    async getGoodsList() {
      // 1. 通过组件实例 this 访问到全局挂载的 $http 属性，并发起Ajax 数据请求
      const { data: res } = await this.$http.get('/api/cart')
      // 2. 判断请求是否成功
      if (res.status !== 200) return alert('请求商品列表数据失败！')
      // 3. 将请求到的数据存储到 data 中，供页面渲染期间使用
      this.goodslist = res.list
    },
    // 监听全选按钮状态的变化
    onFullStateChange(isFull) {
      // 打印全选按钮最新的选中状态
      // console.log(isFull)
      this.goodslist.forEach((x) => (x.goods_state = isFull))
    },
    // 监听商品选中状态变化的事件
    onGoodsStateChange(e) {
      // 1. 根据 id 进行查找（注意：e 是一个对象，包含了 id 和 value两个属性）
      const findResult = this.goodslist.find((x) => x.id === e.id)
      // 2. 找到了对应的商品，则更新其选中状态
      if (findResult) {
        findResult.goods_state = e.value
      }
    },
    // 监听商品数量变化的事件
    onGoodsCountChange(e) {
      // 根据 id 进行查找
      const findResult = this.goodslist.find((x) => x.id === e.id)
      // 找到了对应的商品，则更新其数量
      if (findResult) {
        findResult.goods_count = e.value
      }
    }
  },
  computed: {
    // 已勾选商品的总价
    amount() {
      // 1. 定义商品总价格
      let a = 0
      // 2. 循环累加商品总价格
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          a += x.goods_price * x.goods_count
        })
      // 3. 返回累加的结果
      return a
    },
    // 已勾选商品的总数量
    total() {
      // 1. 定义已勾选的商品总数量
      let t = 0
      // 2. 循环累加
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => (t += x.goods_count))
      // 3. 返回计算的结果
      return t
    }
  },
  // 组件实例创建完毕之后的生命周期函数
  created() {
    // 调用 methods 中的 getGoodsList 方法，请求商品列表的数据
    this.getGoodsList()
  }
}
</script>

<style lang="less" scoped></style>
