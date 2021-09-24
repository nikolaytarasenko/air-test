<template>
  <section id="about" class="section section-banner">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="banner-icons">
            <div v-scrollanimation id="right-1" class="banner-icon">
              <img src="../assets/images/toolbox.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="right-2" class="banner-icon">
              <img src="../assets/images/referral.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="right-3" class="banner-icon">
              <img src="../assets/images/finances.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="right-4" class="banner-icon">
              <img src="../assets/images/hack.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="right-5" class="banner-icon">
              <img src="../assets/images/copyright.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="right-6" class="banner-icon">
              <img src="../assets/images/instagram.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="left-1" class="banner-icon">
              <img src="../assets/images/messenger.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="left-2" class="banner-icon">
              <img src="../assets/images/design.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="left-3" class="banner-icon">
              <img src="../assets/images/payments.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="left-4" class="banner-icon">
              <img src="../assets/images/music.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="left-5" class="banner-icon">
              <img src="../assets/images/meetups.svg" alt="Product" />
            </div>
            <div v-scrollanimation id="left-6" class="banner-icon">
              <img src="../assets/images/moderation.svg" alt="Product" />
            </div>
          </div>
          <div class="banner-content">
            <div v-scrollanimation class="banner-title">
              <div class="banner-left-text">PACKAGE</div>
              <div class="not-service not-service-mobile">
                <div class="not-service-icon"></div>
                <div class="not-service-text">Не доступно в AdSense</div>
              </div>
              <span class="linear-wipe"> Basic </span>
              <span class="sup-text"
                ><span class="number"> 100%</span> <span>Must Have</span>
                <span>for YouTubers</span></span>
              <div class="not-service not-service-desktop">
                <div class="not-service-icon"></div>
                <div class="not-service-text">Не доступно в AdSense</div>
              </div>
            </div>
            <div v-scrollanimation class="banner-desc">
              17 базовых продуктов для поддержки, развития и защиты вашего
              творчества на YouTube и за его пределами
            </div>
            <div v-scrollanimation class="banner-desc-sub">
              Доступны сразу после подключения канала к AIR Creators Ecosystem.
            </div>
            <div v-scrollanimation class="banner-button">
              <a
                data-toggle="modal"
                data-target="#contact-form-modal"
                class="basic-button basic-button-big basic-button-blue"
              >
                Попробовать
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
  .before-enter {
    transition: all 2s ease-out;
  }

  .enter {
    animation: title 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 2.4s;
  }

  .banner-title.enter {
    animation-delay: 1s;
  }

  .banner-desc.enter {
    animation-delay: 1.5s;
  }

  .banner-desc-sub.enter {
    animation-delay: 2s;
  }

  .banner-button.enter {
    animation-delay: 2.5s;
  }

  #left-1.enter {
    animation: decorLeft 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3s;
  }

  #left-3.enter {
    animation: decorLeft 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3.2s;
  }

  #left-5.enter {
    animation: decorLeft 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3.4s;
  }

  #left-2.enter {
    animation: decorLeft 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3.6s;
  }

  #left-4.enter {
    animation: decorLeft 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3.8s;
  }

  #left-6.enter {
    animation: decorLeft 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 4s;
  }

  #right-1.enter {
    animation: decorRight 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3s;
  }

  #right-3.enter {
    animation: decorRight 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3.2s;
  }

  #right-5.enter {
    animation: decorRight 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3.4s;
  }

  #right-2.enter {
    animation: decorRight 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3.6s;
  }

  #right-4.enter {
    animation: decorRight 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 3.8s;
  }

  #right-6.enter {
    animation: decorRight 1.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 4s;
  }

  @keyframes title {
    0% {
        transform: translateY(40px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
  }

  @keyframes decorLeft {
    0% {
        transform: translateX(-300px);
        opacity: 0;
    }

    100% {
        transform: translateX(40px);
        opacity: 1;
    }
  }

  @keyframes decorRight {
    0% {
        opacity: 0;
        transform: translateX(2220px);
    }

    100% {
        opacity: 1;
        transform: auto;
    }
  }
</style>