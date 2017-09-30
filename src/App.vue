<template>
  <div id="app">
    <main>
      <h1>Aktuality</h1>
      <p>Lorem Doupe Ipsum</p>
      <router-view></router-view>
    </main>

    <aside class="left">
        <nav>
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
    </aside>

    <aside class="right">
        <nav>
            <ul>
                <li>Vzhled
                    <ul>
                        <li>Family Silver</li>
                        <li>Historic</li>
                    </ul>
                </li>
            </ul>
        </nav>
    </aside>

  </div>
</template>

<script>
export default {
  name: 'fext'
}
</script>

<style>
body {
    background-color: #c0c0c0;
}

#app {
    display: flex;
}

aside {
    width: 15%;
}

aside.left {
    order: 0;
}
main {
    width: 70%;
    order: 1;
}

aside.right {
    order: 2;
}
</style>
