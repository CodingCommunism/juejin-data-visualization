<template>
  <TopBar />
  <div class="content-container">
    <!-- <AllCate :allCateCounts="allCateCounts" :allTagsMap="allTagsMap" /> -->
    <el-card class="all-cate__container">
      <template #header>
        <div class="card-header">
          <span>全部分类信息统计</span>
        </div>
      </template>
      <div class="all-cate__content-container">
        <div class="left" ref="barChart"></div>
        <div class="right" ref="pieChart"></div>
      </div>
    </el-card>
    <OneCate
      v-for="cateInfo in allCateArticles"
      :key="cateInfo.type"
      :cateInfo="cateInfo"
      :tagInfo="allCateTagsMap.get(cateInfo.type)"
    />
  </div>
</template>
<script lang="ts">
import { ref, Ref, defineComponent, onMounted, computed, watchEffect } from "vue";
import axios from "axios";
import { articleInfo, formatedArticleInfo } from "../types/index";
import OneCate from "./one-cate.vue";
import AllCate from "./all-cate.vue";
import TopBar from "./top-bar.vue";
import * as echarts from "echarts";
export default defineComponent({
  name: "Container",
  components: {
    OneCate,
    AllCate,
    TopBar,
  },
  props: {},
  setup: () => {
    //variable Init
    const pieChart: Ref<unknown> = ref(null);
    const barChart: Ref<unknown> = ref(null);
    const containerDom: Ref<unknown> = ref(null);
    const allCateArticles: Ref<Array<any>> = ref([]);
    const allCateTagsMap: Ref<Map<string, Map<string, number>>> = ref(
      new Map()
    );
    const allTagsMap: Ref<Map<string, number>> = ref(new Map());
    const allCateCounts: Ref<
      Array<{
        type: string;
        viewCount: number;
      }>
    > = ref([]);

    const tags = computed(() => {
      const _tags = [...allTagsMap.value].sort((before, behind) => {
        return Number(behind[1]) - Number(before[1]);
      });
      return _tags;
    });
    //Functions statements

    const initAllCateInfo = async () => {
      const res = await axios.get("/api/local/article");
      return res.data || [];
    };

    const init = (
      allCateInfo: Array<{
        type: string;
        articles: Array<articleInfo>;
      }>
    ) => {
      const _allCateArticles = [];
      for (const oneCateInfo of allCateInfo) {
        const type: string = oneCateInfo.type;
        let list = [];
        allCateTagsMap.value.set(type, new Map());
        for (const article of oneCateInfo.articles) {
          // update tag map
          let tagMap = allCateTagsMap.value.get(type);
          for (const tag of article.tags) {
            const tagName = tag.tag_name;
            tagMap?.set(tagName, (tagMap.get(tagName) || 0) + 1);
            allTagsMap.value?.set(
              tagName,
              (allTagsMap.value.get(tagName) || 0) + 1
            );
          }
          // update article list
          const viewCount = article.article_info.view_count;
          const diggCout = article.article_info.digg_count;
          list.push({
            title: article.article_info.title,
            linkUrl:
              article.article_info.link_url ||
              `https://juejin.cn/post/${article.article_info.article_id}`,
            diggCount: diggCout,
            viewCount: viewCount,
            author: article.author_user_info.user_name,
            hotCount: Math.floor(
              viewCount / 100 + diggCout + 1000 * (diggCout / viewCount)
            ),
          });
        }
        list = list.sort(
          (before: formatedArticleInfo, behind: formatedArticleInfo) => {
            return behind.hotCount - before.hotCount;
          }
        );
        _allCateArticles.push({
          type,
          list,
        });
      }
      allCateArticles.value = _allCateArticles.slice();
      // update allCateCounts
      let counts = [];
      for (const oneCateInfo of _allCateArticles) {
        counts.push({
          type: oneCateInfo.type,
          viewCount: oneCateInfo.list.reduce(
            (prev: number, curr: formatedArticleInfo) => {
              return prev + curr.viewCount;
            },
            0
          ),
        });
      }
      allCateCounts.value = counts.sort((before, behind) => {
        return behind.viewCount - before.viewCount;
      });
      console.log(allCateCounts.value);
    };

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

    const initBarChart = () => {
      const _chartsContainer = echarts.init(barChart.value as HTMLElement);
      _chartsContainer.setOption({
        title: {
          text: "全分类活跃度统计",
          subtext: "",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: allCateCounts.value.map(item=>item.type),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: allCateCounts.value.map(item=>item.viewCount),
            type: "bar",
          },
        ],
      });
    };

    onMounted(async () => {
      const allCateInfo = await initAllCateInfo();
      init(allCateInfo);
    });

    watchEffect(() => {
      if (pieChart.value && barChart.value) {
        initPieChart();
        initBarChart();
      }
    });

    return {
      containerDom,
      // data
      allCateArticles,
      allCateTagsMap,
      allTagsMap,
      allCateCounts,
      tags,
      pieChart,
      barChart,
      // methods
    };
  },
});
</script>

<style lang="less" scoped>
.content-container {
  background: #f0f4f6;
  padding: 16px 32px;
}
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
