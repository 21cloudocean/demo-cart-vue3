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
    ></EsGoods>
    <!-- 使用 es-footer 组件 -->
    <EsFooter :total="0" :amount="0" @fullChange="onFullStateChange"></EsFooter>
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
      console.log(isFull)
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
