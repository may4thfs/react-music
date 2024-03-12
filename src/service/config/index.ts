// 1. 手动区分开发环境和生产环境
// export const BASE_URL = 'http://coderwhy.dev:9002'
// export const BASE_URL = 'http://codercba.prod:9002'

// 2. 代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
console.log('是否开发环境', import.meta.env.DEV) // 是否开发环境
console.log('是否生产环境', import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

let APP_BASE_URL = ''
// 如果是开发环境，使用开发环境的地址，否则使用生产环境的地址
if (import.meta.env.PROD) {
  APP_BASE_URL = 'http://codercba.com:9002'
} else {
  APP_BASE_URL = 'http://codercba.com:9002'
}

console.log(APP_BASE_URL)

// 3. 通过创建.env文件直接创建变量
// console.log(import.meta.env)

export const TIME_OUT = 10000
export { APP_BASE_URL }
