<template>
  <validation-provider
    rules="required|date_format:dd/MM/yyyy"
    tag="div"
    v-slot="{ errors, classes }"
    ref="date"
    style="width: 50%"
  >
    <div
      class="prefix-form-control prefix-form-control--input"
      :class="classes"
    >
      <label>
        <input
          class="prefix-form-control__field"
          type="text"
          placeholder="ДД.ММ.ГГГГ"
          v-mask="'##.##.####'"
          v-model.trim="value"
          ref="input"
        />
        <span class="prefix-form-control__label">Дата рождения</span>
      </label>
      <span class="prefix-form-control__error" v-if="errors[0]">
        <span class="prefix-form-control__error-text">{{ errors[0] }}</span>
        <span
          class="prefix-form-control__error-clear"
          @click="clearInput"
        ></span>
      </span>
    </div>
  </validation-provider>
</template>

<script>
  import {configure, extend, ValidationProvider} from "vee-validate";
  import date_format, {required} from "vee-validate/dist/rules";

  extend("required", {
  ...required,
  message: "Введите фамилию, имя и отчество через пробел",
});

extend("date_format", {
  ...date_format,
  message: "Укажите корректную дату рождения",
});

configure({
  classes: {
    invalid: "_error",
    changed: "_filled",
    passed: "_valid",
  },
});

export default {
  name: "DateField",
  components: { ValidationProvider },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    clearInput() {
      this.value = "";
      this.$refs.date.reset();
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="scss"></style>
