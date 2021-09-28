<template>
  <validation-provider
    :rules="{
      required: true,
      regex:
        /^[А-ЯЁ][а-яё]{2,}([-][А-ЯЁ][а-яё]{2,})?\s[А-ЯЁ][а-яё]{2,}\s[А-ЯЁ][а-яё]{2,}$/,
    }"
    events="'blur'"
    mode="lazy"
    v-slot="{ errors, classes }"
    tag="div"
    style="width: 100%"
    ref="name"
  >
    <div
      class="prefix-form-control prefix-form-control--input"
      :class="classes"
    >
      <label>
        <textarea
          class="prefix-form-control__field"
          type="text"
          name="name"
          :value="value | textCapitalize"
          @input="inputType"
          ref="input"
          style="text-transform: capitalize"
        ></textarea>
        <span class="prefix-form-control__label">Фамилия, имя и отчество</span>
      </label>
      <span class="prefix-form-control__info"
        >Например: Смирнов Андрей Иванович</span
      >
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
  import {regex, required} from "vee-validate/dist/rules";

  extend("required", {
  ...required,
  message: "Введите фамилию, имя и отчество через пробел",
});

extend("regex", {
  ...regex,
  message: "Введите фамилию, имя и отчество русскими буквами через пробел",
});

configure({
  classes: {
    invalid: "_error",
    changed: "_filled",
    passed: "_valid",
  },
});

export default {
  name: "NameField",
  components: {
    ValidationProvider,
  },
  data: () => ({
    value: "",
  }),
  methods: {
    inputType(value) {
      this.$refs.name.reset();
      this.value = value.target.value;
    },
    clearInput() {
      this.value = "";
      this.$refs.name.reset();
      this.$refs.input.focus();
    },
  },
  filters: {
    textCapitalize: function (value) {
      if (!value) return "";
      value = value
        .trimLeft()
        .replace(/\s+/g, " ")
        .replace(/-+/g, "-")
        .split(" ");
      let newValue = value.map((item, index) => {
        if (index === 3) {
          return;
        }
        if (item.match(/[a-яё]-[a-яё]/g)) {
          item = item.split("-");
          let valueWithDash = item.map(
            (value) => value.charAt(0).toUpperCase() + value.slice(1)
          );
          return valueWithDash.join("-");
        }
        return item.charAt(0).toUpperCase() + item.slice(1);
      });
      return newValue.slice(0, 3).join(" ");
    },
  },
};
</script>

<style lang="scss"></style>
