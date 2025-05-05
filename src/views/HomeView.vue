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

// Add book data with categories and additional details
const books = [
  {
    id: 1,
    title: 'Before the Rain',
    image: beforeTheRain,
    progress: 25,
    category: ['Romance', 'Drama'],
    isNew: false,
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
    isNew: false,
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
    isNew: false,
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
    isNew: false,
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
    isNew: false,
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
    isNew: false,
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
    isNew: true,
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
    isNew: true,
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
    isNew: true,
    author: 'Amanda Lee',
    pages: 298,
    rating: 4.3,
    synopsis:
      'Professional dancer Sophia never expected to fall for the quiet, intense physical therapist helping her recover from a career-threatening injury. As he teaches her body to heal, she teaches his heart to open again.',
    published: '2024',
  },
  {
    id: 10,
    title: 'On that Day When I Met You',
    image: onThatDayWhenIMetYou,
    progress: 0,
    category: ['Drama'],
    isNew: true,
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
    isNew: true,
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
    isNew: true,
    author: 'Marcus Reed',
    pages: 374,
    rating: 4.6,
    synopsis:
      'When an origami artist begins receiving intricately folded paper hearts containing clues to unsolved murders, she must work with a skeptical detective to decipher the messages before the killer strikes again.',
    published: '2024',
  },
]

// Add categories
const categories = ['All', 'Romance', 'Drama', 'Fantasy', 'Mystery']

// Add reactive refs
const selectedCategory = ref('All')
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
          <input
            class="form-control me-2 rounded-pill"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
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
            <div class="card" @click="openBookDetails(book)">
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
            <RouterLink to="/newadded"><i class="bi bi-arrow-right-circle"></i></RouterLink>
          </button>
        </div>
        <div class="scrolling-wrapper">
          <div v-for="book in newBooks" :key="book.id" class="card-container">
            <div class="card" @click="openBookDetails(book)">
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
            <div class="card" @click="openBookDetails(book)">
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

    <!-- Book Details Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
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
              <div class="progress-text">{{ selectedBook.progress }}% completed</div>
            </div>
          </div>
          <div class="modal-book-info">
            <h2 class="modal-book-title">{{ selectedBook.title }}</h2>
            <div class="modal-book-author">by {{ selectedBook.author }}</div>
            <div class="modal-book-meta">
              <span class="badge bg-secondary me-2">{{ selectedBook.published }}</span>
              <span class="badge bg-secondary me-2">{{ selectedBook.pages }} pages</span>
              <span
                v-for="cat in selectedBook.category"
                :key="cat"
                class="badge bg-name-title me-2"
                >{{ cat }}</span
              >
            </div>
            <h4 class="modal-section-title">Synopsis</h4>
            <p class="modal-book-synopsis">{{ selectedBook.synopsis }}</p>
            <div class="modal-actions">
              <div class="row g-2">
                <div class="col-12 col-sm-6">
                  <button class="btn btn-primary w-100">Read Now</button>
                </div>
                <div class="col-12 col-sm-6">
                  <button class="btn btn-primary w-100">
                    <i class="bi bi-download"></i> Add to Offline
                  </button>
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
  width: 150px;
  margin-right: 15px;
  height: auto;
}

.card {
  height: 100%;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 auto;
  max-width: 180px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
}

.card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
.bg-name-title {
  background-color: #a2c3a4;
  color: black;
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
</style>
