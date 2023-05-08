<!--
 * @Author: fastfan
 * @Date: 2023-05-08 11:38:10
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-08 17:43:45
 * @Description: your description
-->
<script setup lang="ts">
import { ref } from 'vue'
const msg = ref<string | number>('Hello Vue3')

const handleChangeMsg = (v: string | number) => {
  msg.value = v
}

defineExpose({
  // 暴露ref使用的参数
  msg,
  handleChangeMsg
})
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
