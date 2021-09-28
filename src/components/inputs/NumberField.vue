<template>
  <div
    class="
      prefix-form-control
      prefix-form-control--input
      prefix-form-control--half
      prefix-form-control--center
    "
    :class="{ _filled: value, _error: isNotComplete, _valid: isComplete }"
  >
    <label v-on:focusout="focusOutInput">
      <the-mask
        :mask="[mask]"
        :name="name"
        placeholder="+7 (923) 111-11-11"
        type="tel"
        :masked="true"
        :value="phoneNumber"
        v-model.trim="value"
        class="prefix-form-control__field"
        :ref="name"
        @input="typingInInput"
      />
      <span class="prefix-form-control__label"> Мобильный телефон </span>
    </label>
    <span class="prefix-form-control__error">
      <span class="prefix-form-control__error-text">
        Введите полный номер телефона
      </span>
      <span class="prefix-form-control__error-clear" @click="clearInput"></span>
    </span>
  </div>
</template>

<script>
    import {TheMask} from "vue-the-mask";
    import inputWork from "@/mixins/inputWork";

    export default {
  name: "NumberField",
  mixins: [inputWork],
  props: {
    error: {
      type: Boolean,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
      default: "",
    },
  },
  components: { TheMask },
  data() {
    return {
      value: this.phoneNumber,
      isTyping: false,
      length: 18,
      name: "mobilePhone",
      mask: "+7 (###) ###-##-##",
    };
  },
};
</script>

<style lang="scss"></style>
