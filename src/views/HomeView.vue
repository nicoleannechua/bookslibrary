<script setup>
import '@/assets/styles.css'
import booksLibraryLogoElement from '@/assets/image/booksLibraryLogoElement.png'
</script>

<template>
  <div class="app-container">
    <div class="scrollable-content">
      <!--Navigation Bar: Brand-->
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <img :src="booksLibraryLogoElement" alt="Bootstrap" width="30" height="40" />
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
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--New Added Menu-->
      <div class="container my-3">
        <div class="row align-items-center">
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
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
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
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
                <p class="card-text text-center">Author Name</p>
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
          <a href="#" class="nav-item col text-center text-decoration-none">
            <i class="bi bi-house-door"></i>
            <span class="nav-label">Home</span>
          </a>
          <a href="#" class="nav-item col text-center text-decoration-none">
            <i class="bi bi-book"></i>
            <span class="nav-label">Offline</span>
          </a>
          <a href="#" class="nav-item col text-center text-decoration-none">
            <i class="bi bi-heart"></i>
            <span class="nav-label">Favorites</span>
          </a>
          <a href="#" class="nav-item col text-center text-decoration-none">
            <i class="bi bi-bookmark"></i>
            <span class="nav-label">Bookmarks</span>
          </a>
          <a href="#" class="nav-item col text-center text-decoration-none">
            <i class="bi bi-bell"></i>
            <span class="nav-label">Notification</span>
          </a>
          <a href="#" class="nav-item col text-center text-decoration-none">
            <i class="bi bi-gear"></i>
            <span class="nav-label">Settings</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
