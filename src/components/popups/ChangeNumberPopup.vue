<template>
  <div class="prefix-form-popup--wrapper">
    <div class="prefix-form-popup__header">Введите новый номер телефона</div>
    <div class="prefix-form-popup__container">
      <div class="prefix-form-popup__content">
        <NumberField
          :error="error"
          @nextStepAvailable="ButtonAvailable"
          @clearInput="clearInput"
        >
        </NumberField>
      </div>
    </div>
    <div class="prefix-form-popup__footer">
      <a class="prefix-form-button prefix-form-button--link" @click="closePopup"
        >Отменить</a
      >
      <button class="prefix-form-button" type="button" @click="nextEvent">
        Изменить
      </button>
    </div>
  </div>
</template>

<script>
  import NumberField from "@/components/inputs/NumberField";
  import phoneCheck from "@/mixins/phoneCheck";

  export default {
  name: "ChangeNumberPopup",
  mixins: [phoneCheck],
  components: {
    NumberField,
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style lang="scss"></style>
