<template>
  <div>
    <!-- banner section -->
    <section>
      <!-- banner section -->
      <div
        class="w-full elative z-0 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-white after:bg-opacity-30 after:-z-1"
      >
        <div class="container mb-5">
          <h1
            class="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-4xl font-bold text-heading-color mb-15px"
          >
              <span
                class="leading-1.3 md:leading-1.3 lg:leading-1.3 xl:leading-1.3"
              >{{ $featuredApartment.name }} - {{$route.params.slug}}</span
              >
          </h1>
          <ul
            class="breadcrumb flex gap-30px items-center text-sm lg:text-base font-bold pt-4"
          >
            <li class="home relative leading-1.8 lg:leading-1.8">
              <a href="/"
              >
                <font-awesome-icon icon="fas fa-home" class="text-secondary-color"/>
                Início
              </a
              >
            </li>
            <li class="leading-1.8 lg:leading-1.8 text-heading-color">
              {{ $featuredApartment.name }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- details slider -->
    <div>
      <div class="news-slider-container swiper-container relative">
        <!-- product details -->
        <div class="swiper product-details-slider static">
          <div class="swiper-wrapper mb-10">
            <!-- card 1 -->
            <div class="swiper-slide cursor-default">
              <a
                href="assets/img/img-slide/31.jpg"
                class="glightbox overflow-hidden"
                data-width="118vh"
              ><img
                class="hover:scale-110 transition-all duration-700"
                src="/31.jpg"
                alt=""
              ></a>
            </div>

            <!-- card 2 -->
            <div class="swiper-slide cursor-default">
              <a
                href="assets/img/img-slide/32.jpg"
                class="glightbox overflow-hidden"
                data-width="118vh"
              ><img
                class="hover:scale-110 transition-all duration-700"
                src="/32.jpg"
                alt=""
              ></a>
            </div>

            <!-- card 3 -->
            <div class="swiper-slide cursor-default">
              <a
                href="assets/img/img-slide/33.jpg"
                class="glightbox overflow-hidden"
                data-width="118vh"
              ><img
                class="hover:scale-110 transition-all duration-700"
                src="/33.jpg"
                alt=""
              ></a>
            </div>

            <!-- card 4 -->
            <div class="swiper-slide cursor-default">
              <a
                href="assets/img/img-slide/34.jpg"
                class="glightbox overflow-hidden"
                data-width="118vh"
              ><img
                class="hover:scale-110 transition-all duration-700"
                src="/34.jpg"
                alt=""
              ></a>
            </div>

            <!-- card 5 -->
            <div class="swiper-slide cursor-default">
              <a
                href="assets/img/img-slide/35.jpg"
                class="glightbox overflow-hidden"
                data-width="118vh"
              ><img
                class="hover:scale-110 transition-all duration-700"
                src="/35.jpg"
                alt=""
              ></a>
            </div>
          </div>
          <!-- pagination -->
          <div
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal !-bottom-[6px] block lg:hidden"
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
          <div class="hidden lg:block">
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
    <!-- product details section -->
    <section>
      <div class="container modal-container property-tab pt-70px pb-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-30px">
          <!-- details body -->
          <div class="lg:col-start-1 lg:col-span-8">
            <!--  top -->
            <ul
              class="flex flex-wrap gap-x-15px md:gap-x-35px gap-y-15px items-center mb-30px"
            >
              <li>
                <ul class="flex gap-x-15px md:gap-x-30px items-center">
                  <li>
                    <div
                      class="text-xs md:text-sm uppercase text-white px-15px pt-5px pb-0.5 bg-green font-semibold hover:text-white"
                      href="#"
                    ><span class="leading-1.8 md:leading-1.8"
                    >Venda</span
                    ></div
                    >
                  </li>
                </ul>
              </li>
            </ul>

            <!-- main -->
            <div>
              <h4
                class="text-2xl md:text-26px lg:text-3xl xl:text-4xl font-bold text-heading-color mb-15px"
              >
                  <span class="leading-1.3 lg:leading-1.3 xl:leading-1.3"
                  >{{$featuredApartment.shortDescription}}</span
                  >
              </h4>
              <p class="text-sm">
                  <span class="leading-1.8"
                  ><i class="flaticon-pin text-secondary-color"></i> {{ $featuredApartment.details.location.city }}</span
                  >
              </p>
              <!-- Description -->
              <h4
                class="text-22px font-semibold leading-1.3 pl-10px border-l-2 border-secondary-color text-heading-color my-30px"
              >
                Descrição
              </h4>
              <p class="text-sm lg:text-base my-5">
                  <span class="leading-1.8 lg:leading-1.8"
                  v-html="$featuredApartment.description"></span
                  >
              </p>
              <!-- Gallery -->
              <h4
                class="text-22px font-semibold leading-1.3 pl-10px border-l-2 border-secondary-color text-heading-color my-30px"
              >
                Galeria
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-30px mb-60px">
                <div class="md:cols-start-1 md:col-span-1 leading-1">
                  <a
                    href="assets/img/others/14.jpg"
                    class="glightbox w-full leading-1 md:h-full"
                  >
                    <img
                      src="/14.jpg"
                      alt=""
                      class="w-full md:h-full"
                    >
                  </a>
                </div>

                <div
                  class="md:cols-start-1 md:col-span-1 md:row-start-2 md:row-sapn-1 leading-1"
                >
                  <a
                    href="assets/img/others/15.jpg"
                    class="glightbox w-full leading-1"
                  >
                    <img
                      src="/15.jpg"
                      alt=""
                      class="w-full"
                    >
                  </a>
                </div>
                <div
                  class="md:cols-start-2 md:col-span-1 md:row-start-1 md:row-span-2 leading-1"
                >
                  <a
                    href="assets/img/others/16.jpg"
                    class="glightbox w-full leading-1 md:h-full"
                    data-width="56vh"
                  >
                    <img
                      src="/16.jpg"
                      alt=""
                      class="w-full md:h-full"
                    >
                  </a>
                </div>
              </div>

              <!-- Comodidades -->
              <h4
                class="text-22px font-semibold leading-1.3 pl-10px border-l-2 border-secondary-color text-heading-color my-30px"
              >
                Comodidades
              </h4>
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-60px gap-y-15px"
              >
                <ul class="space-y-4 pb-4">
                  <li v-for="amenditie in $featuredApartment.details.amenities"
                      class="text-sm lg:text-base flex items-center">
                    <font-awesome-icon icon="fa fa-check" class="text-secondary-color mr-2"/>
                    {{ amenditie.name }}
                  </li>
                </ul>
              </div>
              <!-- Location -->
              <h4
                class="text-22px font-semibold leading-1.3 pl-10px border-l-2 border-secondary-color text-heading-color my-30px"
              >
                Localidade
              </h4>
              <div class="h-360px mb-60px">
                <vue-map :endereco-destino="$featuredApartment.details.location.address"></vue-map>
              </div>
              <div class="video" v-if="$featuredApartment.details.video">
              <!-- Property Video -->
                <h4
                  class="text-22px font-semibold leading-1.3 pl-10px border-l-2 border-secondary-color text-heading-color my-30px"
                >
                  Vídeo
                </h4>
                <div class="mb-60px">
                  <div
                    class="relative z-0 after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-primary-color after:opacity-40 after:z-1 w-full h-auto lg:h-[450px] xl:h-[500px] min-h-80 md:min-h-[350px] bg-center bg-no-repeat bg-cover"
                  >
                    <img
                      :src="$featuredApartment.defaultPicture"
                      alt=""
                      class="w-full md:h-full"
                    >
                    <div
                      class="absolute left-0 top-0 flex justify-center items-center h-full w-full z-10"
                    >
                      <a
                        class="glightbox3 w-50px h-50px lg:w-20 lg:h-20 text-center text-sm lg:text-base text-secondary-color shadow-box-shadow-2 rounded-100% bg-white flex items-center justify-center"
                        :href="$featuredApartment.details.video"
                        data-glightbox="type: video;"
                      >
                        <i class="icon-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Related Properties -->
              <vue-featured-properties :properties="$apartments"></vue-featured-properties>
            </div>
          </div>
          <!-- sidebar -->
          <div class="relative lg:col-start-9 lg:col-span-4 pt-60px lg:pt-0">
            <vue-drop-message-form></vue-drop-message-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMap from '~/components/VueMap.vue'
import VueDropMessageForm from '~/components/VueDropMessageForm.vue'
import VueFeaturedProperties from '~/components/VueFeaturedProperties.vue'

export default Vue.extend({
  name: 'ApartmentPage',
  data() {
    return {
      title: 'Apartamento',
      description: 'Description',
      apartment: {}
    }
  },
  // created() {
  //   this.apartment = this.$featuredApartment;
  //   this.setSeo();
  // },
  // methods: {
  //   setSeo: () => {
  //     this.title = $featuredApartment.name;
  //     this.description = $featuredApartment.shortDescription
  //   }
  // },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
      ],
    }
  },
  components: {VueFeaturedProperties, VueDropMessageForm, VueMap}
})
</script>
