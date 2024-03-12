/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface FSInterceptors<
  T = AxiosResponse,
  R = InternalAxiosRequestConfig
> {
  requestSuccessFn?: (config: R) => R
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

// 针对AxiosRequestConfig配置进行扩展，它不要求必须有headers
export interface FSRequestConfig<
  T = AxiosResponse,
  R = InternalAxiosRequestConfig
> extends AxiosRequestConfig {
  interceptors?: FSInterceptors<T, R>
}
