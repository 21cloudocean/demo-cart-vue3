<template>
  <div>
    <h1>App根组件</h1>
    <!-- 使用 es-header 组件 -->
    <EsHeader></EsHeader>
  </div>
</template>

<script>
// 导入 header 组件
import EsHeader from './components/es-header/EsHeader.vue'
export default {
  name: 'MyApp',
  components: {
    // 注册 header 组件
    EsHeader
  }
}
</script>

<style lang="less" scoped></style>
