<template>
  <ul>
    <li
      v-for="article of articles"
      :key="article.slug"
      class="grid article"
      :id="article.slug"
    >
      <input
        type="radio"
        :name="'gallery' + article.slug"
        :id="'mob' + article.slug"
        class="mobile__input"
        checked
        hidden
      />
      <input
        type="radio"
        :name="'gallery' + article.slug"
        :id="'des' + article.slug"
        class="desktop__input"
        hidden
      />

      <div class="description">
        <div class="left">
          <h4 v-if="article.suptitle" v-html="article.suptitle"></h4>
          <h2 :class="{ website: article.website }">{{ article.title }}</h2>

          <p v-if="article.website" class="website">
            <a :href="article.websiteURL">{{ article.website }}</a>
          </p>

          <h3 v-if="article.role">Role</h3>
          <p v-if="article.role" class="role margin">{{ article.role }}</p>

          <h3>Description</h3>
          <p class="margin">{{ article.description }}</p>
        </div>
        <div class="right">
          <h3 v-if="article.mission">Mission</h3>
          <p v-html="article.mission" v-if="article.mission"></p>
        </div>
      </div>

      <div class="gallery">
        <Gallery
          :images="article.mobile"
          :company="article.project"
          type="mobile"
          v-if="article.mobile"
        />
        <Gallery
          :images="article.desktop"
          :company="article.project"
          type="desktop"
          v-if="article.desktop"
        />
        <!-- to do with labels and inputs -->
        <div class="gallery__ctrls" v-if="article.desktop && article.mobile">
          <label :for="'mob' + article.slug" class="mobile__btn">
            <MobileIcon /> Mobile
          </label>
          <label :for="'des' + article.slug" class="desktop__btn">
            <DesktopIcon /> Dekstop
          </label>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import Gallery from '@/components/Gallery'
export default {
  name: 'list',
  components: {
    Gallery,
  },
  props: {
    articles: {
      type: Array,
    },
  },
}
</script>
<style scoped>
.grid {
  min-height: 100vh;
  place-items: center;
}
.article {
  margin-bottom: 120px;
}
h2 {
  margin-bottom: 24px;
}
h2.website {
  margin-bottom: 8px;
}
p.website {
  margin-bottom: 24px;
}
p {
  margin-bottom: 16px;
}
.desktop__input:checked ~ .gallery .desktop__gallery,
.mobile__input:checked ~ .gallery .mobile__gallery {
  display: grid;
}
.desktop__input:checked ~ .gallery .mobile__gallery,
.mobile__input:checked ~ .gallery .desktop__gallery {
  display: none;
}
@media (min-width: 601px) and (max-width: 900px) {
  .article {
    max-width: 60ch;
    margin: 0 auto 120px;
  }
}
@media screen and (min-width: 901px) {
  .description {
    grid-area: 1/2/2/8;
  }
  .gallery {
    grid-area: 1/9/2/12;
  }
  .desktop__input:checked ~ .description {
    min-height: 0;
    grid-area: 1/2/2/12;
  }
  .desktop__input:checked ~ .gallery {
    grid-area: 2/2/3/12;
  }
  .desktop__input:checked ~ .description .left {
    grid-area: 1/1/2/5;
  }
  .desktop__input:checked ~ .description .right {
    grid-area: 1/5/2/13;
  }
}
.gallery {
  display: grid;
  place-items: center;
}
.gallery svg {
  width: 100%;
  height: auto;
  align-items: stretch;
}
.gallery__ctrls {
  grid-area: 2/1/3/2;
  display: flex;
  margin-top: 24px;
  justify-content: center;
}
.gallery__ctrls label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: var(--s);
  color: var(--blue);
  background: white;
  border: 2px solid var(--blue);
  transition: var(--ease);
  cursor: pointer;
}
.gallery__ctrls label svg {
  width: 14px;
  height: auto;
  margin-right: 8px;
}
.desktop__input:checked ~ .gallery .gallery__ctrls .desktop__btn,
.mobile__input:checked ~ .gallery .gallery__ctrls .mobile__btn {
  color: var(--white);
  background: var(--blue);
}
</style>