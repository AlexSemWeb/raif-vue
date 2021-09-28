<template>
  <div class="prefix-step __active">
    <div class="prefix-form-container">
      <div class="prefix-form-sms">
        <div class="prefix-form-group__label">
          Код подтверждения отправлен вам на номер:
        </div>
        <div class="prefix-form-sms__phone">
          <span class="prefix-form-sms__phone-number">{{ phoneNumber }}</span>
          <a
            class="prefix-form-sms__phone-btn"
            @click.prevent="openPopup('number')"
          >
            Изменить
          </a>
        </div>
        <VerificationCode
          @nextStep="nextStep"
          ref="verificationCode"
        ></VerificationCode>
        <div class="prefix-form-sms__actions">
          <a
            class="prefix-form-sms__phone-btn"
            @click.prevent="openPopup('resendCode')"
            >Отправить код повторно</a
          >
          <a
            class="prefix-form-sms__phone-btn"
            @click.prevent="openPopup('helpCode')"
            >Не приходит код?</a
          >
        </div>
      </div>
      <div class="prefix-form-footer">
        <div class="prefix-form-footer__left">
          <a
            class="prefix-form-button prefix-form-button--arrow-left"
            @click.prevent="stepBack"
          >
            <svg class="sym-arrow">
              <use
                xlink:href="@/assets/svg/svg-symbols/svg-symbols.svg#sym-arrow"
              ></use>
            </svg>
            Назад</a
          >
        </div>
      </div>
    </div>
    <transition name="popup-show" mode="out-in">
      <PopupLayout
        v-if="isPopupOpen"
        @closePopup="closePopup"
        :typeOfPopup="typeOfPopup"
      >
        <ChangeNumberPopup
          v-if="typeOfPopup === 'number'"
          @closePopup="closePopup"
          @nextEvent="changeNumber"
          :phoneNumber="phoneNumber"
        ></ChangeNumberPopup>
        <ResendCodePopup
          v-if="typeOfPopup === 'resendCode'"
          @closePopup="closePopup"
        ></ResendCodePopup>
        <CodeHelpPopup
          v-if="typeOfPopup === 'helpCode'"
          @closePopup="closePopup"
        ></CodeHelpPopup>
      </PopupLayout>
    </transition>
  </div>
</template>

<script>
  import PopupLayout from "@/components/popups/PopupLayout";
  import ChangeNumberPopup from "@/components/popups/ChangeNumberPopup";
  import VerificationCode from "@/components/inputs/VerificationCode";
  import popupWork from "@/mixins/popupWork";
  import ResendCodePopup from "@/components/popups/ResendCodePopup";
  import CodeHelpPopup from "@/components/popups/CodeHelpPopup";

  export default {
  name: "StepTwo",
  mixins: [popupWork],
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  components: {
    ResendCodePopup,
    PopupLayout,
    ChangeNumberPopup,
    VerificationCode,
    CodeHelpPopup,
  },
  methods: {
    stepBack() {
      this.$emit("stepBack");
    },
    changeNumber(screen, number) {
      this.$emit("changeNumber", number);
    },
    nextStep() {
      this.$emit("nextEvent", true);
    },
  },
};
</script>

<style lang="scss"></style>
