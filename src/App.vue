<script setup>
import SideBar from '@/components/nav/aside/index.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const showMenu = ref(false)
const noMenu = ['/login', '/']
const router = useRouter()
router.beforeEach((to, from, next) => {
  next()
  showMenu.value = !noMenu.includes(to.path)
})
</script>

<template>
  <el-container class="layout-container-demo" style="height: 100%" v-if="showMenu">
    <el-aside width="200px">
      <el-scrollbar>
        <side-bar></side-bar>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
  <el-container v-else class="login-style">
    <router-view></router-view>
  </el-container>
</template>

<style lang="scss">
.login-style {
  display: flex;
  justify-content: center;
}
</style>
