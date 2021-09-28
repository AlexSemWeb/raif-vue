<template>
  <div class="prefix-step __active">
    <div class="prefix-form-container">
      <div class="prefix-form-group">
        <NumberField
          :error="error"
          :phoneNumber="phoneNumber"
          @nextStepAvailable="ButtonAvailable"
          @clearInput="clearInput"
        >
          <template v-slot:label> Мобильный телефон </template>
          <template v-slot:error> Введите полный номер телефона </template>
        </NumberField>
      </div>
      <div class="prefix-form-footer">
        <div class="prefix-form-footer__left">
          <div class="prefix-form-agree">
            Нажимая кнопку &laquo;Далее&raquo;, я&nbsp;соглашаюсь с&nbsp;
            <a href="" @click.prevent="openPopup('policy')"
              >условиями подачи онлайн-заявки</a
            >
          </div>
        </div>
        <div class="prefix-form-footer__right">
          <button
            class="
              prefix-form-button prefix-form-button--arrow-right
              prefix-js-step-next
            "
            type="button"
            @click="nextEvent"
          >
            Далее
            <svg class="sym-arrow">
              <use
                xlink:href="@/assets/svg/svg-symbols/svg-symbols.svg#sym-arrow"
              ></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <transition name="popup-show" mode="out-in">
      <PopupLayout
        v-if="isPopupOpen"
        @closePopup="closePopup"
        :typeOfPopup="typeOfPopup"
      >
        <PrivacyPopup></PrivacyPopup>
      </PopupLayout>
    </transition>
  </div>
</template>

<script>
  import PopupLayout from "@/components/popups/PopupLayout";
  import PrivacyPopup from "@/components/popups/PrivacyPopup";
  import NumberField from "@/components/inputs/NumberField";
  import popupWork from "@/mixins/popupWork";
  import phoneCheck from "@/mixins/phoneCheck";

  export default {
  name: "StepOne",
  components: { NumberField, PopupLayout, PrivacyPopup },
  mixins: [popupWork, phoneCheck],
};
</script>

<style lang="scss"></style>
