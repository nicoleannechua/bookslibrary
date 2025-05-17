<script setup>
import '@/assets/styles.css'
import navBarLogoOutline from '@/assets/image/navBarLogoOutline.png'
import profileIcon from '@/assets/image/profileIcon.png'
import cherishedMoment from '@/assets/image/cherishedMoment.png'
import findingMyselfAgain from '@/assets/image/findingMyselfAgain.png'
import loveWithoutLimits from '@/assets/image/loveWithoutLimits.png'

import { ref } from 'vue'

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

const isDropdownOpen = ref(false)
</script>

<template>
  <div class="app-container">
    <div class="scrollable-content">
      <!--Navigation Bar: Brand-->
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img :src="navBarLogoOutline" alt="Bootstrap" width="80" height="30" />
          </a>

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
              <span v-for="cat in selectedBook.category" :key="cat" class="badge bg-primary me-2">{{
                cat
              }}</span>
            </div>
            <h4 class="modal-section-title">Synopsis</h4>
            <p class="modal-book-synopsis">{{ selectedBook.synopsis }}</p>
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
                    <i class="bi bi-cloud-download"></i> Download
                  </button>
                </div>
                <div class="col-12 mt-2">
                  <button
                    class="btn btn-outline-danger w-100"
                    @click="removeFromFavorites(selectedBook)"
                  >
                    <i class="bi bi-heart-break"></i> Remove from Favorites
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
</style>
