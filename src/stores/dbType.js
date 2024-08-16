import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDbTypeStore = defineStore('dbType', () => {
  const dbTypes = ref([
    {
      label: 'MySQL',
      value: 'MySQL'
    },
    {
      label: 'Oracle',
      value: 'Oracle'
    },
    {
      label: 'PostgresQL',
      value: 'PostgresQL'
    }
  ])

  return { dbTypes }
})
