<template>
  <!-- news  section -->
  <section>
    <div>
      <div class="container pb-70px">
        <!-- section heading -->
        <div class="text-center mb-50px">
          <p
            class="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color bg-opacity-10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold"
          >
            <span class="leading-1.3">News & Blogs</span>
          </p>
          <h2
            class="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold"
          >
            <span class="leading-1.3">Dicas importantes para você sair do aluguél</span>
          </h2>
        </div>
        <p v-if="$fetchState.pending">Carregando....</p>
        <p v-else-if="$fetchState.error">Erro ao carregar</p>

        <div v-else
          class="news-slider-container swiper-container relative -mx-15px"
        >
          <!-- apartment cards  -->
          <div class="swiper news-slider static">
            <div class="swiper-wrapper">
              <div v-for="post in this.posts" :key="post.id"
                class="swiper-slide mb-65px xl:mb-50px px-15px cursor-default"
              >
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
              </div>
            </div>

            <!-- pagination -->
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal !-bottom-[6px] block xl:hidden"
            >
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 1"
                  ></span
                  ><span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 2"
              aria-current="true"
            ></span
            ><span
              class="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 3"
            ></span>
            </div>
            <!--  navigation -->
            <div class="hidden xl:block">
              <div class="swiper-button-next bg-white z-1">
                <font-awesome-icon icon="fa-arrow-right"/>
              </div>
              <div class="swiper-button-prev bg-white z-1">
                <font-awesome-icon icon="fa-arrow-left"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'vue-blog-list',
  data() {
    return {
      posts: []
    }
  },
  // activated() {
  //   if (this.$fetchState.timestamp <= Date.now() - 30000) {
  //     this.$fetch()
  //   }
  // },
  async fetch( ) {
    // Função para criar o atraso
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Faz a requisição
    const fetchData = async () => {
      return await this.$axios.$get('/data/posts.json');
    };

    // Atrasar a execução da requisição
    await delay(2000); // Atraso de 2 segundos (2000ms)

    // Executar a requisição após o atraso
    this.posts = await fetchData();

    // console.log(this.posts);
  }
}
</script>
