<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light fixed-top" id="navBar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">F L U X</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="uli">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Sign Up</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Options
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">About Us</a></li>
                <li><a class="dropdown-item" href="#">Materials</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dhurjati&family=Ephesis&family=Smooch+Sans:wght@200;300;500&family=Space+Mono&display=swap");

#app {
  padding-top: 30px; /* Reduced padding to accommodate smaller navbar */
}

#navBar {
  height: 100px; /* Reduced height for the navbar */
}

#navBar .navbar-brand {
  font-size: 1.2rem; /* Smaller font size for the brand */
  padding: 10px 20px; /* Reduced padding for the brand */
}

#navBar .nav-item {
  font-size: 0.9rem; /* Smaller font size for navbar items */
}

.navbar-brand:hover {
  filter: drop-shadow(0 0 0.2em #30606eaa);
  transition: all 0.5s ease-in-out;
}

.nav-item:hover {
  filter: drop-shadow(0 0 0.2em #30606eaa);
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}
</style>
