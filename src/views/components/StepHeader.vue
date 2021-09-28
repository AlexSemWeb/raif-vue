<template>
  <div class="prefix-steps__header">
    <div class="prefix-steps-nav">
      <a
        class="prefix-steps-nav__prev"
        v-if="step > 1"
        @click.prevent="stepBack"
      >
        <svg class="sym-arrow">
          <use
            xlink:href="@/assets/svg/svg-symbols/svg-symbols.svg#sym-arrow"
          ></use>
        </svg>
        Назад
      </a>

      <div class="prefix-steps-nav__text">
        <template v-for="(value, name) in headerText">
          <span v-if="step == name" :key="value">{{ value }}</span>
        </template>

        <span class="prefix-steps-nav__step" v-if="showSteps">{{
          stepText
        }}</span>
      </div>
      <div class="prefix-steps-nav__bullets">
        <i
          v-for="step in stepCount"
          :key="step"
          :class="{ __active: step === screenStep }"
        ></i>
      </div>
      <div class="prefix-steps-nav__pin"></div>
    </div>
  </div>
</template>

<script>
  import {STEPS} from "@/constans/steps";

  export default {
  name: "StepHeader",
  props: {
    step: {
      type: Number,
      required: true,
    },
    screenStep: {
      type: Number,
      required: true,
    },
    stepCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      headerText: STEPS,
    };
  },
  computed: {
    stepText() {
      return ` (шаг ${this.screenStep} из ${this.stepCount})`;
    },
    showSteps() {
      return this.step !== 2;
    },
  },
  methods: {
    stepBack() {
      this.$emit("stepBack");
    },
  },
};
</script>

<style lang="scss"></style>
