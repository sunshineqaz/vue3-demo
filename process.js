// process.js
let process = {
  env: {
    NODE_ENV: 'development', // 默认值
    VUE_APP_BASE_API: 'development'
  }
}

if (process.env.NODE_ENV === 'test') {
  // 测试环境下的process配置
  process = {
    env: {
      NODE_ENV: 'test'
    }
  }
} else if (typeof window !== 'undefined' && typeof process === 'undefined') {
  // 浏览器环境下的process配置
  process = {
    env: {
      NODE_ENV: 'development'
    },
    browser: true
  }
}

export default process
