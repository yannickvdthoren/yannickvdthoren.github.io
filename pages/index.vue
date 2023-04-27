<template>
  <main>
    <Header />
    <List :articles="works" />

    <List :articles="side" />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
export default {
  name: 'index',
  components: {
    Header,
  },
  async asyncData({ $content, params }) {
    const works = await $content('work').sortBy('position', 'desc').fetch()
    const side = await $content('side-project')
      .sortBy('position', 'asc')
      .fetch()
    return { works, side }
  },
}
</script>
