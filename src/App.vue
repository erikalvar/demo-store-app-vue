<template>
  <div id="app">
    <!-- header -->
    <header class="header">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">THE BASS SHOP</router-link>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/new-arrivals"
                  >NEW ARRIVALS</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/uprights"
                  >UPRIGHTS</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/electrics"
                  >ELECTRICS</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/bows">BOWS</router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACCESSORIES
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Strings</a></li>
                  <li><a class="dropdown-item" href="#">Cases</a></li>
                  <li><a class="dropdown-item" href="#">Tuners and Metronomes</a></li>
                  <li><a class="dropdown-item" href="#">Pickups</a></li>
                  <li><a class="dropdown-item" href="#">Amps</a></li>
                  <li><a class="dropdown-item" href="#">Parts</a></li>
                  <li><a class="dropdown-item" href="#">Books/DVDs/Audio</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
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

      <!-- <div class="nav">
        <div class="nav-logo">
          <router-link to="/">THE BASS SHOP</router-link>
        </div>
        <router-link to="/new-arrivals">NEW ARRIVALS</router-link> |
        <router-link to="/uprights">UPRIGHTS</router-link> |
        <router-link to="/electrics">ELECTRICS</router-link> |
        <router-link to="/bows">BOWS</router-link> |
        <router-link to="/accessories">ACCESSORIES</router-link> 
      </div> -->
    </header>
    <!-- end header -->

    <router-view />

    <!-- footer -->
    <footer class="footer fixed-bottom">
      <p>Test Footer</p>
    </footer>
    <!-- end footer -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
