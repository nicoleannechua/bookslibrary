<script setup>
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'

const themeStore = useThemeStore()

//  Use a more general class name like 'app-theme'
const appThemeClass = computed(() => {
  return themeStore.isDarkMode ? 'dark-mode' : 'light-mode'
})
</script>

<template>
  <div id="app" :class="appThemeClass">
    <RouterView />
  </div>
</template>

<style scoped>
body {
  transition:
    background-color 0.3s ease,
    color 0.3s ease; /* Smooth transition */
}

.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
}

.light-mode {
  background-color: #ffffff;
  color: #1212123;
}

/* Example dark mode styles for common elements */
.dark-mode .navbar {
  background-color: #1e1e1e !important;
  color: #e0e0e0 !important;
}
.dark-mode .card {
  background-color: #1e1e1e;
  color: #e0e0e0;
  border-color: #1212123;
}
.dark-mode .dropdown-menu {
  background-color: #1e1e1e !important;
  border-color: #1212123;
}
.dark-mode .dropdown-item {
  color: #e0e0e0 !important; /* Light dropdown item text */
}
</style>
