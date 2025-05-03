<script setup>
import '@/assets/styles.css'
import booksLibraryLogoOutlineBlue from '@/assets/image/booksLibraryLogoOutlineBlue.png'
import meMyselfAndI from '@/assets/image/meMyselfAndI.png'
import midnightWorld from '@/assets/image/midnightWorld.png'
import oneStepToTheHeart from '@/assets/image/oneStepToTheHeart.png'
import onThatDayWhenIMetYou from '@/assets/image/onThatDayWhenIMetYou.png'
import ourStory from '@/assets/image/ourStory.png'
import paperHeart from '@/assets/image/paperHeart.png'
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
        <div class="search-container d-flex align-items-center">
          <button class="arrow-btn me-2">
            <RouterLink to="/"><i class="bi bi-arrow-left-circle"></i></RouterLink>
          </button>
          <form class="d-flex flex-grow-1" role="search">
            <input
              class="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn search-button rounded-pill" type="submit">Search</button>
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
            <div class="card">
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
            <div class="card">
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
            <div class="card">
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
            <div class="card">
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
            <div class="card">
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
            <div class="card">
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
            <RouterLink
              to="/offline"
              class="nav-item col text-decoration-none active"
            >
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
            <RouterLink
              to="/notification"
              class="nav-item col text-decoration-none"
            >
              <i class="bi bi-bell"></i>
              <span class="nav-label">Notification</span>
            </RouterLink>
          </div>
        </div>
      </nav>
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
}

.card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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

/*Arrow Style Adjustments */
.arrow-btn {
  background-color: transparent;
  border: none;
  color: #2b5d7d;
  padding: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.arrow-btn:hover {
  color: #afddff;
  transform: scale(1.1);
}

.arrow-btn i {
  font-size: 2rem; /* Increased from 1.5rem */
  line-height: 1;
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
