<!--
 * @Author: fastfan
 * @Date: 2023-05-23 17:20:23
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-23 17:24:59
 * @Description: your description
-->
<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import { mapData } from './map/data'
import { registerMap } from 'echarts'
import { useECharts } from '@/hooks/useECharts'
interface Props {
  width: string
  height: string
}
// withDefaults 的第二个参数便是默认参数设置，会被编译为运行时 props 的 default 选项
const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: 'calc(100vh - 78px)'
})
// 在 ts 中使用 props 中的属性，具有很好的类型推断能力
console.log(props)
const chartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)

onMounted(async () => {
  const json = (await (await import('./map/china.json')).default) as any
  registerMap('china', json)
  setOptions({
    visualMap: [
      {
        min: 0,
        max: 1000,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: false,
        orient: 'horizontal',
        inRange: {
          color: ['#e0ffff', '#006edd'],
          symbolSize: [30, 100]
        }
      }
    ],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, .6)',
      textStyle: {
        color: '#fff',
        fontSize: 12
      }
    },
    series: [
      {
        name: 'iphone4',
        type: 'map',
        map: 'china',
        label: {
          show: true,
          color: 'rgb(249, 249, 249)',
          fontSize: 10
        },
        itemStyle: {
          areaColor: '#2f82ce',
          borderColor: '#0DAAC1'
        },
        data: mapData
      }
    ]
  })
})
</script>

<style scoped lang="scss"></style>
