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
          <ul>
              <li>Rubriky
                  <ul>
                      <li>Tvorba
                          <ul>
                              <li>Články&amp;Eseje</li>
                              <li>Galerie</li>
                              <li>Fotogalerie</li>
                              <li>Hřbitov</li>
                          </ul>
                      </li>
                  </ul>
              </li>
          </ul>
      </nav>

      <nav class="right">
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



body.light nav {
    width: 15%;
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
