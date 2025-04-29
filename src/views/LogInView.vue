<script setup>
import '@/assets/styles.css'
import booksLibraryLogoOutline from '@/assets/image/booksLibraryLogoOutline.png'
</script>

<template>
  <div class="container-fluid login-background px-4">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div class="col-lg-5 col-sm-6 mb-4 mb-lg-0">
        <div class="text-center">
          <img
            :src="booksLibraryLogoOutline"
            alt="Books Library Logo"
            class="img-fluid logo-image"
          />
        </div>
      </div>
      <div class="col-lg-4 col-sm-10 col-11">
        <div class="card login-card">
          <div class="card-body text-center p-4">
            <div class="mb-3">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Email or phone number"
              />
            </div>
            <div class="mb-3">
              <input type="password" class="form-control form-control-lg" placeholder="Password" />
            </div>
            <div class="d-grid gap-2">
              <RouterLink to="/" class="btn btn-primary login-btn text-decoration-none mb-2">
                <b>Log In</b>
              </RouterLink>
            </div>
            <a href="#" class="forgot-password mt-3">Forgot Password?</a>
            <hr class="divider" />
            <div class="d-grid gap-2">
              <button class="btn btn-primary create-account-btn">
                <b>Create a new account</b>
              </button>
              <RouterLink to="/" class="btn btn-outline-primary guest-btn text-decoration-none">
                <b>Sign in as Guest</b>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

