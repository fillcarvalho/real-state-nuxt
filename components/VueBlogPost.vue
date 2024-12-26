<template>
  <div class="group">
    <!-- card thumbs -->
    <div class="relative leading-1">
      <nuxt-link :to="{name: 'blog-slug', params: { slug: post.slug } }" class="overflow-hidden">
        <img
          :src="post.thumbnail"
          class="w-full group-hover:scale-110 transition-all duration-700"
          :alt="post.title"
        >
      </nuxt-link>
    </div>
    <!-- card body -->
    <div class="p-30px shadow-box-shadow-4">
      <h4
        class="text-lg md:text-xl lg:text-22px font-semibold text-heading-color"
      >
        <a
          href="blog-details.html"
          class="hover:text-secondary-color leading-1.3"
        >{{post.title}}</a>
      </h4>
      <p class="text-sm lg:text-base max-w-500px mt-2">
        {{post.description}}
      </p>
      <!-- cart footer -->
      <div
        class="lg:pt-5 border-t border-border-color-1"
      >
        <div
          class="flex flex-wrap-reverse items-center justify-between gap-y-5"
        >
          <div
            class="capitalize w-full text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                            <span
                              class="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300"></span>
            <nuxt-link :to="{name: 'blog-slug', params: {slug: post.slug}}" class="relative w-full text-center z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px">
              Continuar lendo
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VueBlogPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
