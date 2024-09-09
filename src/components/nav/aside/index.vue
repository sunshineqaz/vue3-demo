<template>
  <div class="sidebar">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item
        v-for="(item, $index) in menuData"
        :index="item.index"
        :key="$index"
        @click="handleSelect(item)"
      >
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const _this = getCurrentInstance().proxy

const isCollapse = ref(true)
const handleOpen = () => {
  // console.log('open')
}
const handleClose = () => {
  // console.log('close')
}

let menuData = reactive([])

const getMenuData = async () => {
  const res = await _this.$service('/api/menu')
  menuData.push(...res)
}

const router = useRouter()
const handleSelect = (item) => {
  router.push({ path: item.url })
}

onMounted(() => {
  getMenuData()
})
</script>
