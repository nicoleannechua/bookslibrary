<script setup>
import '@/assets/styles.css'
import logo2 from '@/assets/image/logo2.png'
import logo12 from '@/assets/image/logo12.png'
import profileIcon from '@/assets/image/profileIcon.png'
import beforeTheRain from '@/assets/image/beforeTheRain.png'
import cherishedMoment from '@/assets/image/cherishedMoment.png'
import dreams from '@/assets/image/dreams.png'
import findingMyselfAgain from '@/assets/image/findingMyselfAgain.png'
import firstLove from '@/assets/image/firstLove.png'
import loveWithoutLimits from '@/assets/image/loveWithoutLimits.png'
import meMyselfAndI from '@/assets/image/meMyselfAndI.png'
import midnightWorld from '@/assets/image/midnightWorld.png'
import oneStepToTheHeart from '@/assets/image/oneStepToTheHeart.png'
import onThatDayWhenIMetYou from '@/assets/image/onThatDayWhenIMetYou.png'
import ourStory from '@/assets/image/ourStory.png'
import paperHeart from '@/assets/image/paperHeart.png'

import { ref } from 'vue'

// DARK MODE AND LIGHT MODE
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
const colorProgRess = computed(() => ({
  color: themeStore.isDarkMode ? '#ffffff' : '#666',
}))

