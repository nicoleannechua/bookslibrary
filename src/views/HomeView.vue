<script setup>
import '@/assets/styles.css'
import booksLibraryLogoOutlineBlue from '@/assets/image/booksLibraryLogoOutlineBlue.png'
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

import { ref, computed } from 'vue'

// Add book data with categories
const books = [
  {
    id: 1,
    title: 'Before the Rain',
    image: beforeTheRain,
    progress: 25,
    category: ['Romance', 'Drama'],
    isNew: false,
  },
  {
    id: 2,
    title: 'Cherished Moment',
    image: cherishedMoment,
    progress: 45,
    category: ['Romance'],
    isNew: false,
  },
  {
    id: 3,
    title: 'Dreams',
    image: dreams,
    progress: 15,
    category: ['Fantasy'],
    isNew: false,
  },
  {
    id: 4,
    title: 'Finding Myself Again',
    image: findingMyselfAgain,
    progress: 78,
    category: ['Drama'],
    isNew: false,
  },
  {
    id: 5,
    title: 'First Love',
    image: firstLove,
    progress: 10,
    category: ['Romance'],
    isNew: false,
  },
  {
    id: 6,
    title: 'Love Without Limits',
    image: loveWithoutLimits,
    progress: 100,
    category: ['Romance'],
    isNew: false,
  },
  {
    id: 7,
    title: 'Me, Myself, and I',
    image: meMyselfAndI,
    progress: 0,
    category: ['Mystery'],
    isNew: true,
  },
  {
    id: 8,
    title: 'Midnight World',
    image: midnightWorld,
    progress: 0,
    category: ['Fantasy'],
    isNew: true,
  },
  {
    id: 9,
    title: 'One Step to the Heart',
    image: oneStepToTheHeart,
    progress: 0,
    category: ['Romance'],
    isNew: true,
  },
  {
    id: 10,
    title: 'On that Day When I Met You',
    image: onThatDayWhenIMetYou,
    progress: 0,
    category: ['Drama'],
    isNew: true,
  },
  {
    id: 11,
    title: 'Our Story',
    image: ourStory,
    progress: 0,
    category: ['Romance'],
    isNew: true,
  },
  {
    id: 12,
    title: 'Paper Heart',
    image: paperHeart,
    progress: 0,
    category: ['Mystery'],
    isNew: true,
  },
]

// Add categories
const categories = ['All', 'Romance', 'Drama', 'Fantasy', 'Mystery']

// Add reactive refs
const selectedCategory = ref('All')

// Add computed for filtered books
const filteredBooks = computed(() => {
  if (selectedCategory.value === 'All') return books
  return books.filter((book) => book.category.includes(selectedCategory.value))
})

// Add recently read and new books computed
const recentlyReadBooks = computed(() => books.filter((book) => book.progress > 0))

const newBooks = computed(() => books.filter((book) => book.isNew))
</script>

<template>
  <div class="app-container">
    <div class="scrollable-content">
      <!--Navigation Bar: Brand-->
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid px-3 py-2">
          <img :src="booksLibraryLogoOutlineBlue" alt="Bootstrap" width="30" height="40" />
        </div>
      </nav>

      <!--Navigation Bar: Search Bar-->
      <div class="container my-3">
        <form class="d-flex" role="search">
          <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn search-button rounded-pill" type="submit">Search</button>
        </form>
      </div>

      <!--Recently Read Menu-->
      <div class="container my-3">
        <div class="menu-header">
          <h2 class="mb-0"><b>Recently Read</b></h2>
          <button class="arrow-btn">
            <RouterLink to="/recentlyread"><i class="bi bi-arrow-right-circle"></i></RouterLink>
          </button>
        </div>
        <div class="scrolling-wrapper">
          <div v-for="book in recentlyReadBooks" :key="book.id" class="card-container">
            <div class="card">
              <img :src="book.image" class="card-img-top" />
              <div class="progress">
                <div class="progress-bar" :style="{ width: book.progress + '%' }"></div>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ book.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--New Added Menu-->
      <div class="container my-3">
        <div class="menu-header">
          <h2 class="mb-0"><b>New Added</b></h2>
          <button class="arrow-btn">
            <i class="bi bi-arrow-right-circle"></i>
          </button>
        </div>
        <div class="scrolling-wrapper">
          <div v-for="book in newBooks" :key="book.id" class="card-container">
            <div class="card">
              <img :src="book.image" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ book.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Categories Menu-->
      <div class="container my-3">
        <div class="row align-items-center mb-3">
          <div class="col">
            <h2 class="mb-0"><b>Categories</b></h2>
          </div>
        </div>
        <div class="categories-wrapper mb-3">
          <button
            v-for="category in categories"
            :key="category"
            class="btn category-btn me-2 mb-2"
            :class="{ active: selectedCategory === category }"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
        <div class="scrolling-wrapper">
          <div v-for="book in filteredBooks" :key="book.id" class="card-container">
            <div class="card">
              <img :src="book.image" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ book.title }}</h5>
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
          <RouterLink href="/" class="nav-item col text-Author Name text-decoration-none">
            <i class="bi bi-house-door"></i>
            <span class="nav-label">Home</span>
          </RouterLink>
          <RouterLink to="/offline" class="nav-item col text-Author Name text-decoration-none">
            <i class="bi bi-book"></i>
            <span class="nav-label">Offline</span>
          </RouterLink>
          <a href="#" class="nav-item col text-Author Name text-decoration-none">
            <i class="bi bi-heart"></i>
            <span class="nav-label">Favorites</span>
          </a>
          <a href="#" class="nav-item col text-Author Name text-decoration-none">
            <i class="bi bi-bookmark"></i>
            <span class="nav-label">Bookmarks</span>
          </a>
          <a href="#" class="nav-item col text-Author Name text-decoration-none">
            <i class="bi bi-bell"></i>
            <span class="nav-label">Notification</span>
          </a>
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

/* Card styles */
.card {
  margin-bottom: 1rem;
  width: 100% !important;
  border-color: #afddff;
  background-color: #ffffff;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(175, 221, 255, 0.3);
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

.scrolling-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding: 20px 0;
}

.scrolling-wrapper::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.card-container {
  display: inline-block;
  width: 180px;
  margin-right: 15px;
  height: auto;
}

.card {
  height: 100%;
  border: none;
  border-radius: 8px;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.card-body {
  padding: 2rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
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
    width: 150px;
  }

  .card-img-top {
    height: 220px;
  }
}

/* Menu Header Styles */
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.arrow-btn {
  background-color: transparent;
  border: none;
  color: #2b5d7d;
  padding: 0.75rem;
  transition: all 0.3s ease;
}

.arrow-btn:hover {
  color: #afddff;
  transform: scale(1.1);
}

.arrow-btn i {
  font-size: 2rem; /* Increased from 1.5rem */
}

@media (max-width: 768px) {
  .arrow-btn i {
    font-size: 1.5rem; /* Increased from 1.2rem */
  }

  .arrow-btn {
    padding: 0.5rem;
  }
}
</style>
