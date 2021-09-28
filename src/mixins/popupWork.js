export default {
  data() {
    return {
      isPopupOpen: false,
      typeOfPopup: "",
    };
  },
  methods: {
    openPopup(typeOfPopup) {
      this.typeOfPopup = typeOfPopup;
      this.isPopupOpen = true;
      if (typeOfPopup === "resendCode") {
        this.$refs.verificationCode.clearInput(false);
      }
    },
    closePopup() {
      this.isPopupOpen = false;
    },
  },
};
