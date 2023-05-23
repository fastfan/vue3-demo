<!--
 * @Author: fastfan
 * @Date: 2023-05-23 14:38:12
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-23 16:01:32
 * @Description: your descriptionvue
-->
<template>
  <div>
    <el-button type="primary" @click="setWatermark('WaterMark Info')">Create</el-button>
    <el-button type="primary" @click="clear">Clear</el-button>
    <el-button type="primary" @click="setWatermark('WaterMark Info New')">Reset</el-button>
    <el-button type="primary" @click="toggle">Toggle Window Full Screen</el-button>
  </div>
</template>

<script setup lang="ts">
import { useWatermark } from '@/hooks/useWatermark'
import { useFullscreen } from '@vueuse/core'
console.log(useFullscreen())
const { setWatermark, clear } = useWatermark()
const { toggle } = useFullscreen()
</script>

<style scoped lang="scss"></style>
