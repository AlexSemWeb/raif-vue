<template>
  <div
    class="prefix-form-popup"
    :class="{ 'prefix-form-popup--wide': typeOfPopup === 'policy' }"
  >
    <div class="prefix-form-popup-inner">
      <div class="prefix-form-popup__close" @click="closePopup">
        <svg>
          <use
            xlink:href="@/assets/svg/svg-symbols/svg-symbols.svg#sym-cross"
          ></use>
        </svg>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupLayout",
  props: {
    typeOfPopup: {
      type: String,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style lang="scss"></style>
