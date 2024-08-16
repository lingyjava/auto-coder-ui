import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCodeStore = defineStore('code', () => {
  const javaModelCode = ref('')
  const mybatisXmlCode = ref('')

  function setJavaModelCode(code) {
    javaModelCode.value = code
  }
  function setMybatisXmlCode(code) {
    mybatisXmlCode.value = code
  }

  return { javaModelCode, mybatisXmlCode, setJavaModelCode, setMybatisXmlCode }
})
