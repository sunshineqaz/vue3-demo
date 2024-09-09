<template>
  <div class="login">
    <el-form :model="form" style="min-width: 300px">
      <el-form-item>
        <el-input v-model="form.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </div>
</template>

<script setup>
import { reactive, getCurrentInstance } from 'vue'

const form = reactive({
  username: '',
  password: ''
})

const _this = getCurrentInstance().proxy

const handleLogin = () => {
  _this.$router.push('/statistics')
}
</script>
