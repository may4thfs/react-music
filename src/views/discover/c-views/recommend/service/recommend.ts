import fsRequest from '@/service'

export function getBanners() {
  return fsRequest.get({
    url: '/banner'
  })
}
