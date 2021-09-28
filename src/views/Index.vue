<template>
  <div class="prefix-steps prefix-js-steps">
    <StepHeader
      @stepBack="stepBack"
      :step="step"
      :screenStep="screenStep"
      :stepCount="stepCount"
    ></StepHeader>
    <transition name="fade" mode="out-in">
      <div class="prefix-steps__list" :key="step">
        <StepOne
          @nextEvent="nextStep"
          :phoneNumber="phoneNumber"
          v-if="this.step === 1"
        ></StepOne>
        <StepTwo
          @nextEvent="nextStep"
          @stepBack="stepBack"
          @changeNumber="changeNumber"
          :phoneNumber="phoneNumber"
          v-else-if="this.step === 2"
        ></StepTwo>
        <StepThree
          @nextEvent="nextStep"
          @stepBack="stepBack"
          v-else-if="this.step === 3"
        ></StepThree>
      </div>
    </transition>
  </div>
</template>

<script>
  import StepHeader from "@/views/components/StepHeader";
  import StepOne from "@/views/components/StepOne";
  import StepTwo from "@/views/components/StepTwo";
  import StepThree from "@/views/components/StepThree";

  export default {
  name: "stepsLayout",
  components: { StepOne, StepHeader, StepTwo, StepThree },
  data() {
    return {
      step: 1,
      screenStep: 1,
      stepCount: 5,
      phoneNumber: "",
    };
  },
  methods: {
    nextStep(isScreenStep, phoneNumber) {
      this.step += 1;
      this.phoneNumber = phoneNumber;
      if (isScreenStep) {
        this.screenStep += 1;
        return;
      }
    },
    stepBack() {
      this.step -= 1;
    },
    changeNumber(number) {
      this.phoneNumber = number;
    },
  },
};
</script>

<style lang="scss"></style>
