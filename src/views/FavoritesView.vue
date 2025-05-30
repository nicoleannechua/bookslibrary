<script setup>
import '@/assets/styles.css'
import logo2 from '@/assets/image/logo2.png'
import logo12 from '@/assets/image/logo12.png'
import cherishedMoment from '@/assets/image/cherishedMoment.png'
import findingMyselfAgain from '@/assets/image/findingMyselfAgain.png'
import loveWithoutLimits from '@/assets/image/loveWithoutLimits.png'

import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'

const themeStore = useThemeStore() // Use the store

const elementClass = computed(() => {
  return themeStore.isDarkMode ? 'my-element-dark' : 'my-element-light'
})
const changeColor = computed(() => ({
  color: themeStore.isDarkMode ? '#a2c3a4' : '#4e6766',
}))
const colorPagesBook = computed(() => ({
  'background-color': themeStore.isDarkMode ? '#a2c3a4' : '#4e6766',
  'border-color': themeStore.isDarkMode ? '#a9b18f' : '#a2c3a4',
  color: themeStore.isDarkMode ? '#404e41' : '#ecf3ec',
}))
const datePublishedYear = computed(() => ({
  color: themeStore.isDarkMode ? '#ecf3ec' : '#404e41',
}))
const colorCateGories = computed(() => ({
  'background-color': themeStore.isDarkMode ? '#a2c3a4' : '#4e6766',
  'border-color': themeStore.isDarkMode ? '#a9b18f' : '#a2c3a4',
  color: themeStore.isDarkMode ? '#404e41' : '#ecf3ec',
}))
const colorProgRess = computed(() => ({
  color: themeStore.isDarkMode ? '#ffffff' : '#666',
}))
// Add book data with details
const books = [
  {
    id: 1,
    title: 'Cherished Moment',
    image: cherishedMoment,
    progress: 45,
    category: ['Romance'],
    author: 'Michael Chen',
    pages: 286,
    rating: 4.2,
    synopsis:
      'A collection of interconnected stories about love found in the most unexpected places and the moments that change our lives forever. From chance encounters on rainy afternoons to shared silences that speak volumes.',
    published: '2024',
  },
  {
    id: 2,
    title: 'Finding Myself Again',
    image: findingMyselfAgain,
    progress: 78,
    category: ['Drama'],
    author: 'Thomas Wright',
    pages: 368,
    rating: 4.6,
    synopsis:
      'After losing everything in a corporate scandal, James embarks on a cross-country journey with nothing but a backpack and the need to rediscover who he is beyond the titles and achievements that once defined him.',
    published: '2022',
  },
  {
    id: 3,
    title: 'Love Without Limits',
    image: loveWithoutLimits,
    progress: 100,
    category: ['Romance'],
    author: 'David Kim',
    pages: 342,
    rating: 4.4,
    synopsis:
      'When a renowned photographer with a terminal diagnosis meets a free-spirited artist who shows him how to truly see the world, both learn that the heart recognizes no boundaries of time or circumstance.',
    published: '2022',
  },
]

// Add modal functionality
const showModal = ref(false)
const selectedBook = ref(null)

// Function to open modal with book details
const openBookDetails = (book) => {
  selectedBook.value = book
  showModal.value = true
}

// Function to close modal
const closeModal = () => {
  showModal.value = false
}

// Function to remove book from favorites collection
const removeFromFavorites = (book) => {
  // Here you would add the actual removal logic
  // For now, we'll just close the modal and could add a confirmation dialog later
  alert(`"${book.title}" has been removed from your favorites`)
  showModal.value = false
}
const logoChangeStyle = computed(() => {
  return themeStore.isDarkMode ? logo12 : logo2
})
</script>

