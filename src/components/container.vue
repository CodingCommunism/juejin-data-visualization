<template>
  <TopBar />
  <div class="content-container">
    <AllCate :allCateArticles="allCateArticles" :allTagsMap="allTagsMap" />
    <!-- <OneCate
      v-for="cateInfo in allCateArticles"
      :key="cateInfo.type"
      :cateInfo="cateInfo"
      :tagInfo="allCateTagsMap.get(cateInfo.type)"
    /> -->
  </div>
</template>
<script lang="ts">
import { ref, Ref, defineComponent, onMounted } from "vue";
import axios from "axios";
import { articleInfo, formatedArticleInfo } from "../types/index";
import OneCate from "./one-cate.vue";
import AllCate from "./all-cate.vue";
import TopBar from "./top-bar.vue";
// import { init } from "echarts";

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
    const containerDom: Ref<unknown> = ref(null);
    const count: Ref<number> = ref(0);
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
    //Functions statements
    const updateCount = () => {
      count.value++;
    };

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
      // let counts = [];
      // console.log(1111, _allCateArticles)
      // for (const oneCateInfo of _allCateArticles) {
      //   counts.push({
      //     type: oneCateInfo.type,
      //     viewCount: oneCateInfo.list.reduce(
      //       (prev:number, curr: formatedArticleInfo) => {
      //         console.log(prev)
      //         return prev + curr.viewCount;
      //       }
      //     , 0),
      //   });
      // }
      // allCateCounts.value = counts.sort((before, behind) => {
      //   return behind.viewCount - before.viewCount;
      // });
      allCateArticles.value = _allCateArticles.slice();
      console.log('xxxxxxxxxxxxxxxxxxx')
    };

    onMounted(() => {
      allCateArticles.value = [{a:1}];
    })

    // onMounted(async () => {
    //   allCateArticles.value = [{a:1}];
    //   const allCateInfo = await initAllCateInfo();
    //   init(allCateInfo);
    // });

    return {
      count,
      updateCount,
      containerDom,
      // data
      allCateArticles,
      allCateTagsMap,
      allTagsMap,
      allCateCounts,
      // methods
    };
  },
});
</script>

<style lang="less" scoped>
.content-container {
  //background: #f5f5f5;
  padding: 16px 32px;
}
</style>
