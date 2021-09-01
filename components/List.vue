<template>
  <ul>
    <li v-for="article of articles" :key="article.slug" class="grid">
      <div class="title">
        <h4
          v-if="article.suptitle"
          :style="{ color: 'var(--' + article.color + ')' }"
        >
          {{ article.suptitle }}
        </h4>
        <h3>{{ article.title }}</h3>
      </div>
      <div class="description">
        <h4
          v-if="article.role"
          :style="{ color: 'var(--' + article.color + ')' }"
        >
          Role
        </h4>
        <p v-if="article.role" class="role margin">{{ article.role }}</p>

        <h4 :style="{ color: 'var(--' + article.color + ')' }">Description</h4>
        <p class="margin">{{ article.description }}</p>

        <h4
          :style="{ color: 'var(--' + article.color + ')' }"
          v-if="article.mission"
        >
          Mission
        </h4>
        <p v-html="article.mission" v-if="article.mission"></p>
      </div>
      <div class="details">
        <h4
          v-if="article.website"
          :style="{ color: 'var(--' + article.color + ')' }"
        >
          Website
        </h4>
        <a :href="article.websiteURL" v-if="article.website">
          {{ article.website
          }}<Link :style="{ color: 'var(--' + article.color + ')' }" />
        </a>

        <h4
          v-if="article.social == true"
          class="social__title"
          :style="{ color: 'var(--' + article.color + ')' }"
        >
          Social
        </h4>
        <ul v-if="article.social == true" class="social">
          <li v-if="article.fb">
            <a :href="article.fbURL"> <Facebook /> {{ article.fb }}</a>
          </li>
          <li v-if="article.instagram">
            <a :href="article.instagramURL">
              <Instagram /> {{ article.instagram }}
            </a>
          </li>
          <li v-if="article.linkedin">
            <a :href="article.linkedinURL">
              <Linkedin /> {{ article.linkedin }}
            </a>
          </li>
        </ul>
      </div>
      <div class="gallery">
        <ul>
          <li v-for="image in article.images" :key="image.id">
            <picture>
              <img
                :src="require(`~/assets/images${image.url}`)"
                :alt="image.alt"
              />
            </picture>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'list',
  props: {
    articles: {
      type: Array,
    },
  },
}
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px 16px;
  grid-template-areas:
    'title description description description'
    'details gallery gallery gallery';
  margin-bottom: 64px;
}
@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-areas: 'title' 'details' 'description' 'gallery';
  }
}
a {
  display: flex;
  align-items: center;
  gap: 4px;
}
.title {
  grid-area: title;
}
.description {
  grid-area: description;
}
.details {
  grid-area: details;
}
.gallery {
  grid-area: gallery;
}
.role {
  font-size: var(--l);
}
.margin {
  margin-bottom: 24px;
}
.social__title {
  margin-top: 24px;
}
.social li {
  margin-top: 8px;
}
.social a {
  width: 100%;
  gap: 8px;
  font-size: var(--xs);
  white-space: nowrap;
  text-overflow: ellipsis;
}
.social a svg {
  flex: 0 0 auto;
}
.gallery {
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
.gallery ul {
  display: flex;
  gap: 16px;
}
.gallery li {
  flex: 0 0 calc((100% - 16px) / 2.3);
  scroll-snap-align: start;
}
.gallery picture {
  display: block;
  aspect-ratio: 1/1;
}
.gallery picture img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.description ul {
  list-style-type: disc !important;
}
</style>