// Add book data with details
const books = [
  {
    id: 1,
    title: 'Before the Rain',
    image: beforeTheRain,
    progress: 25,
    category: ['Romance', 'Drama'],
    author: 'Sarah Johnson',
    pages: 324,
    rating: 4.5,
    synopsis:
      'In a small coastal town where everyone knows everyone, Emma returns after ten years to confront the memories and the man she left behind. As storm clouds gather on the horizon, so do the emotions that were never truly resolved.',
    published: '2023',
  },
  {
    id: 2,
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
    id: 3,
    title: 'Dreams',
    image: dreams,
    progress: 15,
    category: ['Fantasy'],
    author: 'Elena Rodriguez',
    pages: 412,
    rating: 4.8,
    synopsis:
      "When Lia discovers she can enter other people's dreams, what starts as curiosity quickly turns dangerous as she uncovers secrets that were meant to stay buried and realizes that the dream world has its own rules and threats.",
    published: '2023',
  },
  {
    id: 4,
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
    id: 5,
    title: 'First Love',
    image: firstLove,
    progress: 10,
    category: ['Romance'],
    author: 'Olivia Parker',
    pages: 276,
    rating: 4.3,
    synopsis:
      'A tender coming-of-age story about the joys and heartaches of first love, set against the backdrop of a small university town where two students from completely different worlds find unexpected connection.',
    published: '2023',
  },
  {
    id: 6,
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
  {
    id: 7,
    title: 'Me, Myself, and I',
    image: meMyselfAndI,
    progress: 0,
    category: ['Mystery'],
    author: 'Jessica Black',
    pages: 396,
    rating: 4.7,
    synopsis:
      'Psychological thriller about a woman who begins finding notes around her house written in her handwriting that she has no memory of writing. As the notes become more troubling, she must question if she can trust her own mind.',
    published: '2025',
  },
  {
    id: 8,
    title: 'Midnight World',
    image: midnightWorld,
    progress: 0,
    category: ['Fantasy'],
    author: 'Robert Knight',
    pages: 458,
    rating: 4.9,
    synopsis:
      "In a world where the sun hasn't risen for a century, humanity has adapted to eternal darkness. When rumors of a coming dawn begin to spread, a young night hunter must choose between the safety of the world she knows and the promise of light.",
    published: '2025',
  },
  {
    id: 9,
    title: 'One Step to the Heart',
    image: oneStepToTheHeart,
    progress: 0,
    category: ['Romance'],
    author: 'Amanda Lee',
    pages: 298,
    rating: 4.3,
    synopsis:
      'Professional dancer Sophia never expected to fall for the quiet, intense physical therapist helping her recover from a career-threatening injury. As he teaches her body to heal, she teaches his heart to open again.',
    published: '2024',
  },
  {
    id: 10,
    title: 'On That Day When I Met You',
    image: onThatDayWhenIMetYou,
    progress: 0,
    category: ['Drama'],
    author: 'William Taylor',
    pages: 356,
    rating: 4.5,
    synopsis:
      'A deeply moving novel that follows two strangers whose brief encounter on a rainy afternoon in London ripples through the next thirty years of their lives in ways neither could have imagined.',
    published: '2024',
  },
  {
    id: 11,
    title: 'Our Story',
    image: ourStory,
    progress: 0,
    category: ['Romance'],
    author: 'Natalie Wilson',
    pages: 312,
    rating: 4.4,
    synopsis:
      "Told through letters, texts, and journal entries, this innovative romance captures the evolution of a relationship from first meeting to final goodbye, exploring how love changes us even when it doesn't last forever.",
    published: '2025',
  },
  {
    id: 12,
    title: 'Paper Heart',
    image: paperHeart,
    progress: 0,
    category: ['Mystery'],
    author: 'Marcus Reed',
    pages: 374,
    rating: 4.6,
    synopsis:
      'When an origami artist begins receiving intricately folded paper hearts containing clues to unsolved murders, she must work with a skeptical detective to decipher the messages before the killer strikes again.',
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

// Function to remove book from offline collection
const removeFromOffline = (book) => {
  // Here you would add the actual removal logic
  alert(`"${book.title}" has been removed from your offline library`)
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

      <!--Books Gallery: Offline-->
      <div class="container my-3">
        <div class="menu-header">
          <h2 class="my-3 py-3"><b>Offline Books</b></h2>
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
          <!-- Book 1 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[0])">
              <div class="book-cover-container">
                <img :src="beforeTheRain" class="card-img-top" alt="Before the Rain" />
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style="width: 25%"></div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Before the Rain</h5>
              </div>
            </div>
          </div>

          <!-- Book 2 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[1])">
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

          <!-- Book 3 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[2])">
              <div class="book-cover-container">
                <img :src="dreams" class="card-img-top" alt="Dreams" />
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style="width: 15%"></div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Dreams</h5>
              </div>
            </div>
          </div>

          <!-- Book 4 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[3])">
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

          <!-- Book 5 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[4])">
              <div class="book-cover-container">
                <img :src="firstLove" class="card-img-top" alt="First Love" />
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style="width: 10%"></div>
              </div>
              <div class="card-body">
                <h5 class="card-title">First Love</h5>
              </div>
            </div>
          </div>

          <!-- Book 6 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[5])">
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

          <!-- Book 7 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[6])">
              <div class="book-cover-container">
                <img :src="meMyselfAndI" class="card-img-top" alt="Me, Myself, and I" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Me, Myself, and I</h5>
              </div>
            </div>
          </div>

          <!-- Book 8 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[7])">
              <div class="book-cover-container">
                <img :src="midnightWorld" class="card-img-top" alt="Midnight World" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Midnight World</h5>
              </div>
            </div>
          </div>

          <!-- Book 9 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[8])">
              <div class="book-cover-container">
                <img :src="oneStepToTheHeart" class="card-img-top" alt="One Step to the Heart" />
              </div>
              <div class="card-body">
                <h5 class="card-title">One Step to the Heart</h5>
              </div>
            </div>
          </div>

          <!-- Book 10 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[9])">
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

          <!-- Book 11 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[10])">
              <div class="book-cover-container">
                <img :src="ourStory" class="card-img-top" alt="Our Story" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Our Story</h5>
              </div>
            </div>
          </div>

          <!-- Book 12 -->
          <div class="col">
            <div class="card" @click="openBookDetails(books[11])">
              <div class="book-cover-container">
                <img :src="paperHeart" class="card-img-top" alt="Paper Heart" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Paper Heart</h5>
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
                <button class="btn btn-primary w-100">Read Now</button>
                </div>
                <div class="col-6">
                <button class="btn btn-primary w-100">
                    <i class="bi bi-bookmark"></i> Bookmark
                  </button>
                </div>
                <div class="col-6">
                <button class="btn btn-primary w-100">
                    <i class="bi bi-heart"></i> Favorite
                  </button>
                </div>
                <div class="col-12 mt-2">
                  <button
                    class="btn btn-outline-danger w-100"
                    @click="removeFromOffline(selectedBook)"
                  >
                    <i class="bi bi-trash"></i> Remove from Offline
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
