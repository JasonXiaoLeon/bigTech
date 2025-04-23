import axios from 'axios'
import { auth } from '@/lib/auth'
import { getToken, setToken, setRefreshToken } from './tokenStorage'

// 创建一个异步初始化函数，确保在组件加载时获取到 session 和 token
async function initializeToken() {
  const session = await auth() // 获取 session
  const accessToken = session?.user?.accessToken
  const refreshToken = session?.user?.refreshToken

  console.log("hello", accessToken, refreshToken)

  // 如果获取到 accessToken 和 refreshToken，就将它们存储到 localStorage
  if (accessToken) {
    setToken(accessToken)
  }

  if (refreshToken) {
    setRefreshToken(refreshToken)
  }
}

// 创建 axios 实例
const ins = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${getToken()}`, // 从 localStorage 获取 accessToken
  },
})

// 确保在发送请求之前初始化 token
initializeToken().then(() => {
  // 发送请求或执行其他操作
  console.log('Token initialized')
})

// 响应拦截器，处理返回的 token
ins.interceptors.response.use(
  async (res) => {
    if (res.headers.authorization) {
      const token = res.headers.authorization.replace('Bearer ', '')
      setToken(token) // 存储新的 accessToken
      ins.defaults.headers.Authorization = `Bearer ${token}` // 更新请求头中的 Authorization
    }

    if (res.headers.refreshtoken) {
      const refreshtoken = res.headers.refreshtoken.replace('Bearer ', '')
      setRefreshToken(refreshtoken) // 存储新的 refreshToken
    }

    return res.data
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error)
  }
)

export default ins
