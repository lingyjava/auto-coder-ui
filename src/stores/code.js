import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCodeStore = defineStore('code', () => {
  const javaModelCode = ref('')
  const mybatisXmlCode = ref('')
  const javaMapperCode = ref('')
  const javaServiceCode = ref('')
  const javaServiceImplCode = ref('')

  function setJavaModelCode(code) {
    javaModelCode.value = code
  }
  function setMybatisXmlCode(code) {
    mybatisXmlCode.value = code
  }
  function setJavaMapperCode(code) {
    javaMapperCode.value = code
  }
  function setJavaServiceCode(code) {
    javaServiceCode.value = code
  }
  function setJavaServiceImplCode(code) {
    javaServiceImplCode.value = code
  }

  return {
    javaModelCode,
    mybatisXmlCode,
    javaMapperCode,
    javaServiceCode,
    javaServiceImplCode,
    setJavaModelCode,
    setMybatisXmlCode,
    setJavaMapperCode,
    setJavaServiceCode,
    setJavaServiceImplCode
  }
})
