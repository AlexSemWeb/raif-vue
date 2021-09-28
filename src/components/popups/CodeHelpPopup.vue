<template>
  <div class="prefix-form-popup--wrapper">
    <div class="prefix-form-popup__header">
      <svg class="sym-info">
        <use
          xlink:href="@/assets/svg/svg-symbols/svg-symbols.svg#sym-info"
        ></use></svg
      >Не приходит код?
    </div>
    <div class="prefix-form-popup__container">
      <div class="prefix-form-popup__content prefix-text">
        <ol>
          <li>
            Может быть в&nbsp;указанный выше номер затесалась ошибка? Проверьте,
            пожалуйста, его еще раз.
          </li>
          <li>
            Проблемы могут быть со&nbsp;стороны вашего сотового оператора.
            Обратитесь в&nbsp;их&nbsp;службу поддержки.
          </li>
        </ol>
        <p>
          Если вы&nbsp;все проверили, но&nbsp;код подтверждения по-прежнему
          не&nbsp;приходит&nbsp;&mdash; позвоните нам по&nbsp;бесплатному номеру
          <b><a href="tel:88007005626">8&nbsp;800 700-56-26</a></b>
          и&nbsp;мы&nbsp;вам поможем.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeHelpPopup",
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style lang="scss"></style>
