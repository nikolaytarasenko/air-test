<template>
  <nav class="navbar navbar-fixed-top global-header" :class="{ scrolled: isScrolled && isScrollDown }" id="global-header">
    <div class="container">
      <div class="row">
        <div>
          <div class="navbar-header">
            <button
              @click="isMobileGlobalMenuOpen = !isMobileGlobalMenuOpen"
              type="button"
              data-target="#global-menu"
              id="global-menu-toggler"
              aria-label="global-menu-toggler"
              class="navbar-toggle global-menu-toggle"
              :class="{ opened: isMobileGlobalMenuOpen }"
            >
              <span class="icon-bar"></span> <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <button
              @click="isMobileProductMenuOpen = !isMobileProductMenuOpen"
              id="products-menu-toggler"
              type="button"
              data-target="#products-menu"
              aria-label="products-menu"
              class="navbar-toggle products-menu-toggle"
            ></button>
            <a
              href="https://my.air.io/#/account/login"
              class="global-menu-link enter-link"
              >Sign In
            </a>
            <div @click="isOpen = !isOpen" class="dropdown dropdown-lang" :class="{ open: isOpen }">
              <button
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="btn btn-secondary dropdown-toggle"
              >
                ru
              </button>
              <div aria-labelledby="dropdownMenuButton" class="dropdown-menu">
                <li class="hide">
                  <a href="https://air.io/ce/basic" class="dropdown-item"
                    >Ru
                  </a>
                </li>
                <li></li>
                <li>
                  <a href="https://air.io/en/ce/basic" class="dropdown-item"
                    >En
                  </a>
                </li>
                <li>
                  <a href="https://air.io/es/ce/basic" class="dropdown-item"
                    >Es
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div id="global-menu" class="navbar-collapse global-menu" :class="{ in : isMobileGlobalMenuOpen }">
            <ul class="nav navbar-nav">
              <li class="global-menu-item">
                <a href="https://air.io" class="global-menu-link"> air.io </a>
              </li>
              <li class="global-menu-item active" @mouseover="hover = true" @mouseleave="hover = false">
                <a href="https://air.io/ce" class="global-menu-link">
                  creators ecosystem
                </a>
              </li>
              <li class="global-menu-item">
                <a href="https://brands.air.io/ru" class="global-menu-link">
                  brands
                </a>
              </li>
              <li class="global-menu-item">
                <a href="https://air.io/blog" class="global-menu-link">
                  blog
                </a>
              </li>
            </ul>
          </div>
          <div
            @mouseover="hover = true" 
            @mouseleave="hover = false" 
            id="products-menu" 
            class="navbar-collapse products-menu" 
            :class="{ in: hover || isMobileProductMenuOpen }"
          >
            <div class="products-menu-bg">
              <div class="products-menu-row top-row">
                <a
                  href="https://my.air.io/#/account/login"
                  rel="noopener noreferrer"
                  class="sign-in-link"
                >
                  Sign in to AIR CE
                </a>
                <p class="creators-ecosystem-text">Creators Ecosystem</p>
                <a
                  href="https://my.air.io/#/account/registration"
                  class="btn btn-square btn-outline black btn-join"
                  >Хочу в AIR</a
                >
              </div>
              <div class="products-menu-row">
                <div class="col col-l">
                  <p class="menu-title">Packages</p>
                  <ul>
                    <li>
                      <a
                        href="https://air.io/ce/basic"
                        class="products-menu-link"
                        >Basic Package</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://air.io/ce/grow-faster"
                        class="products-menu-link"
                        >Grow Faster</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://air.io/ce/earn-more"
                        class="products-menu-link"
                        >Earn More</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="col col-c">
                  <p class="menu-title">Channel Types</p>
                  <ul>
                    <li>
                      <a
                        href="https://air.io/en/ce/kids-and-teens"
                        class="products-menu-link"
                        >For Kids &amp; Teens Channels</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://air.io/en/ce/gaming"
                        class="products-menu-link"
                        >For Gaming Channels</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://air.io/en/ce/for-music-channels"
                        class="products-menu-link"
                        >For Music Channels</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="col col-r">
                  <p class="menu-title">Community</p>
                  <ul>
                    <li>
                      <a href="https://im.air.io/" class="products-menu-link"
                        >AIR Influencer MeetUps</a
                      >
                    </li>
                    <!---->
                    <!---->
                    <li>
                      <a href="https://air.io/blog" class="products-menu-link"
                        >AIR Blog</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="col"></div>
              </div>
              <div class="products-menu-row products-items">
                <p class="menu-title">Products</p>
                <ul>
                  <li>
                    <a
                      href="https://air.io/ce/support"
                      class="products-menu-link"
                      >AIR Support</a
                    >
                  </li>
                  <li>
                    <a href="https://air.io/ce/ads" class="products-menu-link"
                      >AIR Ads</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://air.io/ce/distribution"
                      class="products-menu-link"
                      >AIR Distribution</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://translate.air.io"
                      class="products-menu-link"
                      >Translation &amp; Investment</a
                    >
                  </li>
                  <li>
                    <a href="https://air.io/ce/pay" class="products-menu-link"
                      >AIR Pay</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const hover = ref(false);
        const isOpen = ref(false);
        const isScrolled = ref(false);
        const scrollPosition = ref(0);
        const isScrollDown = ref(false);
        const isMobileProductMenuOpen = ref(false);
        const isMobileGlobalMenuOpen = ref(false);

        onMounted(() => {
            window.addEventListener('scroll', () => {
                const scrollTop = document.documentElement.scrollTop;

                scrollTop > 0 ?
                    isScrolled.value = true : 
                    isScrolled.value = false;

                if (scrollTop > scrollPosition.value){
                    isScrollDown.value = true;
                } else {
                    isScrollDown.value = false;
                }

                scrollPosition.value = scrollTop;
            });
        });

        return {
            hover,
            isOpen,
            isScrolled,
            isScrollDown,
            isMobileProductMenuOpen,
            isMobileGlobalMenuOpen
        }
    }
}
</script>

<style>
</style>