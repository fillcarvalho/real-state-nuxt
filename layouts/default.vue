<template>
  <div>
    <!-- header area start --><header>
      <!-- navbar main -->
      <div class="sticky-header z-xl bg-white transition-all duration-700">
        <div
          class="container flex flex-col md:flex-row justify-center md:justify-between items-center relative py-21px">
          <!-- logo area -->
          <div class="mt-10px mb-22px md:mt-0 md:mb-0 leading-1">
            <a href="/">
              <img src="/logo.png" alt="">
            </a>
          </div>
          <nav class="flex-grow hidden xl:block">
            <ul class="flex items-center justify-center gap-15px xl:gap-5">
              <!-- item 1 -->
              <li class="relative group">
                <a href="/"
                   class="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px">Início
                </a>
              </li>
              <!-- item 2 -->
              <li class="relative group">
                <a href="/quarter/index.html#"
                   class="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px">Apartamentos
                  <span class="text-sm font-extrabold -ml-0.5">+</span></a>
                <!-- dropdown -->
                <ul
                  class="py-15px border-t-[5px] border-secondary-color bg-white w-dropdown shadow-box-shadow-4 absolute left-0 top-full opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-xl">

                  <li v-for="apartment in $apartments">
                    <nuxt-link :to="{name: 'apartamento-slug', params: {slug: apartment.slug}}" class="whitespace-nowrap px-30px py-2">
                      {{apartment.name}}
                    </nuxt-link>
                  </li>

                </ul>
              </li>
              <!-- item 6 -->
              <li>
                <a href="/quarter/contact.html"
                   class="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px">Contato
                </a>
              </li>
            </ul>
          </nav>
          <!-- header right -->
          <div>
            <ul class="flex items-center gap-10px">
              <li class="relative search-form-container">
                <button
                  class="search-toggle h-50px w-50px text-heading-color shadow-box-shadow-1 flex justify-center items-center hover:bg-secondary-color hover:text-white transition-all duration-300">
                  <i class="icon-search for-search-show font-bold"></i>
                  <i class="icon-cancel for-search-close font-bold hidden"></i>
                </button>
                <div
                  class="search-form h-0 overflow-hidden absolute right-0 top-full mt-15px transition-all duration-300 shadow-box-shadow-3 z-xl bg-white">
                  <form class="w-80 p-15px relative">
                    <input type="text" placeholder="Pesquisa"
                           class="text-sm text-paragraph-color pl-5 pr-50px placeholder:text-paragraph-color outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-60px block w-full rounded-none">
                    <button type="submit" class="absolute top-1/2 -translate-y-1/2 right-7 text-heading-color">
                      <i class="icon-search text-lg font-bold"></i>
                    </button>
                  </form>
                </div>
              </li>
              <li class="block xl:hidden">
                <div
                  class="show-drawer d-xl-none h-50px w-50px text-heading-color shadow-box-shadow-1 flex justify-center items-center transition-all duration-300 relative">
                  <a
                    href="#"
                    class="utilize-toggle">
                    <svg viewBox="0 0 800 600">
                      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                            id="top"></path>
                      <path d="M300,320 L540,320" id="middle"></path>
                      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                            id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <div class="drawer-container mobile-menu-container">
        <div
          class="drawer-overlay fixed top-0 left-0 w-full h-full bg-black -z-1 close-drawer opacity-0 transition-all duration-300 invisible cursor-zoom-out block xl:hidden"></div>
        <div
          class="drawer mobile-menu fixed top-0 -left-[300px] xs:-left-[400px] px-5 xs:px-10 py-50px w-300px xs:w-100 h-full transition-all duration-500 shadow-dropdown-secodary bg-whiteColor z-high block xl:hidden bg-white">
          <div class="pr-15px overflow-auto h-full">
            <!-- mobile menu wrapper -->
            <div>
              <!-- mobile logo area -->
              <div class="flex justify-between items-center border-b border-border-primary pt-3px pb-10px mb-25px">
                <div>
                  <a href="/">
                    <img src="/logo.png" alt="">
                  </a>
                </div>
                <div>
                  <button class="close-drawer text-black text-3xl px-15px py-2">
                    ×
                  </button>
                </div>
              </div>

              <!-- search input  -->
              <div class="mb-50px">
                <form class="w-full relative">
                  <input type="text" placeholder="Search..."
                         class="text-sm text-paragraph-color pl-5 pr-50px placeholder:text-paragraph-color outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none">
                  <button type="submit" class="absolute top-1/2 -translate-y-1/2 right-7 text-heading-color">
                    <i class="icon-search text-lg font-bold"></i>
                  </button>
                </form>
              </div>

              <!-- mobile menu accordions -->
              <div class="border-b border-border-primary dark:border-borderColor-dark pb-8">
                <ul class="accordion-container">
                  <li class="accordion mt-4">
                    <!-- accordion header -->
                    <div
                      class="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5">
                      Início
                      <button class="px-3 h-full">
                        <span class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75"></span><span
                        class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75 rotate-90 -mt-[2px] transition-all duration-500"></span>
                      </button>
                    </div>
                    <!-- accordion content -->
                    <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                      <div class="content-wrapper pl-15px">
                        <ul>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/index.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Início
                              Style 0aaa aas1</a>
                          </li>
                          <li class="accordion mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/index-2.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Início
                              Style 02</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/index-3.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Home
                              Style 03</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/index-4.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Home
                              Style 04</a>
                          </li>
                          <li class="mt-4 relative">
                            <!-- accordion header -->

                            <a href="/quarter/index-5.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color"><span
                              class="text-10px uppercase text-white bg-secondary-color px-3px absolute -left-2 -top-3 rounded-sm">video</span>
                              Home Style 05</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/index-6.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Home
                              Style 06</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/index-7.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Home
                              Style 07</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/index-8.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Home
                              Style 08</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/index-9.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Home
                              Style 09</a>
                          </li>
                          <li class="mt-4 relative">
                            <!-- accordion header -->

                            <a href="/quarter/index-10.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color"><span
                              class="text-10px uppercase text-white bg-secondary-color px-3px absolute -left-2 -top-3 rounded-sm">map</span>
                              Home Style 10</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/index-11.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Home
                              Style 11</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="accordion mt-4">
                    <!-- accordion header -->
                    <div
                      class="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5">
                      About
                      <button class="px-3 h-full">
                        <span class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75"></span><span
                        class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75 rotate-90 -mt-[2px] transition-all duration-500"></span>
                      </button>
                    </div>
                    <!-- accordion content -->
                    <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                      <div class="content-wrapper pl-15px">
                        <ul>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/about.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">About1</a>
                          </li>
                          <li class="accordion mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/service.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Services</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/service-details.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Service
                              Details</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/portfolio.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Portfolio</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/portfolio-2.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">
                              Portfolio - 02</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/portfolio-details.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Portfolio
                              Details</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/team.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Team</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/team-details.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Team
                              Details</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/faq.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">FAQ</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/locations.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Google
                              Map Locations</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="accordion mt-4">
                    <!-- accordion header -->
                    <div
                      class="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5">
                      Property
                      <button class="px-3 h-full">
                        <span class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75"></span><span
                        class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75 rotate-90 -mt-[2px] transition-all duration-500"></span>
                      </button>
                    </div>
                    <!-- accordion content -->
                    <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                      <div class="content-wrapper pl-15px">
                        <ul>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/shop.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Property
                              Grid</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/shop-list.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Property
                              List</a>
                          </li>
                          <li class="accordion mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/shop-grid.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Property
                              No Sidebar</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/shop-left-sidebar.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Property
                              Left sidebar</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/shop-right-sidebar.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Property
                              right sidebar</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/product-details.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">
                              Property details
                            </a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/cart.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Cart</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/wishlist.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Wishlist</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/checkout.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Checkout</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/order-tracking.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Order
                              Tracking</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/account.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">My
                              Account</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/login.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Sign
                              in</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/register.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Register</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="accordion mt-4">
                    <!-- accordion header -->
                    <div
                      class="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5">
                      News
                      <button class="px-3 h-full">
                        <span class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75"></span><span
                        class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75 rotate-90 -mt-[2px] transition-all duration-500"></span>
                      </button>
                    </div>
                    <!-- accordion content -->
                    <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                      <div class="content-wrapper pl-15px">
                        <ul>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/blog.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">News</a>
                          </li>
                          <li class="accordion mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/blog-grid.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">News
                              Grid</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/blog-left-sidebar.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">News
                              Left sidebar</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/blog-right-sidebar.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">News
                              Right sidebar</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/blog-details.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">
                              News details</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="accordion mt-4">
                    <!-- accordion header -->
                    <div
                      class="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5">
                      Pages
                      <button class="px-3 h-full">
                        <span class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75"></span><span
                        class="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75 rotate-90 -mt-[2px] transition-all duration-500"></span>
                      </button>
                    </div>
                    <!-- accordion content -->
                    <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                      <div class="content-wrapper pl-15px">
                        <ul>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/about.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">About</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/service.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Services</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/service-details.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Service
                              Details</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/portfolio.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Portfolio</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/portfolio-2.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">
                              Portfolio - 02</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/portfolio-details.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Portfolio
                              Details</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/team.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Team</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/team-details.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Team
                              Details</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/faq.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">FAQ</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/history.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">History</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/add-listing.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Add
                              Listing</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/locations.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Google
                              Map Locations</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/404.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">404</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a href="/quarter/contact.html"
                               class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Contact</a>
                          </li>
                          <li class="mt-4">
                            <!-- accordion header -->

                            <a
                              href="/quarter/coming-soon.html"
                              class="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color">Coming
                              Soon</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="mt-4">
                    <!-- accordion header -->
                    <a href="/quarter/contact.html"
                       class="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5">
                      CONTACT</a>
                  </li>
                </ul>
              </div>

              <!-- my account -->
              <div>
                <ul class="mb-30px pb-5 pt-5px border-b border-border-primary">
                  <li class="group mt-4">
                    <!-- accordion header -->
                    <a href="/quarter/account.html"
                       class="text-sm lg:text-base">
                      <span
                        class="inline-block h-50px w-50px border-2 border-border-color-1 text-center leading-50px mr-3">
                        <i class="far fa-user"></i>
                      </span>
                      My Account
                    </a>
                  </li>
                  <li class="group mt-4">
                    <!-- accordion header -->
                    <a href="/quarter/wishlist.html#"
                       class="text-sm lg:text-base">
                      <span
                        class="inline-block h-50px w-50px border-2 border-border-color-1 text-center leading-50px mr-3">
                        <i class="far fa-heart"></i><sup class="pl-0.5">3</sup>
                      </span>
                      Wishlist
                    </a>
                  </li>
                  <li class="group mt-4">
                    <!-- accordion header -->
                    <a href="/quarter/cart.html"
                       class="text-sm lg:text-base">
                      <span
                        class="inline-block h-50px w-50px border-2 border-border-color-1 text-center leading-50px mr-3">
                        <font-awesome-icon icon="fas fa-shopping-cart" class="leading-1 -rotate-[45deg] inline-block"/>
                        <sup>5</sup>
                      </span>
                      Shoping Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header area start -->
    <!-- main body start -->
    <main>
      <Nuxt/>
      <vue-blog-list></vue-blog-list>
    </main>
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
                  <span class="leading-1.3">Quer sair do aluguél?</span>
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
                  <a href="/quarter/contact.html"
                     class="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px">Entre em contato <i class="icon-next"></i></a>
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
                  Nós te ajudamos a sair do aluguél
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
                  <a href="/quarter/login.html"
                     class="hover:text-secondary-color -translate-x-5 hover:translate-x-0 group leading-1.8"><span
                    class="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">//</span>
                    Fale conosco</a>
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

    <!-- scroll top -->
    <button
      class="scroll-up w-30px h-30px lg:w-10 lg:h-10 lg:text-xl bg-section-bg-1 text-heading-color hover:bg-secondary-color hover:text-white rotate-[45deg] shadow-box-shadow-3 fixed bottom-[50px] lg:bottom-[70px] right-[3%] flex justify-center items-center z-xl active">
      <font-awesome-icon icon="fa fa-angle-up" class="leading-1 -rotate-[45deg] inline-block"/>
    </button>
  </div>
</template>
<script setup lang="ts">
</script>
