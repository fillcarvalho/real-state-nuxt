<template>
  <div>
    <!-- banner section -->
    <section>
      <!-- banner section -->
      <div class="hero hero-primary overflow-hidden relative z-10">
        <!-- Swiper -->
        <div class="hero-slider-container swiper-container relative">
          <div class="swiper primary-slider">
            <div class="swiper-wrapper">
              <!-- Hero  1 -->
              <div
                class="swiper-slide relative z-0 py-100px 4xl:min-h-[780px] overflow-hidden flex items-center bg-section-bg-1"
              >
                <div class="container w-full">
                  <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-30px">
                    <!-- banner Left -->

                    <div class="slide-animation left-[60px]">
                      <p class="text-sm md:text-15px lg:text-base text-heading-color font-bold mb-5 animated">
                        <font-awesome-icon icon="fas fa-home" class="text-secondary-color"/>
                        {{$featuredApartment.badget}}
                      </p>
                      <h1
                        class="text-3xl md:text-40px lg:text-50px 4xl:text-65px leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px font-bold mb-5 animated">
                          <span class="leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px" v-html="$featuredApartment.title">
                          </span>
                      </h1>
                      <p
                        class="text-sm lg:text-base mb-5 max-w-450px pl-15px xl:pl-30px border-l border-border-color-14 animated">
                          <span class="leading-25px lg:leading-1.8" v-html="$featuredApartment.shortDescription">
                          </span>
                      </p>
                      <div class="mt-5 lg:mt-10 mb-30px xl:mb-0 animated">
                        <h5
                          class="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block mr-15px">
                          <span
                            class="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300"></span>
                          <nuxt-link :to="{name: 'apartamento-slug', params: {slug: $featuredApartment.slug}}" class="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px">
                            Veja
                            mais informações
                          </nuxt-link>
                        </h5>
                        <div class="inline-block" v-if="$featuredApartment.details.video">
                          <div>
                            <a
                              class="glightbox w-60px h-60px text-center text-sm lg:text-base text-secondary-color shadow-box-shadow-2 rounded-full bg-white flex items-center justify-center"
                              :href="$featuredApartment.details.video + '?autoplay=1&amp;showinfo=0&amp;controls=1'"
                              data-glightbox="type: video;">
                              <i class="icon-play ltn__secondary-color"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- banner right -->
                    <div class="4xl:absolute right-[60px] xl:right-[150px] bottom-[100px] 4xl:h-[70%] 4xl:w-[45%]">
                      <img class="4xl:h-full 4xl:ml-auto" :src="$featuredApartment.defaultPicture" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Hero  2 -->
              <div
                class="swiper-slide relative z-0 py-100px 4xl:min-h-[780px] overflow-hidden flex items-center bg-section-bg-1"
              >
                <div class="container w-full">
                  <div class="grid grid-cols-1 lg:grid-cols-2">
                    <!-- banner Left -->
                    <div
                      class="lg:col-start-2 lg:col-span-1 flex flex-col items-end text-end slide-animation right-[60px]"
                    >
                      <p
                        class="text-sm md:text-15px lg:text-base text-heading-color font-bold mb-5 animated"
                      >
                        <font-awesome-icon icon="fas fa-home" class="text-secondary-color"/>
                        Real Estate Agency
                      </p>
                      <h1
                        class="text-3xl md:text-40px lg:text-50px 4xl:text-65px leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px font-bold mb-5 animated"
                      >
                          <span
                            class="leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px"
                          >
                            The Right Place <br>
                            of House Finding
                          </span>
                      </h1>
                      <p
                        class="text-sm lg:text-base mb-5 max-w-450px pr-15px xl:pr-30px border-r border-border-color-14 animated"
                      >
                          <span class="leading-25px lg:leading-1.8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </span>
                      </p>
                      <div class="lg:mt-5 mb-30px xl:mb-0 animated">
                        <h5
                          class="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block mr-15px"
                        >
                            <span
                              class="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300"
                            ></span>
                          <a
                            href="service.html"
                            class="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                          >OUR SERVICES</a
                          >
                        </h5>
                        <h5
                          class="capitalize inline-block text-sm md:text-base text-primary-color hover:text-white hover:bg-primary-color relative group whitespace-nowrap font-normal transition-all duration-300 shadow-box-shadow-3"
                        >
                            <span
                              class="inline-block absolute top-0 right-0 w-full h-full bg-white group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300"
                            ></span>
                          <a
                            href="about.html"
                            class="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px"
                          >LEARN MORE</a
                          >
                        </h5>
                      </div>
                    </div>
                    <!-- banner right -->
                    <div
                      class="lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-1"
                    >
                      <div
                        class="4xl:absolute left-[60px] xl:left-[150px] bottom-[100px] 4xl:h-[70%] 4xl:w-[45%]"
                      >
                        <img
                          class="4xl:h-full 4xl:ml-auto"
                          src="/11.jpg"
                          alt=""
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden xl:block">
              <div class="swiper-button-next">
                <font-awesome-icon icon="fa-arrow-right"/>
              </div>
              <div class="swiper-button-prev">
                <font-awesome-icon icon="fa-arrow-left"/>
              </div>
            </div>
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
            >

            </div>
          </div>
        </div>
      </div>
      <!-- pinned select area  -->
      <!--        <div class="container mt-30 4xl:-mt-65px relative z-20">-->
      <!--          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30px lg:gap-4 xl:gap-30px py-10 px-25px md:p-10 shadow-box-shadow-1 border border-border-color-1 bg-white">-->
      <!--            <div>-->
      <!--              <select class="selectize" style="opacity: 0; width: 0px; padding: 0px; height: 0px;">-->
      <!--                <option value="Choose Area" data-display="Select">-->
      <!--                  Choose Area-->
      <!--                </option>-->
      <!--                <option value="Chicago">Chicago</option>-->
      <!--                <option value="London">London</option>-->
      <!--                <option value="Los Angeles">Los Angeles</option>-->
      <!--                <option value="New York">New York</option>-->
      <!--                <option value="New Jersey">New Jersey</option>-->
      <!--              </select><div class="nice-select selectize" tabindex="0"><span class="current">-->
      <!--                  Choose Area-->
      <!--                </span><div class="nice-select-dropdown"><ul class="list"><li data-value="Choose Area" class="option selected null focus">-->
      <!--              Choose Area-->
      <!--            </li><li data-value="Chicago" class="option null">Chicago</li><li data-value="London" class="option null">London</li><li data-value="Los Angeles" class="option null">Los Angeles</li><li data-value="New York" class="option null">New York</li><li data-value="New Jersey" class="option null">New Jersey</li></ul></div></div>-->
      <!--            </div>-->
      <!--            <div>-->
      <!--              <select class="selectize" style="opacity: 0; width: 0px; padding: 0px; height: 0px;">-->
      <!--                <option data-display="Select">Property Status</option>-->
      <!--                <option>Open house</option>-->
      <!--                <option>Rent</option>-->
      <!--                <option>Sale</option>-->
      <!--                <option>Sold</option>-->
      <!--              </select><div class="nice-select selectize" tabindex="0"><span class="current">Property Status</span><div class="nice-select-dropdown"><ul class="list"><li data-value="Property Status" class="option selected null focus">Property Status</li><li data-value="Open house" class="option null">Open house</li><li data-value="Rent" class="option null">Rent</li><li data-value="Sale" class="option null">Sale</li><li data-value="Sold" class="option null">Sold</li></ul></div></div>-->
      <!--            </div>-->
      <!--            <div>-->
      <!--              <select class="selectize" style="opacity: 0; width: 0px; padding: 0px; height: 0px;">-->
      <!--                <option data-display="Select">Property Type</option>-->
      <!--                <option>Apartment</option>-->
      <!--                <option>Co-op</option>-->
      <!--                <option>Condo</option>-->
      <!--                <option>Single Family Home</option>-->
      <!--              </select><div class="nice-select selectize" tabindex="0"><span class="current">Property Type</span><div class="nice-select-dropdown"><ul class="list"><li data-value="Property Type" class="option selected null">Property Type</li><li data-value="Apartment" class="option null">Apartment</li><li data-value="Co-op" class="option null">Co-op</li><li data-value="Condo" class="option null">Condo</li><li data-value="Single Family Home" class="option null">Single Family Home</li></ul></div></div>-->
      <!--            </div>-->

      <!--            <div class="text-center">-->
      <!--              <h5 class="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">-->
      <!--                <span class="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300"></span>-->
      <!--                <a href="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/shop-right-sidebar.html" class="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px">Find Now</a>-->
      <!--              </h5>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
    </section>
    <div class="container-3 ">
      <vue-featured-properties :properties="$apartments"></vue-featured-properties>
    </div>
    <!-- about 2 section -->
    <section>
      <div class="container pt-30 pb-90px">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-30px items-center">
          <!-- about 2 left -->
          <div class="mb-5">
            <div class="mb-30px">
              <h2
                class="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold mb-15px">
                <span class="leading-1.3">Destaque</span>
              </h2>
              <p class="text-sm lg:text-base max-w-500px">
                {{ $featuredApartment.shortDescription }}
              </p>
            </div>
            <ul class="space-y-4 pb-4">
              <li v-for="amenditie in $featuredApartment.details.amenities"
                  class="text-sm lg:text-base flex items-center">
                <font-awesome-icon icon="fa fa-check" class="text-secondary-color mr-2"/>
                {{ amenditie.name }}
              </li>
            </ul>

            <ul class="flex gap-x-15px py-4">
              <li class="text-sm pr-4 border-r border-primary-color border-opacity-20">
                <p class="leading-1.8 font-bold">
                  {{ $featuredApartment.details.bedrooms }}<i class="flaticon-bed ml-1"></i>
                </p>
                <p class="leading-1.8">Quartos</p>
              </li>
              <li class="text-sm pr-4 border-r border-primary-color border-opacity-20">
                <p class="leading-1.8 font-bold">
                  {{ $featuredApartment.details.toilets }}<i class="flaticon-clean ml-1"></i>
                </p>
                <p class="leading-1.8">Banheiros</p>
              </li>
              <li class="text-sm pr-4 border-r border-primary-color border-opacity-20">
                <p class="leading-1.8 font-bold">
                  {{ $featuredApartment.details.parkingSpace }}<i class="flaticon-car ml-1"></i>
                </p>
                <p class="leading-1.8">Vaga na garagem</p>
              </li>
              <li class="text-sm">
                <p class="leading-1.8 font-bold">
                  {{ $featuredApartment.details.squareMeters }}<i
                  class="flaticon-square-shape-design-interface-tool-symbol ml-1"></i>
                </p>
                <p class="leading-1.8">m²</p>
              </li>
            </ul>

            <div>
              <ul class="flex gap-15px pt-4">
                <li>
                  <a class="glightbox2" href="/11.jpg" data-glightbox="type:image;"><img src="/11.jpg" alt=""></a>
                </li>
                <li>
                  <a class="glightbox2" href="/12.jpg"><img src="/12.jpg" alt=""></a>
                </li>
                <li>
                  <a class="glightbox2" href="/13.jpg"><img src="/13.jpg" alt=""></a>
                </li>
              </ul>
            </div>
          </div>

          <!-- about 2 right -->
          <div class="lg:ml-30px relative mb-10 lg:mb-0">
            <img src="/9.png" alt="" class="max-w-full">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: 'Saia do aluguel',
      meta: [
        { hid: 'description', name: 'description', content: 'Sua chance de sair do aluguel está aqui. Veja os apartamentos populares disponíveis para compra' },
      ],
    }
  },
})
</script>
