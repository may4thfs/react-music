import { APP_BASE_URL, TIME_OUT } from './config'
import FSRequest from './request'

const fsRequest = new FSRequest({
  baseURL: APP_BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default fsRequest
