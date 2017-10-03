<template>
  <div>
      <h1 class="page-heading">{{ name }}</h1>
      <div v-html="page_intro"></div>
      <article v-for="item in items">
        <header>
          <p><time :datetime=item.date>{{ item.date.toLocaleTimeString('cs-CZ') }} {{ item.date.toLocaleDateString('cs-CZ') }}</time></p>
          <h2>{{ item.title }}</h2>
        </header>
        <div class="content">
          {{ item.text }}
        </div>
        <footer>
          <a :href=item.author._url class="author" rel="author">{{ item.author.nick }}</a>
        </footer>
      </article>
  </div>
</template>

<script>
export default {
  name: 'hello',
  created: function () {
    this.fetchContent()
  },
  methods: {
    fetchContent () {
      this.$http.get('https://private-c96zzzfd2-ddcz.apiary-mock.com/aktuality/').then((response) => {
        return response.body
      }).then((data) => {
        data.items.forEach((item) => {
          item.date = new Date(item.date)
          this.items.push(item)
        })
      }).catch((error) => {
        console.log('Can not fetch resource: ', error)
      })
    }
  },
  data () {
    return {
      name: 'Aktuality',
      page_intro: 'Vítejte na největším serveru <a href="http://www.dracidoupe.cz/index.php?rub=cojetodrd&skin=light">o Dračím Doupěti</a>. Najdete zde spoustu doplňků, článků či diskuzí k tématům. Pomocí menu "Skiny" si můžete změnit i vzhled tohoto webu, přesně podle Vašeho vkusu. Chcete-li využít všech funkcí tohoto webu, měli byste se zaregistrovat. ',
      items: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header time {
  font-weight: bold;
}

footer {
  width: 100%;
  text-align: right;
}
</style>
