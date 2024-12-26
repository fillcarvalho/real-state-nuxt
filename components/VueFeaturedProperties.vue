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
