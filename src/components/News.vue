<template>
  <div>
      <h1 class="page-heading">Aktuality</h1>
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
  data () {
    return {
      page_intro: 'Vítejte na největším serveru <a href="http://www.dracidoupe.cz/index.php?rub=cojetodrd&skin=light">o Dračím Doupěti</a>. Najdete zde spoustu doplňků, článků či diskuzí k tématům. Pomocí menu "Skiny" si můžete změnit i vzhled tohoto webu, přesně podle Vašeho vkusu. Chcete-li využít všech funkcí tohoto webu, měli byste se zaregistrovat. ',
      items: [
        {
          date: new Date(),
          title: 'Example News',
          text: 'Text of news (tm)',
          author: {
            nick: 'Unknown/N',
            _url: '/uzivatele/123/'
          }
        },
        {
          date: new Date(),
          title: 'Example News 2',
          text: 'Text of news (tm), but longer',
          author: {
            nick: 'Unknown/N',
            _url: '/uzivatele/123/'
          }
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1.page-heading {
  width: 100%;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-weight: bold;
  border-top: 0px;
  border-bottom: 0px;
  background-color: #2f4f4f;
  color: white;
  text-align: center;
  font-size: 150%;
}

header time {
  font-weight: bold;
}

footer {
  width: 100%;
  text-align: right;
}
</style>
