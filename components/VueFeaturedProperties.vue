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
              <vue-propertie :propertie="apartment"></vue-propertie>
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
import VuePropertie from '~/components/VuePropertie.vue'

export default {
  name: 'vue-featured-properties',
  components: { VuePropertie },
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
