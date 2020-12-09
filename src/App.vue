<template>
  <div id="app">
    <!-- header -->
    <header class=header>
      <div class="nav">
        <div class="nav-logo">
          <router-link to="/">THE BASS SHOP</router-link>
        </div>
        <router-link to="/new-arrivals">NEW ARRIVALS</router-link> |
        <router-link to="/uprights">UPRIGHTS</router-link> |
        <router-link to="/electrics">ELECTRICS</router-link> |
        <router-link to="/bows">BOWS</router-link> |
        <router-link to="/accessories">ACCESSORIES</router-link> 
      </div>
    </header>
    <!-- end header -->

    <router-view/>

    <!-- footer -->
    <footer class="footer">
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
