<!--
 * @Author: fastfan
 * @Date: 2023-05-24 10:45:58
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-24 11:58:56
 * @Description: your description
-->
<template>
  <div class="flex justify-center">
    <el-input placeholder="请输入" v-model="valueRef" />
    <el-button type="primary" @click="handleCopy"> Copy </el-button>
  </div>
  <div style="display: flex">
    <el-card shadow="hover" style="flex: 1">
      <CountTo prefix="$" :color="'#409EFF'" :startVal="1" :endVal="200000" :duration="8000" />
    </el-card>
    <el-card shadow="hover" style="flex: 1">
      <CountTo suffix="$" :color="'red'" :startVal="1" :endVal="300000" :decimals="2" :duration="6000" />
    </el-card>
    <el-card shadow="hover" style="flex: 1">
      <CountTo suffix="$" :color="'rgb(0,238,0)'" :startVal="1" :endVal="400000" :duration="7000" />
    </el-card>
    <el-card shadow="hover" style="flex: 1">
      <CountTo separator="-" :color="'rgba(138,43,226,.6)'" :startVal="10000" :endVal="500000" :duration="8000" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { unref, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
const valueRef = ref('')
const { clipboardRef, copiedRef } = useCopyToClipboard()
function handleCopy() {
  const value = unref(valueRef)
  if (!value) {
    ElMessage({
      type: 'warning',
      message: '请输入要拷贝的内容！'
    })
    return
  }
  clipboardRef.value = value
  if (unref(copiedRef)) {
    ElMessage({
      type: 'success',
      message: 'copy success！'
    })
  }
}
</script>

<style scoped lang="scss"></style>
