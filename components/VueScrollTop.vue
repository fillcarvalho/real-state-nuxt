<template>
  <!-- scroll top -->
  <button @click.prevent="scrollUp()"
    class="scroll-up w-30px h-30px lg:w-10 lg:h-10 lg:text-xl bg-section-bg-1 text-heading-color hover:bg-secondary-color hover:text-white rotate-[45deg] shadow-box-shadow-3 fixed bottom-[50px] lg:bottom-[70px] right-[3%] flex justify-center items-center z-xl active">
    <font-awesome-icon icon="fa fa-angle-up" class="leading-1 -rotate-[45deg] inline-block"/>
  </button>
</template>
<script>
export default {
  name: 'VueScrollTop',
  methods: {
    scrollUp: () => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  }
}
</script>
