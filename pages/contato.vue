<template>
  <div>
    <section>
      <div
        class="w-full elative z-0 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-white after:bg-opacity-30 after:-z-1"
      >
        <div class="container pb-5">
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
              Contato
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="container modal-container property-tab pb-20">
        <vue-contact-form default-message=""></vue-contact-form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueFeaturedProperties from "~/components/VueFeaturedProperties.vue";
import VueMap from "~/components/VueMap.vue";
import VueDropMessageForm from "~/components/VueDropMessageForm.vue";
import VueContactForm from "~/components/VueContactForm.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {VueContactForm, VueDropMessageForm, VueMap, VueFeaturedProperties}
})
</script>
