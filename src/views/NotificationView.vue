<script setup>
import '@/assets/styles.css'
import booksLibraryLogoOutlineBlue from '@/assets/image/booksLibraryLogoOutlineBlue.png'
import beforeTheRain from '@/assets/image/beforeTheRain.png'
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

      <!--Notification Section-->
      <div class="container">
        <div class="menu-header">
          <h2 class="my-3 py-3"><b>Notification</b></h2>
        </div>

        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start pointer">
            <RouterLink to="#" class="text-decoration-none text-dark w-100">
              <div class="d-flex">
                <div class="book-image-container me-3">
                  <img :src="beforeTheRain" alt="Book cover" class="book-image" />
                </div>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                  <div class="text-muted small mt-1">2 hours ago</div>
                </div>
              </div>
            </RouterLink>
          </li>
        </ul>
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

/*List Styles */
.pointer {
  cursor: pointer;
}

.pointer:hover {
  background-color: #f8f9fa;
}

.small {
  font-size: 0.75rem;
}

/* Book image styles */
.book-image-container {
  width: 70px;
  min-width: 70px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.book-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
