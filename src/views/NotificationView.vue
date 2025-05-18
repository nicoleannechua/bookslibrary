<script setup>
import '@/assets/styles.css'
import logo2 from '@/assets/image/logo2.png'
import logo12 from '@/assets/image/logo12.png'
import profileIcon from '@/assets/image/profileIcon.png'
import beforeTheRain from '@/assets/image/beforeTheRain.png'

import { RouterLink } from 'vue-router'
import { ref } from 'vue'

import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'

const themeStore = useThemeStore() // Use the store

const elementClass = computed(() => {
  return themeStore.isDarkMode ? 'my-element-dark' : 'my-element-light'
})
const changeColor = computed(() => ({
  color: themeStore.isDarkMode ? '#ffffff' : '#000000',
}))
const logoChangeStyle = computed(() => {
  return themeStore.isDarkMode ? logo12 : logo2
})
const isDropdownOpen = ref(false)
</script>

<template>
  <div class="app-container">
    <div class="scrollable-content" :class="elementClass">
      <!--Navigation Bar: Brand-->
      <nav class="navbar navbar-expand-lg" :class="elementClass">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">
            <img :src="logoChangeStyle" alt="Bootstrap" width="50" height="30" />
          </RouterLink>
        </div>
      </nav>

      <!--Notification Section-->
      <div class="container">
        <div class="menu-header">
          <h2 class="my-3 py-3"><b>Notification</b></h2>
        </div>

        <ul class="list-group" :class="{ 'dark-mode': themeStore.isDarkMode }">
          <li
            class="list-group-item d-flex justify-content-between align-items-start pointer"
            :class="elementClass"
          >
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto" :style="changeColor">
                  <div class="fw-bold">Sara Johnson</div>
                  Posted Chapter 9: Storm Warning
                  <div class="small mt-1">15 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start pointer"
            :class="elementClass"
          >
            <RouterLink to="#" class="text-decoration-none text-dark w-100" :style="changeColor">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto" :style="changeColor">
                  <div class="fw-bold">Sara Johnson</div>
                  Posted Chapter 8: When the Rain Falls
                  <div class="small mt-1" :style="changeColor">16 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start pointer"
            :class="elementClass"
          >
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex" :style="changeColor">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Sara Johnson</div>
                  Posted Chapter 7: The Calm Before
                  <div class="small mt-1">17 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start pointer"
            :class="elementClass"
          >
            <RouterLink to="/readingmode" class="text-decoration-none text-dark w-100">
              <div class="d-flex" :style="changeColor">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Sara Johnson</div>
                  Posted Chapter 6: Sparks and Silence
                  <div class="small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start pointer"
            :class="elementClass"
          >
            <RouterLink to="/readingmode" class="text-decoration-none text-dark w-100">
              <div class="d-flex" :style="changeColor">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Sara Johnson</div>
                  Posted Chapter 5: Storm Warning
                  <div class="small mt-1" :style="changeColor">18 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start pointer"
            :class="elementClass"
          >
            <RouterLink to="/readingmode" class="text-decoration-none text-dark w-100">
              <div class="d-flex" :style="changeColor">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Sara Johnson</div>
                  Posted Chapter 4: Letters Never Sent
                  <div class="small mt-1">19 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start pointer"
            :class="elementClass"
          >
            <RouterLink to="/readingmode" class="text-decoration-none text-dark w-100">
              <div class="d-flex" :style="changeColor">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Sara Johnson</div>
                  Posted Chapter 3: First Sight
                  <div class="small mt-1">20 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start pointer"
            :class="elementClass"
          >
            <RouterLink to="/chapter-view" class="text-decoration-none text-dark w-100">
              <div class="d-flex" :style="changeColor">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Sara Johnson</div>
                  Posted Chapter 2: Echoes of Home
                  <div class="small mt-1">21 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Add bottom padding to prevent content from being hidden behind navbar -->
      <div class="bottom-spacer"></div>
    </div>

    <!--Navigation Bar: Bottom Menu-->
    <nav class="navbar fixed-bottom bottom-navbar">
      <div class="container-fluid px-2">
        <div class="row w-100 justify-content-between mx-0">
          <RouterLink to="/" class="nav-item col text-decoration-none">
            <i class="bi bi-house-door"></i>
            <span class="nav-label">Home</span>
          </RouterLink>
          <RouterLink to="/offline" class="nav-item col text-decoration-none">
            <i class="bi bi-book"></i>
            <span class="nav-label">Offline</span>
          </RouterLink>
          <RouterLink to="/favorites" class="nav-item col text-decoration-none">
            <i class="bi bi-heart"></i>
            <span class="nav-label">Favorites</span>
          </RouterLink>
          <RouterLink to="/bookmarks" class="nav-item col text-decoration-none">
            <i class="bi bi-bookmark"></i>
            <span class="nav-label">Bookmarks</span>
          </RouterLink>
          <RouterLink to="/notification" class="nav-item col text-decoration-none">
            <i class="bi bi-bell"></i>
            <span class="nav-label">Notification</span>
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/*scrollable page adjustments*/
.app-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f9fc;
}

.scrollable-content {
  height: 100%;
  overflow-y: auto;
  padding-bottom: 76px;
}

/* NAVBAR STYLES */
/* Base styles for the button (Remove padding/border) */
.dropdown .btn {
  border: none !important;
  padding: 0 !important;
  background-color: transparent !important;
  line-height: 0; /* Helps contain image */
  /* Remove focus ring */
  outline: none !important;
  box-shadow: none !important;
}
.dropdown .btn:focus,
.dropdown .btn:active {
  outline: none !important;
  box-shadow: none !important;
  border: 2px solid #a2c3a4;
}

.dropdown .btn {
  border: none !important;
  padding: 0 !important;
  background-color: transparent !important;
  line-height: 0;
  outline: none !important;
  box-shadow: none !important;
}
.drop-title {
  color: #4e6766;
  font-weight: bold;
}
.dropdown-item.drop-title:hover,
.dropdown-item.drop-title:focus {
  /* Also style the focus state for accessibility */
  color: black !important; /* Change text color to black */
  background-color: #f8f9fa; /* Optional: Add a light background on hover, common for dropdowns */
  /* Remove this background-color line if you don't want it */
}
.dropdown .btn:focus,
.dropdown .btn:active {
  outline: none !important;
  box-shadow: none !important;
  height: 50px;
  border-color: #a2c3a4;
}

/* Style the profile icon */
.profile-icon {
  display: block;

  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
  box-sizing: border-box;
  /* Update transition to include transform */
  transition:
    transform 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
}

/* Add the border and pop-out effect ON HOVER */
.dropdown .btn:hover .profile-icon {
  border-color: #a2c3a4;
  transform: scale(1.1);
}

/* Adjust dropdown menu position if needed */
.dropdown-menu-end {
  right: 0;
  left: auto;
}

/*List Styles */
.pointer {
  cursor: pointer;
}

/* Default hover style (used when .dark-mode class is NOT active - typically light mode) */
.pointer:hover {
  background-color: #bdd5bf;
}

/* Hover style when dark mode is active */
.dark-mode .pointer:hover {
  background-color: #4e6766;
  color: #e0e0e0;
}
.dark-mode .pointer {
  color: #cccccc;
  background-color: #121212;
}

.small {
  font-size: 0.75rem;
}

/* Book image styles */
.book-image-container {
  width: 70px;
  min-width: 70px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.book-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
