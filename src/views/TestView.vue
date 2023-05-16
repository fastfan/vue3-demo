<!--
 * @Author: fastfan
 * @Date: 2023-05-16 13:48:25
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-16 17:56:16
 * @Description: your description
-->
<template>
  <el-button type="primary" @click="handleChangeMsg">Create</el-button>
  <map-comp />
</template>

<script setup lang="ts">
import { maintainPlanDeleteById } from '@/api/common'
import { useDelete } from '@/hooks/useDelete'
enum Type {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info'
}
const params = { title: '弹窗', text: '1111111', type: Type.error, id: 9, func: maintainPlanDeleteById }
const handleChangeMsg = async () => {
  useDelete(params)
}
</script>

<style scoped lang="scss"></style>
