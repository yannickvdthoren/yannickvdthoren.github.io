<template>
  <header class="grid">
    <div class="content">
      <h1>Yannick Vandenthoren.</h1>
      <ul class="social">
        <li>
          <a href="https://twitter.com/yannickvdthoren"><Twitter /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yannickvdthoren/"
            ><Linkedin
          /></a>
        </li>
        <li>
          <a href="https://github.com/yannickvdthoren/"><Github /></a>
        </li>
        <li>
          <a href="https://dribbble.com/yannickvdthoren"><Dribbble /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/yannickvdthoren/"><Instagram /></a>
        </li>
      </ul>
      <p>
        I’m a passionate <strong>Product Designer</strong> and
        <strong>Full Stack Developer</strong> adept at unlocking the full
        potential of my clients - often in dire need of a great design, a solid
        UX or even a full redesign. See
        <a href="https://www.linkedin.com/in/yannickvdthoren/"
          >what they say about my work</a
        >.
      </p>
      <div class="buttons">
        <a href="mailto:hey@yannick.design" class="btn btn--outline">
          <Send /> Send me an email
        </a>
        <a
          href="/2021-Yannick-Vandenthoren-resume.pdf"
          class="btn btn--inverted"
          download
        >
          <Download /> Download my resume
        </a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style scoped>
header {
  height: 100vh;
  place-items: center;
}
.content {
  grid-area: 1/3/2/11;
  display: grid;
  place-items: baseline;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'title link' 'desc desc' 'button button';
  grid-gap: 24px;
}
h1 {
  grid-area: title;
}
ul {
  grid-area: link;
  align-self: end;
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 8px;
}
li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
li a svg {
  width: 16px;
}
p {
  grid-area: desc;
  max-width: 65ch;
}
.buttons {
  grid-area: button;
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 16px;
}
@media screen and (max-width: 900px) {
  .content {
    grid-template-columns: 1fr;
    grid-template-areas: 'title' 'link' 'desc' 'button';
  }
}
</style>