<template>
  <div class="app-container">
    <div class="scrollable-content" :class="elementClass">
      <!--Navigation Bar: Brand-->
      <nav class="navbar navbar-expand-lg" :class="elementClass">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img :src="logoChangeStyle" alt="Bootstrap" width="50" height="30" />
          </a>
        </div>
      </nav>

      <!--Books Gallery: Favorites-->
      <div class="container my-3">
        <div class="menu-header">
          <h2 class="my-3 py-3"><b>Favorites</b></h2>
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
          <!-- Book 1 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[0])">
              <div class="book-cover-container">
                <img :src="cherishedMoment" class="card-img-top" alt="Cherished Moment" />
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="45"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style="width: 45%"></div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Cherished Moment</h5>
              </div>
            </div>
          </div>

          <!-- Book 2 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[1])">
              <div class="book-cover-container">
                <img :src="findingMyselfAgain" class="card-img-top" alt="Finding Myself Again" />
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="78"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style="width: 78%"></div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Finding Myself Again</h5>
              </div>
            </div>
          </div>

          <!-- Book 3 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[2])">
              <div class="book-cover-container">
                <img :src="loveWithoutLimits" class="card-img-top" alt="Love Without Limits" />
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style="width: 100%"></div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Love Without Limits</h5>
              </div>
            </div>
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
          <RouterLink to="/favorites" class="nav-item col text-decoration-none active">
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

    <!-- Book Details Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop :class="elementClass">
        <button class="close-button" @click="closeModal">
          <i class="bi bi-x-lg"></i>
        </button>
        <div v-if="selectedBook" class="book-details">
          <div class="modal-book-image">
            <img :src="selectedBook.image" :alt="selectedBook.title" />
            <div v-if="selectedBook.progress > 0" class="modal-progress">
              <div class="progress">
                <div class="progress-bar" :style="{ width: selectedBook.progress + '%' }"></div>
              </div>
              <div class="progress-text" :style="colorProgRess">
                {{ selectedBook.progress }}% completed
              </div>
            </div>
          </div>
          <div class="modal-book-info">
            <h2 class="modal-book-title" :style="changeColor">{{ selectedBook.title }}</h2>
            <div class="modal-book-author" :style="changeColor">by {{ selectedBook.author }}</div>
            <div class="modal-book-meta">
              <span class="badge me-2" :style="datePublishedYear">{{
                selectedBook.published
              }}</span>

              <span class="badge me-2" :style="datePublishedYear">{{
                selectedBook.published
              }}</span>

              <span class="badge me-2" :style="colorPagesBook">{{ selectedBook.pages }} pages</span>
              <span
                v-for="cat in selectedBook.category"
                :key="cat"
                class="badge me-2"
                :style="colorCateGories"
                >{{ cat }}</span
              >
            </div>
            <h4 class="modal-section-title" :style="changeColor">Synopsis</h4>
            <p class="modal-book-synopsis" :style="changeColor">{{ selectedBook.synopsis }}</p>
            <div class="modal-actions">
              <div class="row g-2">
                <div class="col-12">
                  <button class="btn w-100">Read Now</button>
                </div>
                <div class="col-6">
                  <button class="btn w-100"><i class="bi bi-bookmark"></i> Bookmark</button>
                </div>
                <div class="col-6">
                  <button class="btn w-100"><i class="bi bi-cloud-download"></i> Download</button>
                </div>
                <div class="col-12 mt-2">
                  <button
                    @click="removeFromOffline(selectedBook)"
                    class="btn btn-buttonChapterOffline w-100"
                  >
                    <i class="bi bi-trash"></i> Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

/* Card styles */
.card {
  margin-bottom: 1rem;
  width: 100% !important;
  border-color: #afddff;
  background-color: #ffffff;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(175, 221, 255, 0.3);
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
  }

  .row-cols-1 {
    margin-right: 0;
    margin-left: 0;
  }
}

.card-container {
  display: inline-block;
  width: 150px; /* Reduced from 180px */
  margin-right: 15px;
  height: auto;
}

.card {
  height: 100%;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  max-width: 180px;
  margin: 0 auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
}
.dark-mode .card {
  background-color: #1e1e1e;
  color: #e0e0e0;
  border-color: #121212;
}
/* New book cover container to maintain aspect ratio */
.book-cover-container {
  position: relative;
  width: 100%;
  padding-top: 150%;
  overflow: hidden;
}

.card-img-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: transparent;
}

.card-body {
  padding: 0.75rem 0.5rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 50px;
}

.card-title {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  text-align: center;
  width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  height: auto;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 2.4em;
}

.card-text {
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 768px) {
  .card-container {
    width: 130px; /* Reduced from 150px */
  }

  .card {
    max-width: 140px; /* Reduced from default 160px */
  }

  .book-cover-container {
    padding-top: 140%; /* Maintains the same aspect ratio */
  }

  .card-title {
    font-size: 0.8rem; /* Slightly smaller font on mobile */
  }
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
