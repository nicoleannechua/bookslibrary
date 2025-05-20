<script setup>
import '@/assets/styles.css'
import logo2 from '@/assets/image/logo2.png'
import logo12 from '@/assets/image/logo12.png'
import beforeTheRain from '@/assets/image/beforeTheRain.png'
import cherishedMoment from '@/assets/image/cherishedMoment.png'
import dreams from '@/assets/image/dreams.png'
import findingMyselfAgain from '@/assets/image/findingMyselfAgain.png'
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
</script>

<template>
  <div class="app-container">
    <div class="scrollable-content" :class="elementClass">
      <!--Navigation Bar: Brand-->
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">
            <img :src="logoChangeStyle" alt="Bootstrap" width="50" height="30" />
          </RouterLink>
        </div>
      </nav>

      <!--Bookmarks Section-->
      <div class="container my-3 bookmarks-container">
        <div class="menu-header">
          <h2 class="my-2 py-2"><b>Bookmarks</b></h2>
        </div>
        <div class="bookmark-item">
          <div class="bookmark-img-container">
            <img :src="beforeTheRain" class="bookmark-img" />
          </div>
          <div class="bookmark-details">
            <h5 class="bookmark-title">Before the Rain</h5>
            <p class="bookmark-synopsis" :style="changeColor">
              A heartwarming story about love, loss, and finding hope in the rain.
            </p>
          </div>
        </div>
        <div class="bookmark-item">
          <div class="bookmark-img-container">
            <img :src="cherishedMoment" class="bookmark-img" />
          </div>
          <div class="bookmark-details">
            <h5 class="bookmark-title">Cherished Moment</h5>
            <p class="bookmark-synopsis" :style="changeColor">
              A tale of unforgettable memories and the moments that define us.
            </p>
          </div>
        </div>
        <div class="bookmark-item">
          <div class="bookmark-img-container">
            <img :src="dreams" class="bookmark-img" />
          </div>
          <div class="bookmark-details">
            <h5 class="bookmark-title">Dreams</h5>
            <p class="bookmark-synopsis" :style="changeColor">
              A journey of self-discovery, where aspirations and reality collide, teaching the value
              of perseverance.
            </p>
          </div>
        </div>
        <div class="bookmark-item">
          <div class="bookmark-img-container">
            <img :src="findingMyselfAgain" class="bookmark-img" />
          </div>
          <div class="bookmark-details">
            <h5 class="bookmark-title">Finding Myself Again</h5>
            <p class="bookmark-synopsis" :style="changeColor">
              A powerful story of resilience and rediscovering one's identity after life's
              unexpected challenges.
            </p>
          </div>
        </div>
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
  color: black !important;
  background-color: #a2c3a4 !important;
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

.bookmarks-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.bookmark-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.bookmark-img-container {
  width: 150px;
}

.bookmark-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.bookmark-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bookmark-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.bookmark-synopsis {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

/* darkmode */
.my-element-dark {
  background-color: #121212;
  color: #ffffff;
}

.my-element-light {
  background-color: #eeeeee;
  color: #000000;
}
</style>
