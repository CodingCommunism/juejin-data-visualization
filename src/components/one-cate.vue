<template>
  <el-card class="one-cate__container">
    <template #header>
      <div class="card-header">
        <span>{{ cateInfo.type }}</span>
      </div>
    </template>
    <div class="one-cate__content-container">
      <div class="left">
        <el-table height="400" :data="cateInfo.list" style="width: 100%">
          <el-table-column prop="title" label="文章标题" >
            <template #default="scope">
              <el-link :href="scope.row.linkUrl" type="primary">{{
                scope.row.title
              }}</el-link>
            </template>
          </el-table-column>
          <el-table-column prop="author" label="作者" width="150">
          </el-table-column>
          <el-table-column prop="diggCount" label="点赞数" width="80">
          </el-table-column>
          <el-table-column prop="viewCount" label="阅读数" width="80">
          </el-table-column>
          <el-table-column prop="hotCount" label="热度🔥" width="80">
          </el-table-column>
        </el-table>
      </div>
      <div class="right" ref="chart"></div>
    </div>
  </el-card>
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
  props: {
    cateInfo: {
      type: Object,
      default: () => ({}),
    },
    tagInfo: {
      type: Map,
      default: () => new Map(),
    },
  },
  setup(props) {
    const { tagInfo, cateInfo } = props;
    const chart: Ref<unknown> = ref(null);

    const tags = computed(() => {
      const _tags = [...tagInfo].sort((before, behind) => {
        return Number(behind[1]) - Number(before[1]);
      });
      return _tags;
    });

    const initChart = () => {
      const _chartsContainer = echarts.init(chart.value as HTMLElement);
      _chartsContainer.setOption({
        title: {
          text: 'Top100文章标签统计',
          subtext: `${cateInfo.type}分类`,
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: tags.value.map(item=>item[0]),
        },
        series: [
          {
            name: "标签",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: tags.value.map(item=>{
                return {
                    name: item[0],
                    value: item[1]
                }
            }),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    };

    watchEffect(() => {
      if (!chart.value) return;
      initChart();
    });

    return {
      tags,
      chart,
    };
  },
});
</script>
<style lang="less" scoped>
.one-cate__container {
  margin-bottom: 8px;
  .one-cate__content-container {
    display: flex;
    .left {
      flex: 5;
      overflow: auto;
    }
    .right {
      flex: 4;
      height: 400px;
    }
  }
}
</style>