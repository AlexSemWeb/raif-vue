<template>
  <div
    class="prefix-form-control prefix-form-control--input"
    :class="{
      _filled: value,
      _error: isNotComplete || (correctValue === false && isTyping),
      _valid: correctValue,
    }"
  >
    <label v-on:focusout="focusOutInput">
      <the-mask
        :mask="[mask]"
        :name="name"
        type="text"
        v-model.trim="value"
        class="prefix-form-control__field"
        :ref="name"
        @input="typingInInput"
      />
      <span class="prefix-form-control__label">Код подтверждения</span>
    </label>
    <span class="prefix-form-control__error">
      <span class="prefix-form-control__error-text" v-if="value.length === 0">
        Введите код подтверждения
      </span>
      <span class="prefix-form-control__error-text" v-else>
        Укажите корректный код из SMS
      </span>
      <span class="prefix-form-control__error-clear" @click="clearInput"></span>
    </span>
  </div>
</template>

<script>
    import {TheMask} from "vue-the-mask";
    import inputWork from "@/mixins/inputWork";

    export default {
  name: "VerificationCode",
  mixins: [inputWork],
  components: { TheMask },
  data() {
    return {
      value: "",
      isTyping: false,
      mask: "####",
      length: 4,
      name: "verificationCode",
      error: false,
      correctValue: null,
    };
  },
  mounted() {
    this.$refs[this.name].$el.focus();
  },
  watch: {
    isTyping() {
      this.correctValue = null;
    },
  },
  methods: {
    typingInInput() {
      this.isTyping = false;
      if (this.isComplete) {
        this.sendCode();
      }
    },
    sendCode() {
      let expectedValue = "1111";
      if (this.value === expectedValue) {
        this.correctValue = true;
        this.$emit("nextStep");
        return;
      }
      this.error = !this.error;
      this.$nextTick(function () {
        this.correctValue = false;
      });
    },
  },
};
</script>

<style lang="scss"></style>
