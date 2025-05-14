<script setup>
import { ref } from 'vue'
import '@/assets/styles.css'
import { computed } from 'vue'

// DARKMODE AND LIGHT MODE
const isDarkMode = ref(false)

const backgroundClass = computed(() => {
  return isDarkMode.value ? 'bg-dark text-light' : 'bg-light text-dark'
})

function toggleMode() {
  isDarkMode.value = !isDarkMode.value
}

// FONT SIZE
const count = ref(0)
function countIncrement() {
  count.value++
}

function countDecrement() {
  count.value--
}

// FONT STYLE
const fontStyle = ref('serif')
const fontClass = computed(() => {
  return {
    'font-serif': fontStyle.value === 'serif',
    'font-sans': fontStyle.value === 'sans-serif',
    'font-mono': fontStyle.value === 'monospace',
    'font-cursive': fontStyle.value === 'cursive',
  }
})

// ALIGNMENT
const alignment = ref('justify')
const textAlignStyle = computed(() => ({
  textAlign: alignment.value,
}))
</script>

<template>
  <div class="app-container">
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

    <!-- Main App Container -->

    <!-- Top Navbar / Header -->

    <nav class="navbar bg-body-tertiary container-fluid">
      <h1 class="navbar-brand pt-2"><b>BooksLibrary</b></h1>
    </nav>

    <!-- Settings Content -->

    <div class="container mt-2">
      <h1 class="text-center fw-bold">Settings</h1>
      <div class="row">
        <div class="col-12 col-md-6 mx-auto">
          <h5 class="fw-bold">Font</h5>
          <!-- <div class="dropdown">
        <button
          class="btn btn-outline-dark w-100 dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Georgia
        </button>
        <ul class="dropdown-menu w-100">
          <li><a class="dropdown-item" href="#">Arial</a></li>
          <li><a class="dropdown-item" href="#">Times New Roman</a></li>
          <li><a class="dropdown-item" href="#">Courier New</a></li>
        </ul>
      </div> -->
          <!-- Font Selection Dropdown -->
          <div>
            <select v-model="fontStyle" class="option-fonts">
              <option value="serif">Serif</option>
              <option value="sans-serif">Sans-Serif</option>
              <option value="monospace">Monospace</option>
              <option value="cursive">Cursive</option>
            </select>
            <!-- CHAPTER -->
            <p :style="{ fontFamily: fontStyle + ', sans-serif !important' }">Hello</p>
          </div>
        </div>
      </div>
    </div>

    <!-- FONT SIZE -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto d-flex align-items-center justify-content-between">
          <h5 class="fw-bold">Font Size</h5>
          <h5 class="number-size text-center">{{ count }}</h5>
          <button class="btn btn-outline-dark button-size" @click="countIncrement">
            <h5>+</h5>
          </button>
          <button class="button-size btn btn-outline-dark" @click="countDecrement">
            <span>—</span>
          </button>
        </div>
      </div>
    </div>

    <!-- FONT COLOR -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto d-flex align-items-center justify-content-between">
          <h5 class="fw-bold">Font Color</h5>
          <button class="btn btn-outline-dark dark-light" @click="toggleMode">
            {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </div>
    </div>

    <!-- ALIGNMENT -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto d-flex align-items-center justify-content-between">
          <h5 class="fw-bold">Alignment</h5>
          <button
            class="btn btn-outline-none bi bi-justify"
            :class="{ active: alignment === 'justify' }"
            @click="alignment = 'justify'"
          ></button>
          <button
            class="btn btn-outline-none bi bi-justify-left"
            :class="{ active: alignment === 'left' }"
            @click="alignment = 'left'"
          ></button>
          <button
            class="btn btn-outline-none bi bi-justify-right"
            :class="{ active: alignment === 'right' }"
            @click="alignment = 'right'"
          ></button>
          <button
            class="btn btn-outline-none bi bi-text-center"
            :class="{ active: alignment === 'center' }"
            @click="alignment = 'center'"
          ></button>
        </div>
      </div>
    </div>

    <!-- BRIGHTNESS -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto d-flex align-items-center justify-content-between">
          <h5 class="fw-bold">Brightness</h5>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto d-flex align-items-center justify-content-between">
          <i class="bright-icon bi bi-brightness-low"></i>
          <input type="range" class="form-range" min="0" max="5" id="customRange2" />
        </div>
      </div>
    </div>

    <!-- SAVE CHANGES BUTTON -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto d-flex align-items-center justify-content-between">
          <p></p>
          <button class="btn btn-outline-info text-black">Save Changes</button>
        </div>
      </div>
    </div>

    <!-- REQUESTS -->
    <div class="container">
      <div class="row mt-2">
        <div class="col-12 col-md-6 mx-auto d-flex align-items-center">
          <h6 class="fw-semibold">If you wish to request a book or have any troubles:</h6>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto d-flex align-items-center">
          <p class="bi bi-envelope-fill fw-semibold size-font">
            Contact us: BooksLibrarySupport@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.option-fonts {
  width: 100%;
  padding: 8px; /* Add padding for better appearance */
  font-size: 16px;
  border-radius: 5px;
}

.bright-icon {
  font-size: 40px;
}
.button-size {
  background-color: transparent;
  width: 30px;
  /* margin-top: 0%; */
  padding: 2px;
  color: black;
  border: 1px solid black;
  border-radius: 50%;
  height: 30px;
}
.dark-light {
  padding: 3px;
}
.number-size {
  border: 1px solid black;
  border-radius: 10%;
  /* padding: 5px; */
  width: 15%;
}

.size-font {
  font-size: 14px;
  padding-bottom: 10px;
  height: 50px;
}
.form-range {
  width: 45%;
}
.font-serif {
  font-family: serif;
}
.font-sans {
  font-family: sans-serif;
}
.font-mono {
  font-family: monospace;
}
.font-cursive {
  font-family: cursive;
}

.btn-outline-none {
  font-size: 24px; /* Increase icon size */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Keep the buttons circular */
}
</style>
