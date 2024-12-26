<template>
  <div class="search-form-container" ref="container">
    <button @click.prevent="click()"
      class="search-toggle h-50px w-50px text-heading-color shadow-box-shadow-1 flex justify-center items-center hover:bg-secondary-color hover:text-white transition-all duration-300">
      <i class="icon-search for-search-show font-bold"></i>
      <i class="icon-cancel for-search-close font-bold hidden"></i>
    </button>
    <div
      class="search-form h-0 overflow-hidden absolute right-0 top-full mt-15px transition-all duration-300 shadow-box-shadow-3 z-xl bg-white">
      <form class="w-80 p-15px relative">
        <input type="text" placeholder="Pesquisa"
               class="text-sm text-paragraph-color pl-5 pr-50px placeholder:text-paragraph-color outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-60px block w-full rounded-none">
        <button type="submit" class="absolute top-1/2 -translate-y-1/2 right-7 text-heading-color">
          <i class="icon-search text-lg font-bold"></i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VueSearch',
  methods: {
    click() {
      // console.log(this.$refs)
      this.$refs.container.classList.toggle("active");
    }
  }

}
</script>
