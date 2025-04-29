<script setup>
import '@/assets/styles.css'
import booksLibraryLogoOutlineBlue from '@/assets/image/booksLibraryLogoOutlineBlue.png'
import beforeTheRain from '@/assets/image/beforeTheRain.png'
import cherishedMoment from '@/assets/image/cherishedMoment.png'
import dreams from '@/assets/image/dreams.png'
import findingMyselfAgain from '@/assets/image/findingMyselfAgain.png'
import firstLove from '@/assets/image/firstLove.png'
import loveWithoutLimits from '@/assets/image/loveWithoutLimits.png'
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
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>

      <!--Recently Read Menu-->
      <div class="container my-3">
        <div class="row align-items-center">
          <div class="col">
            <h2 class="mb-0"><b>Recently Read</b></h2>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary btn-sm" type="button">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div class="scrolling-wrapper">
          <div class="card-container">
            <div class="card">
              <img :src="beforeTheRain" class="card-img-top" />
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
          <div class="card-container">
            <div class="card">
              <img :src="cherishedMoment" class="card-img-top" />
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
          <div class="card-container">
            <div class="card">
              <img :src="dreams" class="card-img-top" />
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
          <div class="card-container">
            <div class="card">
              <img :src="findingMyselfAgain" class="card-img-top" />
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
          <div class="card-container">
            <div class="card">
              <img :src="firstLove" class="card-img-top" />
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
          <div class="card-container">
            <div class="card">
              <img :src="loveWithoutLimits" class="card-img-top" />
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

      <!--New Added Menu-->
      <div class="container my-3">
        <div class="row align-items">
          <div class="col">
            <h2 class="mb-0"><b>New Added</b></h2>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary btn-sm" type="button">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div class="scrolling-wrapper">
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Categories Menu-->
      <div class="container my-3">
        <div class="row align-items-center">
          <div class="col">
            <h2 class="mb-0"><b>Categories</b></h2>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary btn-sm" type="button">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div class="scrolling-wrapper">
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Book Title</h5>
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
          <a href="#" class="nav-item col text-Author Name text-decoration-none">
            <i class="bi bi-house-door"></i>
            <span class="nav-label">Home</span>
          </a>
          <a href="#" class="nav-item col text-Author Name text-decoration-none">
            <i class="bi bi-book"></i>
            <span class="nav-label">Offline</span>
          </a>
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
          <a href="#" class="nav-item col text-Author Name text-decoration-none">
            <i class="bi bi-gear"></i>
            <span class="nav-label">Settings</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
