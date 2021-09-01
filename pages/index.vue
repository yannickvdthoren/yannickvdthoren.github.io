<template>
  <main class="container">
    <Header />
    <h2>My work</h2>
    <List :articles="works" />
    <h2>Side Project</h2>
    <List :articles="side" />
    <Footer />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'index',
  components: {
    Header,
    List,
    Footer,
  },
  async asyncData({ $content, params }) {
    const works = await $content('work').sortBy('position', 'asc').fetch()
    const side = await $content('side-project')
      .sortBy('position', 'asc')
      .fetch()
    return { works, side }
  },
}
</script>

<style>
</style>
