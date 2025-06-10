// axios请求工具函数封装
import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/', // 可根据实际情况修改
  timeout: 4000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 可在此处添加token等操作
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error) => {
    // 可统一处理错误
    return Promise.reject(error)
  },
)

// 通用请求方法
export function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return service(config)
}

// 常用方法封装
export function get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
  return service({ url, method: 'get', params, ...config })
}

export function post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return service({ url, method: 'post', data, ...config })
}

export default service
