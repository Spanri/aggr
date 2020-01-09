<template>
  <div class="app">
    <Header class="app__header" />
    <Loader class="app__loader"></Loader>
    <nuxt class="app__main"/>
    <Footer class="app__footer"/>
  </div>
</template>

<script>
import { TimelineMax, } from 'gsap';
//import { Sine, } from 'gsap/all';

export default {
  name: 'Default',

  components: {
    Header: () => import('@/components/Header/Header.vue'),
    Loader: () => import('@/ui-components/Loader.vue'),
    Footer: () => import('@/components/Footer.vue'),
  },

  methods: {
    animate() {
      const timeLine = new TimelineMax();
      timeLine.set('.app__loader', { visibility: 'hidden', delay: 1, });
      timeLine.from('.app__loader', 1, { alpha: 0, ease: 0, });
      timeLine.to('.app__loader', 1, { alpha: 1, ease: 1, });
      timeLine.to('.app__loader', 1.5, { alpha: 0, ease: 1, });
      // timeLine.set('.content', { visibility: 'visible', delay: 1, });
      // timeLine.from('.content', 1, { alpha: 0, ease: Sine.easeInm, });
      // timeLine.to('.content', 1, { alpha: 1, ease: Sine.easeIn, });
      // timeLine.set('.navigation', { visibility: 'visible', });
      // timeLine.from('.nav-list', 0.5, {
      //   alpha: 0,
      //   ease: Sine.easeIn,
      // });
      // timeLine.to('.nav-list', 0.5, {
      //   alpha: 1,
      //   ease: Sine.easeIn,
      // });
      // timeLine.staggerFromTo('.nav-list__item', 0.5, { x: 50, alpha: 0, }, { x: 0, alpha: 1, }, 0.2);
      // timeLine.from('.nav__logo', 2, {
      //   alpha: 0,
      //   ease: Sine.easeIn,
      // });
      // timeLine.to('.nav__logo', 2, {
      //   alpha: 1,
      //   ease: Sine.easeIn,
      // });
    },
  },

  beforeMount() {
    this.animate();
  },
};
</script>