<script setup>
import '@/assets/styles.css'
import logo2 from '@/assets/image/logo2.png'
import logo12 from '@/assets/image/logo12.png'
import profileIcon from '@/assets/image/profileIcon.png'
import meMyselfAndI from '@/assets/image/meMyselfAndI.png'
import midnightWorld from '@/assets/image/midnightWorld.png'
import oneStepToTheHeart from '@/assets/image/oneStepToTheHeart.png'
import onThatDayWhenIMetYou from '@/assets/image/onThatDayWhenIMetYou.png'
import ourStory from '@/assets/image/ourStory.png'
import paperHeart from '@/assets/image/paperHeart.png'

import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'

const logoChangeStyle = computed(() => {
  return themeStore.isDarkMode ? logo12 : logo2
})
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

const categoryButtonStyles = computed(() => ({
  color: themeStore.isDarkMode ? '#d0e1d1' : '#4e6766',
  borderColor: themeStore.isDarkMode ? '#a2c3a4' : '#4e6766',
}))

// Add book data with details
const books = [
  {
    id: 1,
    title: 'Me, Myself, and I',
    image: meMyselfAndI,
    category: ['Self-help', 'Psychology'],
    author: 'David Moore',
    pages: 256,
    rating: 4.7,
    synopsis:
      'A deeply introspective journey into understanding the different facets of self-identity. David Moore explores how our internal dialogue shapes our perception of the world and offers practical exercises for self-discovery.',
    published: '2024',
  },
  {
    id: 2,
    title: 'Midnight World',
    image: midnightWorld,
    category: ['Fantasy', 'Adventure'],
    author: 'Rachel Winters',
    pages: 412,
    rating: 4.8,
    synopsis:
      'When the clock strikes midnight, an ordinary city transforms into a realm where magic flows freely and mythical creatures roam the streets. Only a select few humans can witness this transformation - and Lily has just become one of them.',
    published: '2024',
  },
  {
    id: 3,
    title: 'One Step to the Heart',
    image: oneStepToTheHeart,
    category: ['Romance', 'Contemporary'],
    author: 'Jessica Liu',
    pages: 326,
    rating: 4.5,
    synopsis:
      'After a devastating breakup, Emma decides to train for a marathon to prove something to herself. Her running coach turns out to be more than just a fitness instructor as they both discover that the journey to healing begins with a single step.',
    published: '2024',
  },
  {
    id: 4,
    title: 'On That Day When I Met You',
    image: onThatDayWhenIMetYou,
    category: ['Romance', 'Drama'],
    author: 'James Wilson',
    pages: 298,
    rating: 4.6,
    synopsis:
      'A chance encounter at a coffee shop changes the lives of two strangers forever. Told through alternating perspectives, this story explores how a single moment can create ripples that affect the entire course of our lives.',
    published: '2024',
  },
  {
    id: 5,
    title: 'Our Story',
    image: ourStory,
    category: ['Romance', 'Historical'],
    author: 'Emma Thompson',
    pages: 372,
    rating: 4.4,
    synopsis:
      'Spanning three generations of women in a family, this novel weaves together their love stories against the backdrop of significant historical events. From war-torn Europe to modern-day America, their experiences echo through time.',
    published: '2024',
  },
  {
    id: 6,
    title: 'Paper Heart',
    image: paperHeart,
    category: ['Young Adult', 'Romance'],
    author: 'Sophia Chen',
    pages: 284,
    rating: 4.3,
    synopsis:
      'Sixteen-year-old Mia communicates her feelings through origami, leaving paper creations for her secret crush to find. As her art becomes more elaborate, so does her courage to finally reveal herself to the person who has captured her heart.',
    published: '2024',
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

// Function to add book to library
const addToLibrary = (book) => {
  // Here you would add the actual download/save logic
  alert(`"${book.title}" has been added to your library`)
  showModal.value = false
}

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

      <!--Navigation Bar: Search Bar-->
      <div class="container my-3">
        <div class="search-container d-flex align-items-center">
          <button class="arrow-btn me-2">
            <RouterLink to="/"
              ><i class="bi bi-arrow-left-circle" :style="categoryButtonStyles"></i
            ></RouterLink>
          </button>
          <form class="d-flex flex-grow-1" role="search">
            <input
              class="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn search-button rounded-pill"
              :style="categoryButtonStyles"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <!--Books Gallery: New Added-->
      <div class="container my-3">
        <div class="menu-header">
          <h2 class="my-3 py-3"><b>New Added</b></h2>
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
          <!-- Book 1 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[0])">
              <div class="book-cover-container">
                <img :src="meMyselfAndI" class="card-img-top" alt="Me, Myself, and I" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Me, Myself, and I</h5>
              </div>
            </div>
          </div>

          <!-- Book 2 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[1])">
              <div class="book-cover-container">
                <img :src="midnightWorld" class="card-img-top" alt="Midnight World" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Midnight World</h5>
              </div>
            </div>
          </div>

          <!-- Book 3 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[2])">
              <div class="book-cover-container">
                <img :src="oneStepToTheHeart" class="card-img-top" alt="One Step to the Heart" />
              </div>
              <div class="card-body">
                <h5 class="card-title">One Step to the Heart</h5>
              </div>
            </div>
          </div>

          <!-- Book 4 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[3])">
              <div class="book-cover-container">
                <img
                  :src="onThatDayWhenIMetYou"
                  class="card-img-top"
                  alt="On That Day When I Met You"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">On That Day When I Met You</h5>
              </div>
            </div>
          </div>

          <!-- Book 5 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[4])">
              <div class="book-cover-container">
                <img :src="ourStory" class="card-img-top" alt="Our Story" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Our Story</h5>
              </div>
            </div>
          </div>

          <!-- Book 6 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[5])">
              <div class="book-cover-container">
                <img :src="paperHeart" class="card-img-top" alt="Paper Heart" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Paper Heart</h5>
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
            <RouterLink to="/offline" class="nav-item col text-decoration-none active">
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

    <!-- Book Details Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop :class="elementClass">
        <button class="close-button" @click="closeModal">
          <i class="bi bi-x-lg"></i>
        </button>
        <div v-if="selectedBook" class="book-details">
          <div class="modal-book-image">
            <img :src="selectedBook.image" :alt="selectedBook.title" />
          </div>
          <div class="modal-book-info">
            <h2 class="modal-book-title" :style="changeColor">{{ selectedBook.title }}</h2>
            <div class="modal-book-author" :style="changeColor">by {{ selectedBook.author }}</div>
            <div class="modal-book-meta">
              <span class="badge me-2" :style="datePublishedYear">{{
                selectedBook.published
              }}</span>

              <span class="badge me-2" :style="colorPagesBook">{{ selectedBook.pages }} pages</span>
              <span
                v-for="cat in selectedBook.category"
                :style="colorCateGories"
                :key="cat"
                class="badge me-2"
                >{{ cat }}</span
              >
            </div>
            <h4 class="modal-section-title" :style="changeColor">Synopsis</h4>
            <p class="modal-book-synopsis" :style="changeColor">{{ selectedBook.synopsis }}</p>
            <div class="modal-actions">
              <div class="row g-2">
                <div class="col-12">
                  <button class="btn btn-buttonChapters w-100" @click="addToLibrary(selectedBook)">
                    <i class="bi bi-download"></i> Add to My Library
                  </button>
                </div>
                <div class="col-6">
                  <button class="btn btn-buttonChapters w-100">
                    <i class="bi bi-bookmark"></i> Bookmark
                  </button>
                </div>
                <div class="col-6">
                  <button class="btn btn-buttonChapters w-100">
                    <i class="bi bi-heart"></i> Favorite
                  </button>
                </div>
                <div class="col-12 mt-2">
                  <button class="btn btn-outline-info w-100">
                    <i class="bi bi-share"></i> Share
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

/*Search Bar Adjustment */
.search-container {
  width: 100%;
  gap: 0.5rem;
}
/* dark moder */
.my-element-dark {
  background-color: #121212;
  color: #ffffff;
}

.my-element-light {
  background-color: #eeeeee;
  color: #000000;
}
</style>
