<script setup>
import '@/assets/styles.css'
</script>

<template>
  <div class="app-container">
    <div class="scrollable-content">
      <!--Navigation Bar: Brand-->
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <h1 class="navbar-brand pt-2"><b>BooksLibrary</b></h1>
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
        <div class="row">
          <div class="col my-3">
            <h2><b>Recently Read</b></h2>
          </div>
          <div class="col">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary" type="button">
                <i class="bi bi-arrow-right-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="scrolling-wrapper">
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--New Added Menu-->
      <div class="container my-3">
        <div class="row">
          <div class="col my-3">
            <h2><b>New Added</b></h2>
          </div>
          <div class="col">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary" type="button">
                <i class="bi bi-arrow-right-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="scrolling-wrapper">
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Categories Menu-->
      <div class="container my-3">
        <div class="row">
          <div class="col my-3">
            <h2><b>Categories</b></h2>
          </div>
          <div class="col">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary" type="button">
                <i class="bi bi-arrow-right-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="scrolling-wrapper">
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <img src="#" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Book Title</h5>
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
      <div class="container-fluid d-flex justify-content-around">
        <a href="#" class="nav-item text-center text-decoration-none">
          <i class="bi bi-house-door fs-4"></i>
          <div>Home</div>
        </a>
        <a href="#" class="nav-item text-center text-decoration-none">
          <i class="bi bi-book fs-4"></i>
          <div>Offline</div>
        </a>
        <a href="#" class="nav-item text-center text-decoration-none">
          <i class="bi bi-heart fs-4"></i>
          <div>Favorites</div>
        </a>
        <a href="#" class="nav-item text-center text-decoration-none">
          <i class="bi bi-bookmark fs-4"></i>
          <div>Bookmarks</div>
        </a>
        <a href="#" class="nav-item text-center text-decoration-none">
          <i class="bi bi-bell fs-4"></i>
          <div>Notification</div>
        </a>
        <a href="#" class="nav-item text-center text-decoration-none">
          <i class="bi bi-gear fs-4"></i>
          <div>Settings</div>
        </a>
      </div>
    </nav>
  </div>
</template>
