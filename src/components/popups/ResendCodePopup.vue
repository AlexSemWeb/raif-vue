<template>
  <div class="prefix-form-popup--wrapper">
    <div class="prefix-form-popup__header">
      <svg class="sym-info">
        <use
          xlink:href="@/assets/svg/svg-symbols/svg-symbols.svg#sym-info"
        ></use></svg
      >Отправить код повторно
    </div>
    <div class="prefix-form-popup__content">
      <div class="prefix-form-popup__container prefix-text">
        <p>Новый код отправлен</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResendCodePopup",
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style lang="scss"></style>
