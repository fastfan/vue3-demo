<!--
 * @Author: fastfan
 * @Date: 2023-05-23 14:38:12
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-23 15:46:22
 * @Description: your descriptionvue
-->
<template>
  <div>
    <el-button type="primary" @click="setWatermark('WaterMark Info')">Create</el-button>
    <el-button type="primary" @click="clear">Clear</el-button>
    <el-button type="primary" @click="setWatermark('WaterMark Info New')">Reset</el-button>
  </div>
</template>

<script setup lang="ts">
import { useWatermark } from '@/hooks/useWatermark'
console.log(useWatermark())
const { setWatermark, clear } = useWatermark()
</script>

<style scoped lang="scss"></style>
