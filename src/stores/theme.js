// src/stores/theme.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(localStorage.getItem('isDarkMode') === 'true')

  const toggleMode = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('isDarkMode', isDarkMode.value)
  }

  return {
    isDarkMode,
    toggleMode,
  }
})
