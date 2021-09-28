export default {
  computed: {
    isNotComplete() {
      return this.value.length !== this.length && this.isTyping;
    },
    isComplete() {
      return this.value.length === this.length;
    },
  },
  watch: {
    error() {
      this.isTyping = true;
    },
  },
  methods: {
    focusOutInput() {
      this.isTyping = true;
    },
    clearInput(isFocus = true) {
      this.isTyping = false;
      this.value = "";
      if (isFocus) {
        this.$refs[this.name].$el.focus();
      }
      this.$emit("clearInput");
    },
    typingInInput() {
      this.isTyping = false;
      this.$emit("nextStepAvailable", this.isComplete, this.value);
    },
  },
  mounted() {
    if (this.isComplete) {
      this.$emit("nextStepAvailable", this.isComplete, this.value);
    }
  },
};
