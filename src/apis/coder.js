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

export function getJavaService(data) {
  return request({
    url: '/java/getJavaService',
    method: 'post',
    data
  })
}

export function getJavaServiceImpl(data) {
  return request({
    url: '/java/getJavaServiceImpl',
    method: 'post',
    data
  })
}

export function getJavaMapper(data) {
  return request({
    url: '/java/getJavaMapper',
    method: 'post',
    data
  })
}
