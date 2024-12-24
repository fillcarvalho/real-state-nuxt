<template>
  <!-- featured appartments  section -->
  <section>
    <div class="pt-115px pb-[75px] modal-container">
      <!-- section heading -->
      <div class="text-center mb-50px">
        <p
          class="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color bg-opacity-10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
          <span class="leading-1.3">Imóveis</span>
        </p>
        <h2 class="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
          <span class="leading-1.3">Apartamentos a venda</span>
        </h2>
      </div>
      <div class="featured-apartments swiper-container relative">
        <!-- apartment cards  -->
        <div class="swiper featured-apartments-slider static">
          <div class="swiper-wrapper">
            <!-- card 1 -->
            <div v-for="apartment in apartments" class="swiper-slide mb-65px px-15px">
              <div
                class="group border border-border-color-13 shadow-box-shadow-4"
              >
                <!-- card thumbs -->
                <div class="relative leading-1">
                  <nuxt-link :to="{name: 'apartamento-slug', params: {slug: apartment.slug}}" class="overflow-hidden">
                    <img
                      :src=apartment.defaultPicture
                      class="w-full group-hover:scale-110 transition-all duration-700"
                      alt=""
                    >
                  </nuxt-link>
                  <div
                    class="absolute w-full left-0 bottom-0 px-15px pb-15px lg:px-30px bg-transparent bg-gradient-color-5"
                  >
                    <div
                      class="text-sm text-white flex justify-between items-center"
                    >
                      <nuxt-link :to="{name: 'apartamento-slug', params: {slug: apartment.slug}}" class="overflow-hidden">
                        <i class="flaticon-pin"></i> {{ apartment.details.location.city }}
                      </nuxt-link>
                      <ul class="flex gap-10px">
                        <li>
                          <nuxt-link :to="{name: 'apartamento-slug', params: {slug: apartment.slug}}" class="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color">
                            <font-awesome-icon icon="fa-camera" class="pr-1 leading-1"/>
                            {{ apartment.pictures.length }}
                          </nuxt-link>
                        </li>
                        <li v-if="apartment.details.video">
                          <nuxt-link :to="{name: 'apartamento-slug', params: {slug: apartment.slug}}" class="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color">
                            <font-awesome-icon icon="fa-video" class="pr-1 leading-1"/>
                            1
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- card body -->
                <div class="px-5 pt-4 lg:px-30px lg:pt-5">
                  <h5
                    class="text-lg text-secondary-color font-semibold mb-5px"
                  >
                    <span class="leading-1.8">R$ {{ apartment.details.price }}</span>
                  </h5>
                  <h4
                    class="text-lg md:text-xl lg:text-22px font-semibold text-heading-color mb-15px"
                  >
                    <nuxt-link :to="{name: 'apartamento-slug', params: {slug: apartment.slug}}" class="hover:text-secondary-color leading-1.3">
                      {{ apartment.name }}
                    </nuxt-link>
                  </h4>
                  <p class="text-sm mb-15px">
                          <span class="leading-1.8"
                          >{{ apartment.shortDescription }}</span>
                  </p>

                  <ul class="flex flex-wrap gap-15px py-4">
                    <li
                      class="text-sm pr-4 border-r border-primary-color border-opacity-20"
                    >
                      <p class="leading-1.8 font-bold">
                        {{ apartment.details.bedrooms }}<i class="flaticon-bed ml-1"></i>
                      </p>
                      <p class="leading-1.8">Quartos</p>
                    </li>
                    <li
                      class="text-sm pr-4 border-r border-primary-color border-opacity-20"
                    >
                      <p class="leading-1.8 font-bold">
                        {{ apartment.details.toilets }}<i class="flaticon-clean ml-1"></i>
                      </p>
                      <p class="leading-1.8">Banheiros</p>
                    </li>

                    <li class="text-sm">
                      <p class="leading-1.8 font-bold">
                        {{ apartment.details.squareMeters }}<i
                        class="flaticon-square-shape-design-interface-tool-symbol ml-1"
                      ></i>
                      </p>
                      <p class="leading-1.8">m²</p>
                    </li>
                  </ul>
                </div>
                <!-- cart footer -->
                <div
                  class="p-5 lg:p-30px lg:pt-5 border-t border-border-color-1"
                >
                  <div
                    class="flex flex-wrap-reverse items-center justify-between gap-y-5"
                  >
                    <div
                      class="capitalize w-full text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                            <span
                              class="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300"></span>
                      <nuxt-link :to="{name: 'apartamento-slug', params: {slug: apartment.slug}}" class="relative w-full text-center z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px">
                        Veja mais informações
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- pagination -->
          <div
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal !-bottom-[6px]"
          >

          </div>
          <!--  navigation -->
          <div class="hidden 3xl:block">
            <div class="swiper-button-next z-1">
              <font-awesome-icon icon="fa-arrow-right"/>
            </div>
            <div class="swiper-button-prev z-1">
              <font-awesome-icon icon="fa-arrow-left" class="pr-1 leading-1"/>
            </div>
          </div>
        </div>
      </div>


      <!-- modals -->
      <!-- modal apartment details-->
      <div
        class="modal hidden fixed top-0 left-0 w-full h-full z-xxl transition-all duration-500 bg-lightBlack opacity-0 overflow-y-auto">
        <div class="modal-close fixed md:absolute top-0 left-0 w-full h-full z-xsmall cursor-zoom-out"></div>
        <div
          class="modal-content transition-all duration-500 -translate-y-20 sm:max-w-500px lg:max-w-980px m-2 mt-150px sm:mx-auto relative z-small rounded-lg">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-30px p-30px bg-white relative">
            <div>
              <img src="/4.png" class="w-full" alt="">
            </div>

            <!-- card body -->
            <div class="pl-25px">
              <div class="absolute right-4 top-4">
                <button
                  class="modal-close w-10 h-10 leading-10 text-center bg-section-bg-1 text-black text-25px inline-block">
                  <span>×</span>
                </button>
              </div>
              <ul class="flex items-center mb-5px">
                <li>
                  <a href="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/index.html#"
                     class="text-xs text-ratings hover:text-secondary-color">
                    <font-awesome-icon icon="fa-star" class="pr-1 leading-1.8"/>
                  </a>
                </li>
                <li>
                  <a href="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/index.html#"
                     class="text-xs text-ratings hover:text-secondary-color">
                    <font-awesome-icon icon="fa-star" class="pr-1 leading-1.8"/>
                  </a>
                </li>
                <li>
                  <a href="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/index.html#"
                     class="text-xs text-ratings hover:text-secondary-color">
                    <font-awesome-icon icon="fa-star" class="pr-1 leading-1.8"/>
                  </a>
                </li>
                <li>
                  <a href="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/index.html#"
                     class="text-xs text-ratings hover:text-secondary-color">
                    <font-awesome-icon icon="fa-star-half-alt" class="pr-1 leading-1.8"/>
                  </a>
                </li>
                <li>
                  <a href="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/index.html#"
                     class="text-xs text-ratings hover:text-secondary-color">
                    <font-awesome-icon icon="fa-star" class="pr-1 leading-1.8"/>
                  </a>
                </li>
                <li>
                  <a href="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/index.html#"
                     class="text-xs text-ratings hover:text-secondary-color">
                    ( 95 Reviews )</a>
                </li>
              </ul>

              <h4 class="text-22px md:text-2xl font-bold text-heading-color mb-0">
                <a href="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/product-details.html"
                   class="leading-1.3 hover:text-secondary-color">3 Rooms Manhattan</a>
              </h4>
              <p
                class="text-34px md:text-50px text-secondary-color font-semibold mb-5 pb-0 border-b border-border-color-12 border-opacity-25 leading-1.2">
                <span>$34,900</span>
                <del class="text-26px md:text-40px leading-1.2 opacity-60 pl-1">$36,500</del>
              </p>
              <p class="text-sm lg:text-base mb-9 md:mb-10">
                      <span class="leading-1.8">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos repellendus repudiandae incidunt quidem
                        pariatur expedita, quo quis modi tempore non.</span>
              </p>

              <ul class="flex flex-wrap gap-5 pb-5 mb-5 border-b border-border-color-12 border-opacity-25">
                <li class="text-sm">
                  <button
                    class="modal-open leading-1.8 font-semibold hover:text-secondary-color transition-all duration-300"
                    data-modal-index="3">
                    <i class="far fa-heart px-0.5"></i> Add to Wishlist
                  </button>
                </li>

                <li class="text-sm">
                  <button class="leading-1.8 font-semibold hover:text-secondary-color transition-all duration-300">
                    <font-awesome-icon icon="fa-exchange-alt" class="px-0.5"/>
                    Compare
                  </button>
                </li>
              </ul>
              <!-- social area -->
              <ul class="flex gap-x-[18px] items-center">
                <li>
                  <p class="text-sm lg:text-base">
                    <span class="leading-1.8">Share</span>
                  </p>
                </li>
                <li>
                  <a href="https://www.facebook.com/" class="text-sm lg:text-base hover:text-secondary-color">
                    <i class="fab fa-facebook-f leading-1.8"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/" class="text-sm lg:text-base hover:text-secondary-color">
                    <i class="fab fa-twitter leading-1.8"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" class="text-sm lg:text-base hover:text-secondary-color">
                    <i class="fab fa-linkedin leading-1.8"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" class="text-sm lg:text-base hover:text-secondary-color">
                    <i class="fab fa-instagram leading-1.8"></i>
                  </a>
                </li>
              </ul>

              <!-- action -->
              <div class="text-end">
                <a href="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/product-details.html"
                   class="text-xs hover:text-secondary-color underline hover:underline">
                  <span class="leading-1.8">View Details</span></a>
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
  name: 'vue-featured-properties',
  props: {
    /**
     * Apartment list
     */
    apartments: {
      type: Array,
      required: true
    }
  }
  ,
  data () {
    return {
      count: 0,
    }
  },
}
</script>
