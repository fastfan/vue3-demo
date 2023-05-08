<template>
  <div class="about">
    <h2>{{ title }}</h2>
    <HelloWorld class="hello-word" :msg="msg" @changeMsg="changeMsg">
      <template v-slot:footer>
        <div>具名插槽footer</div>
      </template>
    </HelloWorld>
    <el-button type="primary" @click="clickSave">HelloWorld</el-button>
    <RefTest ref="refTest" />
    <el-button @click="handleChangeMsg">RefTest</el-button>
    <el-divider />
    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleChangeMsg">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import HelloWorld from './HelloWorld.vue'
import RefTest from './RefTest.vue'
import { getIndicatorInformation } from '@/api/common'
import { reactive, ref, onMounted, getCurrentInstance } from 'vue'
// 获取当前组件的实例对象，相当于 vue2 的 this,请不要把它当作在组合式 API 中获取 this 的替代方案来使用。getCurrentInstance 只能在 setup 或生命周期钩子中调用。
const instance = getCurrentInstance()
console.log(instance)
const msg = ref('Hello Vue3')
const changeMsg = (v: string) => {
  msg.value = v
}
// 此处暂时使用any，需要定义类型
const refTest = ref<any>(null)

const handleChangeMsg = () => {
  refTest.value.handleChangeMsg('Hello TS')
}
interface ListItem {
  name: string
  age: number
}
interface Props {
  msg: string
  // title可选
  title?: string
  list: ListItem[]
}
// withDefaults 的第二个参数便是默认参数设置，会被编译为运行时 props 的 default 选项
const props = withDefaults(defineProps<Props>(), {
  title: '我是标题',
  // 对于array、object需要使用函数，和以前的写法一样
  list: () => []
})
// 在 ts 中使用 props 中的属性，具有很好的类型推断能力
console.log(props)
console.log(HelloWorld.name) // 'HelloWorld'
// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const clickSave = (): void => {
  const params = {}
  getIndicatorInformation(params).then((res: unknown) => {
    console.log(res)
  })
}
onMounted(() => {
  console.log(refTest.value.msg)
  console.log(refTest.value.$el)
  refTest.value.$el.setAttribute('data-name', '定义name')
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
