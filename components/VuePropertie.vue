<template>
  <div
    class="group border border-border-color-13 shadow-box-shadow-4"
  >
    <!-- card thumbs -->
    <div class="relative leading-1">
      <nuxt-link :to="{name: 'apartamento-slug', params: {slug: propertie.slug}}" class="overflow-hidden">
        <img
          :src=propertie.defaultPicture
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
          <nuxt-link :to="{name: 'apartamento-slug', params: {slug: propertie.slug}}" class="overflow-hidden">
            <i class="flaticon-pin"></i> {{ propertie.details.location.city }}
          </nuxt-link>
          <ul class="flex gap-10px">
            <li>
              <nuxt-link :to="{name: 'apartamento-slug', params: {slug: propertie.slug}}" class="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color">
                <font-awesome-icon icon="fa-camera" class="pr-1 leading-1"/>
                {{ propertie.pictures.length }}
              </nuxt-link>
            </li>
            <li v-if="propertie.details.video">
              <nuxt-link :to="{name: 'apartamento-slug', params: {slug: propertie.slug}}" class="w-30px lg:w-42px h-30px flex justify-center items-center bg-transparent lg:bg-white lg:bg-opacity-35 hover:text-secondary-color">
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
        <span class="leading-1.8">R$ {{ propertie.details.price }}</span>
      </h5>
      <h4
        class="text-lg md:text-xl lg:text-22px font-semibold text-heading-color mb-15px"
      >
        <nuxt-link :to="{name: 'apartamento-slug', params: {slug: propertie.slug}}" class="hover:text-secondary-color leading-1.3">
          {{ propertie.name }}
        </nuxt-link>
      </h4>
      <p class="text-sm mb-15px">
                          <span class="leading-1.8"
                          >{{ propertie.shortDescription }}</span>
      </p>

      <ul class="flex flex-wrap gap-15px py-4">
        <li
          class="text-sm pr-4 border-r border-primary-color border-opacity-20"
        >
          <p class="leading-1.8 font-bold">
            {{ propertie.details.bedrooms }}<i class="flaticon-bed ml-1"></i>
          </p>
          <p class="leading-1.8">Quartos</p>
        </li>
        <li
          class="text-sm pr-4 border-r border-primary-color border-opacity-20"
        >
          <p class="leading-1.8 font-bold">
            {{ propertie.details.toilets }}<i class="flaticon-clean ml-1"></i>
          </p>
          <p class="leading-1.8">Banheiros</p>
        </li>

        <li class="text-sm">
          <p class="leading-1.8 font-bold">
            {{ propertie.details.squareMeters }}<i
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
          <nuxt-link :to="{name: 'apartamento-slug', params: {slug: propertie.slug}}" class="relative w-full text-center z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px">
            Veja mais informações <font-awesome-icon icon="fa-arrow-right"/>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VuePropertie',
  props: {
    propertie: {
      type: Object,
      required: true
    }
  }
}
</script>
