<template>
    <div class="top-bar__container">
        <div class="title">掘金优秀文章可视化</div>
        <span class="des">针对掘金各大分类top100文章进行数据分析展示～</span>
        <span class="tip">(tip:热度🔥 = 阅读数/100 + 点赞数 +1000 * 点赞数/阅读数) </span>
    </div>
</template>
<script lang="ts">
import * as echarts from "echarts";
import {
  ref,
  Ref,
  defineComponent,
  onMounted,
  computed,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
    name: "TopBar"
})
</script>
<style lang="less" scoped>
.top-bar__container {
    height: 80px;
    background: linear-gradient(to bottom, #d6f4fe 0%,#f0f4f6 100%);
    padding: 32px 48px;
    .title {
        font-family: "Helvetica Neue";
        font-size: 30px;
        font-weight: 600;
        color: #3f7ef7;
        margin-bottom: 8px;
    }
    .des {
        color: #909399;
    }
    .tip {
        color:red;
        font-size: 8px;
        margin-left: 16px;
    }
}
</style>