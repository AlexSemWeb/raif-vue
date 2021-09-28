<template>
  <div id="app">
    <!-- FORM -->
    <transition name="fade" mode="out-in">
      <div
        class="prefix-form-wrap prefix-js-form-wrap"
        :key="isLoaded"
        v-if="isLoaded"
      >
        <form class="prefix-form prefix-js-form" novalidate>
          <div class="prefix-form-inner">
            <div class="prefix-form-content prefix-js-form-content">
              <StepsLayout></StepsLayout>
            </div>
          </div>
        </form>
      </div>
      <div id="prefix-form" data-props='{"id":"CS0200-CB88"}' v-else></div>
    </transition>

    <!-- /.prefix-form -->
  </div>
</template>

<script>
  import StepsLayout from "@/views/Index";

  export default {
  name: "App",
  components: { StepsLayout },
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    this.isLoaded = true;
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  div,
  span {
    pointer-events: none;
  }
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  div,
  span {
    pointer-events: none;
  }
}
.popup-show-enter-active,
.popup-show-leave-active {
  transition: all 0.3s;
  div,
  span {
    pointer-events: none;
  }
}
.popup-show-enter, .popup-show-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  @media (max-width: 767px) {
    opacity: 1;
    background-color: rgba(43, 45, 51, 0);
  }
  div,
  span {
    pointer-events: none;
  }
  .prefix-form-popup {
    &-inner {
      @media (max-width: 767px) {
        transform: translateY(100%);
      }
    }
  }
}
</style>
