<template>
  <el-card class="all-cate__container">
    <template #header>
      <div class="card-header">
        <span>全部分类信息统计</span>
      </div>
    </template>
    <div class="all-cate__content-container">
      <div class="left" ref="barChart"></div>
      <div class="right" ref="pieChart">
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
//TODO:遇到暂时无法解决的问题 待解决 组件暂时未做拆分
import * as echarts from "echarts";
import { formatedArticleInfo } from "../types/index";
import {
  ref,
  Ref,
  defineComponent,
  onMounted,
  computed,
  watch,
  watchEffect,
  PropType,
} from "vue";
type ArticleProp = PropType<{ type: string; viewCount: number }[]>;
export default defineComponent({
  props: {
    allCateCounts: {
      type: Array as ArticleProp,
      default: () => ([]),
    },
    allTagsMap: {
      type: Map,
      default: () => new Map(),
    },
  },
  setup(props) {
    const { allCateCounts, allTagsMap } = props;
    const pieChart: Ref<unknown> = ref(null);
    const barChart: Ref<unknown> = ref(null);

    const tags = computed(() => {
      const _tags = [...allTagsMap].sort((before, behind) => {
        return Number(behind[1]) - Number(before[1]);
      });
      return _tags;
    });

    // const viewCounts = computed(() => {
    //   let counts = [];
    //   console.log(111, allCateCounts)
    //   for (const oneCateInfo of allCateCounts) {
    //     console.log(oneCateInfo,111)
    //     counts.push({
    //       type: oneCateInfo.type,
    //       viewCount: oneCateInfo.list.reduce(
    //         (prev: number, curr: formatedArticleInfo) => {
    //           return prev + curr.viewCount;
    //         }
    //       , 0),
    //     });
    //   }
    //   console.log(allCateArticles, viewCounts);
    //   return counts.sort((before, behind) => {
    //     return behind.viewCount - before.viewCount;
    //   });
    // });

    const initPieChart = () => {
      const _chartsContainer = echarts.init(pieChart.value as HTMLElement);
      _chartsContainer.setOption({
        title: {
          text: "全部分类文章标签统计",
          subtext: "二十大热门标签",
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
          data: tags.value.map((item) => item[0]).slice(0, 20),
        },
        series: [
          {
            name: "标签",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: tags.value
              .map((item) => {
                return {
                  name: item[0],
                  value: item[1],
                };
              })
              .slice(0, 20),
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

    // const initBarChart = () => {
    //   const _chartsContainer = echarts.init(barChart.value as HTMLElement);
    //   _chartsContainer.setOption({
    //     title: {
    //       text: "全分类热度排名",
    //       subtext: "",
    //       left: "center",
    //     },
    //     xAxis: {
    //       type: "category",
    //       data: viewCounts.value.map(item=>item.type),
    //     },
    //     yAxis: {
    //       type: "value",
    //     },
    //     series: [
    //       {
    //         data: viewCounts.value.map(item=>item.viewCount),
    //         type: "bar",
    //       },
    //     ],
    //   });
    // };
    watchEffect(() => {
      if (!pieChart.value) return;
      initPieChart();
      // initBarChart();
    });

    return {
      tags,
      // viewCounts,
      pieChart,
      barChart,
    };
  },
});
</script>
<style lang="less">
.all-cate__container {
  margin-bottom: 8px;
  .all-cate__content-container {
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