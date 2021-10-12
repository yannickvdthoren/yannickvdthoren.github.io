<template>
  <div
    :class="{
      mobile__gallery: type == 'mobile',
      desktop__gallery: type == 'desktop',
    }"
  >
    <button
      @click="handleClick('prev', images.length)"
      class="prev"
      v-if="images.length > 1"
    >
      <Chevron />
    </button>
    <ul class="gallery__container">
      <li
        v-for="image in images"
        :key="company + '-' + type + '-' + image.id"
        :class="{ displayed: displayed == image.id }"
      >
        <picture>
          <!-- <source
            media="(max-width:650px)"
            :src="require(`~/assets/images${image.url}`)"
          /> -->
          <img
            :src="require(`~/assets/images${image.urlx2}`)"
            :alt="image.alt"
          />
        </picture>
      </li>
      <Smartphone v-if="type == 'mobile'" />
      <Desktop v-if="type == 'desktop'" />
    </ul>
    <button
      @click="handleClick('next', images.length)"
      class="next"
      v-if="images.length > 1"
    >
      <Chevron />
    </button>
  </div>
</template>
<script>
export default {
  name: 'Comp-GalleryMobile',
  props: {
    images: Array,
    company: String,
    type: String,
  },
  data() {
    return {
      displayed: 0,
    }
  },
  methods: {
    handleClick(direction, length) {
      if (direction === 'prev') {
        if (this.displayed == 0) {
          this.displayed = length - 1
        } else {
          this.displayed -= 1
        }
      }
      if (direction === 'next') {
        if (this.displayed == length - 1) {
          this.displayed = 0
        } else {
          this.displayed += 1
        }
      }
    },
  },
}
</script>
<style scoped>
div {
  display: grid;
  gap: 8px;
  align-items: center;
  grid-template-columns: 36px 1fr 36px;
  grid-template-areas: 'prev gallery next';
}
button {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  color: var(--blue);
  background: transparent;
  border: none;
  border-radius: 50%;
  transition: var(--ease);
  cursor: pointer;
}
@media (hover: hover) {
  button:hover {
    color: var(--white);
    background: var(--blue);
  }
}
.prev {
  grid-area: prev;
  transform: rotate(180deg);
}
.gallery__container {
  grid-area: gallery;
}
.next {
  grid-area: next;
}
ul {
  position: relative;
  display: grid;
  align-items: stretch;
  overflow: scroll;
}
.mobile__gallery ul {
  width: 294.394px;
  height: 584.831px;
}
.desktop__gallery ul {
  width: 914px;
  height: 612px;
}
ul > * {
  grid-area: 1/1/2/2;
}
li {
  display: none;
}
.mobile__gallery li {
  margin: 34px 15px 15px;
  border-radius: 20px;
}
.desktop__gallery li {
  margin: 36px 8px 0;
  border-radius: 0 0 25px 25px;
}
li.displayed {
  display: block;
  animation: fadeIn 0.6s ease-in-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
ul svg {
  z-index: 10;
  position: sticky;
  top: 0;
}
@media screen and (max-width: 600px) {
  .desktop__gallery ul,
  .desktop__gallery ul svg {
    width: 324px;
    height: 218px;
  }
  .mobile__gallery ul,
  .mobile__gallery ul svg {
    width: 250px;
    height: 496px;
  }
  button {
    width: 42px;
    height: 42px;
  }
}
@media (min-width: 601px) and (max-width: 900px) {
  .desktop__gallery ul,
  .desktop__gallery ul svg {
    width: 600px;
    height: 408px;
  }
}
</style>