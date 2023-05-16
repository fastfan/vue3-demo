<!--
 * @Author: fastfan
 * @Date: 2023-05-16 17:28:51
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-16 17:53:57
 * @Description: your description
-->
<template>
  <div ref="wrapRef" :style="{ height, width }"></div>
</template>
<script lang="ts" setup>
import { ref, nextTick, unref, onMounted } from 'vue'
import { useScript } from '@/hooks/useScript'
const A_MAP_URL = 'https://webapi.amap.com/maps?v=1.4.5&key=d7bb98e7185300250dd5f918c12f484b'
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
const wrapRef = ref<HTMLDivElement | null>(null)
const { toPromise } = useScript({ src: A_MAP_URL })

async function initMap() {
  await toPromise()
  await nextTick()
  const wrapEl = unref(wrapRef)
  if (!wrapEl) return
  const AMap = (window as any).AMap
  new AMap.Map(wrapEl, {
    zoom: 11,
    center: [116.397428, 39.90923],
    viewMode: '3D'
  })
}

onMounted(() => {
  initMap()
})
</script>
