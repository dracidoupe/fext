<template>
  <div id="app">
    <div class="skin-historic flex" v-if="skin == 'historic'">
      <main>
        <router-view></router-view>
      </main>

      <nav class="top">
        <ul>
          <li>Fórum</li>
          <li>Ankety</li>
          <li>Chat</li>
          <li>...</li>
        </ul>
      </nav>

      <nav class="left">
        <ul>
          <li>Články&amp;Eseje</li>
          <li>Galerie</li>
          <li>Fotogalerie</li>
          <li>Hřbitov</li>
        </ul>
      </nav>

      <nav>
          <ul>
              <li>Vzhled
                  <ul>
                      <li><a href="#" v-on:click="changeSkin('light', $event)">Light</a></li>
                      <li><a href="#" v-on:click="changeSkin('historic', $event)">Historic</a></li>
                  </ul>
              </li>
          </ul>
      </nav>

    </div>

    <!-- Else display default Light skin -->
    <div class="skin-light flex" v-else>
      <main>
        <router-view></router-view>
      </main>
      <nav class="left">
          <ul class="nav_border">
              <li><span class="list_heading">Rubriky</span>
                  <ul>
                      <li><span class="list_subheading">Tvorba</span>
                          <ul>
                              <li><a href="#">Články&amp;Eseje</a></li>
                              <li><a href="#">Galerie</a></li>
                              <li><a href="#">Fotogalerie</a></li>
                              <li><a href="#">Hřbitov</a></li>
                          </ul>
                      </li>
                  </ul>
              </li>
          </ul>
      </nav>

      <nav class="right">
          <ul>
              <li><span class="list_heading">Vzhled</span>
                  <ul>
                      <li><a href="#" v-on:click="changeSkin('light', $event)">Light</a></li>
                      <li><a href="#" v-on:click="changeSkin('historic', $event)">Historic</a></li>
                  </ul>
              </li>
          </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skin: this.$root.$data.store.state.skin
    }
  },
  methods: {
    changeSkin (skin, event) {
      event.preventDefault()
      this.$root.$data.store.setSkin(skin)
      console.log('skin' + this.$root.$data.store.state.skin)
      document.getElementsByTagName('body')[0].setAttribute('class', skin)
    }
  }
}
</script>

<style>
body {
    background-color: #c0c0c0;
    font-family: Verdana, Arial, sans-serif;
}

.logo {
    width: 100%;
    text-align: center;
}


body.historic {
    background-color: red;
}

#app div.flex{
    display: flex;
}

body.historic nav {
    width: 15%;
}

body.historic nav.left {
    order: 0;
}
body.historic main {
    width: 70%;
    order: 1;
}

body.historic nav.right {
    order: 2;
}



body.light h1.page-heading {
  width: 100%;
  font-weight: bold;
  border-top: 0px;
  border-bottom: 0px;
  background-color: #2f4f4f;
  color: white;
  text-align: center;
  font-size: 150%;
  padding: 3px;
}


body.light nav {
    width: 15%;
    padding-left: 1%;
    padding-right: 1%;
}

body.light nav ul {
  list-style-type: none;
  padding: 0;
}

body.light ul.nav_border {
  display: block;
  border: solid 1px;
}

body.light nav .list_heading {
  font-weight: bold;
  background-color: #2f4f4f;
  color: white;
  text-align: center;
  width: 100%;
  display: block;
  padding-top: 2%;
  padding-bottom: 2%;
}

body.light nav .list_subheading {
  background-color: #aaaaaa;
  display: block;
  text-align: center;
  padding: 3px;
  font-weight: bold;
}

body.light nav .list_subheading::before {
  content: "- ";
}

body.light nav .list_subheading::after {
  content: " -";
}

body.light nav ul li a {
  font-weight: bold;
  display: block;
}

body.light nav ul li a::first-letter {
  color: #000050;
}


body.light nav.left {
    order: 0;
}
body.light main {
    width: 70%;
    order: 1;
}

body.light nav.right {
    order: 2;
}

body.light a {
    color: #2f4f4f;
    text-decoration: none;
}

body.light a:hover{
    color: #0d2d2d;
}
</style>
