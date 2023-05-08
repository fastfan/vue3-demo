<!--
 * @Author: fastfan
 * @Date: 2023-05-08 11:19:14
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-08 13:33:07
 * @Description: your description
-->
<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
defineProps<{
  msg: string
}>()

const emits = defineEmits<{
  (e: 'changeMsg', value: string): void
}>()

const handleChangeMsg = () => {
  emits('changeMsg', 'Hello TS')
}

const attrs = useAttrs()
// js中使用
console.log(attrs.class) // hello-word
const slots = useSlots()
// 在js中访问插槽默认插槽default、具名插槽footer
console.log(slots.default)
console.log(slots.footer)
const theme = {
  color: 'red'
}
</script>
<script lang="ts">
export default {
  name: 'HelloWorld'
}
</script>
<template>
  <h1>{{ msg }}</h1>
  <!-- 在模板中使用 $attrs 访问属性 -->
  <div>{{ $attrs.class }}</div>
  <!-- 在模板中使用插槽 -->
  <slot></slot>
  <slot name="footer"></slot>
  <el-button @click="handleChangeMsg">handleChangeMsg</el-button>
</template>
<style scoped lang="scss">
h1 {
  // 使用顶层绑定
  color: v-bind('theme.color');
}
</style>
