import request from '@/utils/request'

export function getJavaModel(data) {
  return request({
    url: '/java/getModel',
    method: 'post',
    data
  })
}

export function getMybatisXml(data) {
  return request({
    url: '/java/getMybatisXml',
    method: 'post',
    data
  })
}
