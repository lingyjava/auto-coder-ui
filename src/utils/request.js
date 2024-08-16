import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const request = axios.create({
  baseURL: '/coder',
  timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => Promise.reject(e)
)

// 响应式拦截器
request.interceptors.response.use(
  (res) => {
    const { data, message, code } = res.data
    if (code === 200) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  async (error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default request
