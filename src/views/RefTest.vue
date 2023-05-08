<!--
 * @Author: fastfan
 * @Date: 2023-05-08 11:38:10
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-08 16:09:32
 * @Description: your description
-->
<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('Hello Vue3')

const handleChangeMsg = (v: string) => {
  msg.value = v
}

defineExpose({
  msg,
  handleChangeMsg
})
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
