<script setup>
import '@/assets/styles.css'
import authLogo from '@/assets/image/authLogo.png'
</script>

<template>
  <div class="container-fluid login-background px-4">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div class="col-lg-5 col-md-8 col-sm-10 col-11 mb-4 mb-lg-0 mx-auto">
        <div class="text-center">
          <img
            :src="authLogo"
            alt="Books Library Logo"
            class="img-fluid logo-image"
          />
        </div>
      </div>
      <div class="col-lg-4 col-md-8 col-sm-10 col-11 mx-auto">
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
                <b><RouterLink to="/createnewaccount" class="text-decoration-none">Create a new account</RouterLink></b>
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

<style scoped>
/*Login Page Adjustments*/
#login-view {
  background-color: #a2c3a4;
}

.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.btn {
  padding: 0.8rem;
}

.login-card {
  width: 100%;
}

@media (max-width: 768px) {
  .login-card {
    margin: 0 auto;
    min-width: 280px;
  }

  .card-body {
    padding: 1.5rem !important;
  }
}

.login-background {
  background-color: #f5f9fc;
  min-height: 100vh;
}

.form-control-lg {
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
}

.btn-lg {
  padding: 0.8rem 1rem;
  font-size: 1rem;
}

.login-btn {
  background-color: #a2c3a4;
  border: none;
  color: #4e6766;
  padding: 12px;
}

.login-btn:hover {
  background-color: #8aab8c;
  color: #ffffff;
}

.create-account-btn {
  background-color: #a2c3a4;
  border: none;
  color: #4e6766;
  padding: 12px;
}

.create-account-btn:hover {
  background-color: #8aab8c;
  color: #ffffff;
}

.guest-btn {
  border-color: #4e6766;
  color: #4e6766;
  padding: 12px;
}

.guest-btn:hover {
  background-color: #f5f9fc;
  border-color: #4e6766;
  color: #4e6766;
}

.forgot-password {
  color: #4e6766;
  text-decoration: none;
}

.forgot-password:hover {
  color: #344746;
}

.divider {
  border-color: #e5e5e5;
  margin: 1.5rem 0;
}

.form-control:focus {
  border-color: #a2c3a4;
  box-shadow: 0 0 0 0.2rem rgba(162, 195, 164, 0.25);
}

.logo-image {
  margin: 0 auto;
  max-width: 100%;
}

@media (max-width: 576px) {
  .container-fluid {
    padding: 1rem;
  }
}

</style>
