<template>
  <el-row :gutter="12" class="statistics-container">
    <el-col :span="12">
      <button @click="takeScreenshot" class="primary-button">截图</button>
      <div class="chart-container" id="lineChart"></div>
    </el-col>
    <el-col :span="12">
      <button @click="takeScreenshot" class="secondary-button">截图</button>
      <div class="chart-container border5"></div>
    </el-col>
    <el-col :span="12">
      <div class="chart-container border10"></div>
    </el-col>
    <el-col :span="12">
      <div class="chart-container border15"></div>
    </el-col>
    <el-col :span="12">
      <div class="chart-container border20"></div>
    </el-col>
    <el-col :span="12">
      <div class="chart-container"></div>
    </el-col>
  </el-row>
  <!-- <canvas ref="canvas" width="500" height="500"></canvas> -->
</template>

<script setup>
import * as echarts from 'echarts'
import { getCurrentInstance, reactive, onMounted } from 'vue'
const _this = getCurrentInstance().proxy

onMounted(() => {
  initLineChart()
})

let myChart = reactive({})
const initLineChart = () => {
  const chartDom = document.getElementById('lineChart')
  myChart = echarts.init(chartDom)
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  option && myChart.setOption(option)
}
const takeScreenshot = () => {
  const canvas = _this.$refs.canvas
  const context = canvas.getContext('2d') // 获取 '2D' 绘图上下文，允许在'canvas'上绘制图像、文本、图形等。

  context.fillStyle = 'lightblue'
  context.fillRect(0, 0, canvas.width, canvas.height) // 绘制一个矩形
  context.fillStyle = 'black'
  context.font = '20px Arial'
  context.fillText('这是截图内容', 50, 50) // 在指定位置绘制文本

  // 将 canvas 转换为base64编码的图像数据
  const image = canvas.toDataURL('image/png')

  // 创建一个链接，用于下载截图
  const link = document.createElement('a')
  link.href = image
  link.download = 'screenshot.png'
  link.click()
}
</script>

<style lang="scss">
.statistics-container {
  width: 100%;
  height: 100%;
  .chart-container {
    width: 100%;
    height: 400px;
  }
  .border5 {
    @include border-radius(5px);
  }
  .border10 {
    @include border-radius(10px);
  }
  .border20 {
    @include border-radius(20px);
  }
}

.statistics-container {
  @include media-query(768px) {
    background-color: lightblue;
  }
}

.primary-button {
  @include button-styles(#fff, #007bff);
}

.secondary-button {
  @include button-styles(#333, #f0f0f0);
}
</style>
