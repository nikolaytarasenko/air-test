<template>
  <section id="staff" class="section section-staff">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="staff-content">
            <div v-scrollanimation class="s-title staff-title">
              Отложите беспокойство о мелочах. <br />
              Сфокусируйтесь на создании контента, пока профессионалы заботятся
              о вашем канале
            </div>
            <div v-scrollanimation class="s-description staff-description">
              Доверьте нашей команде решение своих базовых задач на YouTube
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="anime-item anime-item-1"></div>
    <div class="anime-item anime-item-2"></div>
    <div class="anime-item anime-item-3"></div>
    <div class="anime-item anime-item-4"></div>
  </section>
</template>

<script>
export default {};
</script>

<style>
  .before-enter {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.4s ease-out 0.5s;
  }

  .staff-description.before-enter {
    transition: all 0.4s ease-out 1s;
  }

  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
</style>