<template>
  <img src="../assets/juejin.svg" class="juejin__img"/>
  <div id="word-cloud__container" ref="containerDom"></div>
</template>

<script lang="ts">
import { ref, Ref, defineComponent, onMounted } from "vue";
import axios from "axios";
import * as echarts from "echarts";
import "echarts-wordcloud";
//import { juejinImageUrl } from '../configs/index'

export default defineComponent({
  name: "JuejinWordcloud",
  props: {
  },
  setup: () => {
    //variable Init
    const containerDom: Ref<unknown> = ref(null);
    const count: Ref<number> = ref(0);
    const JUEJIN_LIMIT: number = 20;

    //Functions statements
    const updateCount = () => {
      count.value++;
    };

    const initFollowers = async () => {
      console.log(2222)
      const res = await axios.get('/api/local/article');
      console.log(res,11111)
      // let isEnd: boolean = false;
      // let followers = [];
      // let cursor = 0;
      // while (!isEnd) {
      //   const res = await axios.get(
      //     `/user_api/v1/follow/followers?user_id=703340610597064&cursor=${cursor}&limit=${JUEJIN_LIMIT}`
      //   );
      //   isEnd = !res.data.data.hasMore;
      //   cursor += JUEJIN_LIMIT;
      //   followers.push(...res.data.data.data);
      // }
      // return followers;
    };

    // const getChartsList = (followers:Array<any>) => {
    //   const _chartList = followers.map(person => {
    //     return {
    //       name: person.user_name,
    //       value: person.user_id
    //     }
    //   }).filter(person => !person.name.startsWith('用户'));
    //   _chartList.push(...[{
    //     name:'寒草',
    //     value:'4195392102349437',
    //   },{
    //     name:'BBFE大家庭',
    //     value:'4195392102349437',
    //   },{
    //     name:'CodingCommunism',
    //     value:'4195392102349437',
    //   },{
    //     name:'工作这一年相识的伙伴',
    //     value:'4195392102349437',
    //   }])
    //   console.log(_chartList, 333);
    //   return _chartList;
    // }

    const setChartOption = (chartContainer:any, maskResource:any, chartList:Array<any>) => {
      chartContainer.setOption({
        series: [
          {
            type: "wordCloud",
            maskImage:maskResource,
            // shape: "circle",
            left: "center",
            top: "center",
            // width: "55%",
            width: "70%",
            height: "90%",
            right: null,
            bottom: null,
            sizeRange: [4, 15],
            rotationRange: [-90, 90],
            rotationStep: 45,
            gridSize: 8,
            drawOutOfBound: true,
            layoutAnimation: true,
            textStyle: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: "#3f7ef7"
            },
            emphasis: {
              focus: "self",
              textStyle: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            data: chartList,
          },
        ],
      });
    }

    const initChart = (chartList:Array<any>) => {
      const _chartContainer = echarts.init(containerDom.value as HTMLElement);
      const maskResource = new Image();
      maskResource.src = juejinImageUrl;
      maskResource.onload = function(){
        setChartOption(_chartContainer, maskResource, chartList);
      }
    }

    onMounted(async () => {
      const followers = await initFollowers();
      //const _chartList = getChartsList(followers);
      //initChart(_chartList);
    });

    return {
      count,
      updateCount,
      containerDom,
    };
  },
});
</script>

<style scoped>
#word-cloud__container {
  width: 100%;
  height: 100vh;
}

.juejin__img {
  position: absolute;
  width: 100%;
  height: 80vh;
  margin-top: 10vh;
  opacity: 0%;
}

.bg__img {
  position: absolute;
  width: 100%;
  height: 100vh;
}
</style>
