export default {
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isComplete: false,
      error: false,
      newNumber: this.phoneNumber,
    };
  },
  methods: {
    ButtonAvailable(boolean, phone) {
      this.isComplete = boolean;
      this.newNumber = phone;
    },
    nextEvent() {
      if (this.isComplete) {
        this.closePopup();
        this.$emit("nextEvent", false, this.newNumber);
        return;
      }
      this.error = true;
    },
    clearInput() {
      this.error = false;
    },
  },
};
