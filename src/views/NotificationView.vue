<script setup>
import '@/assets/styles.css'
import navBarLogoOutline from '@/assets/image/navBarLogoOutline.png'
import profileIcon from '@/assets/image/profileIcon.png'
import beforeTheRain from '@/assets/image/beforeTheRain.png'

import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const isDropdownOpen = ref(false)
</script>

<template>
  <div class="app-container">
    <div class="scrollable-content">
      <!--Navigation Bar: Brand-->
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">
            <img :src="navBarLogoOutline" alt="Bootstrap" width="80" height="30" />
          </RouterLink>

          <div class="d-flex">
            <div class="dropdown">
              <button
                class="btn"
                type="button"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="isDropdownOpen = !isDropdownOpen"
              >
                <img :src="profileIcon" class="profile-icon" style="width: 50px; height: 50px" />
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
                :class="{ show: isDropdownOpen }"
              >
                <li>
                  <a class="dropdown-item drop-title" href="#"
                    ><i class="bi bi-gear pe-2"></i>Settings</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <RouterLink class="dropdown-item drop-title" to="/login"
                    ><i class="bi bi-box-arrow-right pe-2"></i>Logout</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <!--Notification Section-->
      <div class="container">
        <div class="menu-header">
          <h2 class="my-3 py-3"><b>Notification</b></h2>
        </div>

        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
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

.pointer:hover {
  background-color: #f8f9fa;
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
