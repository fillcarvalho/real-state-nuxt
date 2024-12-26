<template>
  <div>
    <!-- footer start -->
    <footer>
      <div
        class="pt-187px pb-5 px-15px 3xl:px-[2%] 4xl:px-[5%] mt-95px bg-section-bg-2 text-sm lg:text-base text-white relative">
        <div class="px-15px">
          <!-- footer top -->
          <div class="container w-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              class="px-25px lg:px-60px py-50px bg-secondary-color text-white flex justify-center lg:justify-between items-center flex-col lg:flex-row gap-y-30px lg:gap-0 sm:whitespace-nowrap">
              <div>
                <h5 class="text-xl md:text-26px lg:text-3xl xl:text-4xl text-white font-bold mb-15px">
                  <span class="leading-1.3">Quer sair do aluguel?</span>
                </h5>
                <p class="text-white leading-1.8">
                  Divida em até 360 x com uma parcela que cabe no seu bolso
                </p>
              </div>
              <div>
                <h5
                  class="capitalize inline-block text-sm md:text-base text-primary-color hover:text-white hover:bg-primary-color relative group whitespace-nowrap font-normal transition-all duration-300 shadow-box-shadow-3 mb-0">
                  <span
                    class="inline-block absolute top-0 right-0 w-full h-full bg-white group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300"></span>
                  <nuxt-link :to="{name: 'contato'}" class="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px">
                    Entre em contato <font-awesome-icon icon="fa-arrow-right"/>
                  </nuxt-link>
                </h5>
              </div>
            </div>
          </div>

          <!-- footer main -->
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-x-30px text-sm lg:text-base text-white">
            <!-- footer about-->
            <div class="xl:col-start-1 xl:col-span-4 mb-60px lg:pr-35px">
              <div class="mb-15px">
                <a href="/">
                  <img src="/logo-2.png" alt="">
                </a>
                <p class="leading-1.8 mb-5 lg:mb-25px text-white">
                  Nós te ajudamos a sair do aluguel
                </p>
              </div>
            </div>
            <!-- footer apartments -->
            <div class="xl:col-start-6 xl:col-span-4 mb-60px">
              <h3 class="text-22px font-bold mb-25px text-white">
                <span class="leading-1.3">Apartamentos</span>
              </h3>
              <ul class="space-y-[15px]">
                <li v-for="apartment in $apartments">
                  <a href="/quarter/about.html"
                     class="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"><span
                    class="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">//</span>
                    {{apartment.name}}</a>
                </li>
              </ul>
            </div>
            <!-- footer talk to us -->
            <div class="xl:col-start-10 xl:col-span-2 mb-60px">
              <h3 class="text-22px font-bold mb-25px text-white">
                <span class="leading-1.3">Quer falar conosco?</span>
              </h3>
              <ul class="space-y-[15px]">
                <li>
                  <nuxt-link :to="{name: 'contato'}" class="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8">
                  <span
                    class="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">//</span>
                    Fale conosco
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- footer copyright -->
      <div class="py-25px px-15px 3xl:px-[2%] 4xl:px-[5%] bg-section-bg-7 text-sm lg:text-base text-white">
        <div class="px-15px">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <p class="leading-1.8 text-center lg:text-start text-white">
                Todos os direitos reservados @ {{ new Date().getFullYear() }}
              </p>
            </div>

            <ul
              class="flex gap-x-25px items-center justify-center lg:justify-end capitalize font-semibold font-poppins text-sm">
              <li>
                <a href="/quarter/index.html#"
                   class="leading-1.8">Termos &amp; Condições</a>
              </li>
              <li>
                <a href="/quarter/index.html#"
                   class="leading-1.8">Politica de privacidade</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer end -->
    <vue-scroll-top></vue-scroll-top>
  </div>
</template>
<script>
import VueScrollTop from '~/components/VueScrollTop.vue'

export default {
  name: 'VueFooter',
  components: { VueScrollTop },
}
</script>
