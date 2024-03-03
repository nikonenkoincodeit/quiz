export const QuizNavbar = {
  template: `<div class="quiz-navbar">
    <div class="progress-bar">
      <div class="progress-bar-label">Готово: <span>{{percent}}%</span></div>
      <div class="progress-bar-field">
        <span :style="{width: percent + '%'}"></span>
      </div>
    </div>
    <div class="quiz-navbar-buttons">
      <button type="button" :disabled="isDisabledPrev" class="quiz-navbar-btn-prev" @click="$emit('prev')">
        <svg viewBox="0 0 24 24" width="18" height="18"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" stroke-width="0" fill-rule="nonzero"></path></svg>
      </button>
      <button type="button" class="quiz-navbar-btn-next" @click="$emit('next')" :disabled="isDisabledNext" >
        Далее
        <svg viewBox="0 0 24 24" width="18" height="18"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" stroke-width="0" fill-rule="nonzero"></path></svg>
      </button>
    </div>
  </div>`,
  emit: ["next", "prev"],
  props: {
    step: {
      type: Number,
    },
    value: {
      type: Array,
      default: () => [],
    },
    percent: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isDisabledPrev() {
      return this.$props.step === 1;
    },
    isDisabledNext() {
      return !this.$props.value[0];
    },
  },
};
