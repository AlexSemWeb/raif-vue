<template>
  <div class="prefix-step __active">
    <div class="prefix-form-container">
      <div class="prefix-form-group">
        <NameField></NameField>

        <div
          class="prefix-form-control prefix-form-control--radio-inline hidden"
        >
          <div class="prefix-form-group__label">Пол</div>
          <label>
            <input
              class="prefix-form-control__field"
              type="radio"
              name="gender"
              value="M"
              checked
            />
            <span class="prefix-form-control__label">Мужской</span>
          </label>
          <label>
            <input
              class="prefix-form-control__field"
              type="radio"
              name="gender"
              value="F"
            />
            <span class="prefix-form-control__label">Женский</span>
          </label>
        </div>
        <DateField></DateField>
        <div
          class="
            prefix-form-control
            prefix-form-control--half
            prefix-form-control--input
          "
          data-position
        >
          <label>
            <input
              class="prefix-form-control__field"
              type="email"
              name="email"
              placeholder="email@domain.ru"
            />
            <span class="prefix-form-control__label">Электронная почта</span>
          </label>
        </div>
        <div
          class="prefix-form-control prefix-form-control--checkbox"
          data-position
        >
          <label>
            <input
              class="prefix-form-control__field"
              type="checkbox"
              name="citizenship"
              checked
            />
            <span class="prefix-form-control__label"
              >Я имею гражданство РФ</span
            >
          </label>
        </div>
      </div>
      <div class="prefix-form-footer">
        <div class="prefix-form-footer__left">
          <a class="prefix-form-button prefix-form-button--arrow-left"
            ><svg class="sym-arrow">
              <use
                xlink:href="@/assets/svg/svg-symbols/svg-symbols.svg#sym-arrow"
              ></use></svg
            >Назад</a
          >
        </div>
        <div class="prefix-form-footer__right">
          <button
            class="prefix-form-button prefix-form-button--arrow-right"
            type="button"
          >
            Далее<svg class="sym-arrow">
              <use
                xlink:href="@/assets/svg/svg-symbols/svg-symbols.svg#sym-arrow"
              ></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- /.prefix-form-container -->
  </div>
</template>

<script>
  import NameField from "@/components/inputs/NameField";
  import DateField from "@/components/inputs/DateField";

  export default {
  name: "StepThree",
  components: {
    NameField,
    DateField,
  },
};
</script>

<style lang="scss"></style>
